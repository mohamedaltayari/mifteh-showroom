"""قاعدة البيانات (SQLite) — الجداول وإنشاؤها وبذر الحسابات الافتراضية."""
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone

from . import config
from .permissions import DEFAULT_ACCOUNTS
from .security import hash_password

SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT NOT NULL UNIQUE,
    display_name  TEXT NOT NULL DEFAULT '',
    password_hash TEXT NOT NULL,
    role          TEXT NOT NULL,
    active        INTEGER NOT NULL DEFAULT 1,
    created_at    TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
    token_digest TEXT PRIMARY KEY,
    user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at   TEXT NOT NULL,
    expires_at   TEXT NOT NULL
);

-- كل سجل (طلبية / مخزن / مستند مفرد مثل المالية والإعدادات) يُخزن كـ JSON
-- مع رقم مراجعة (rev) يزيد مع كل تعديل: يستخدمه المتصفح لجلب التغييرات وكشف التعارض.
CREATE TABLE IF NOT EXISTS records (
    kind       TEXT NOT NULL,
    id         TEXT NOT NULL,
    data       TEXT NOT NULL,
    rev        INTEGER NOT NULL,
    deleted    INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL,
    updated_by TEXT NOT NULL DEFAULT '',
    PRIMARY KEY (kind, id)
);
CREATE INDEX IF NOT EXISTS idx_records_rev ON records(rev);

CREATE TABLE IF NOT EXISTS audit_log (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    rev       INTEGER NOT NULL,
    entity    TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    action    TEXT NOT NULL,
    by_role   TEXT NOT NULL DEFAULT '',
    by_user   TEXT NOT NULL DEFAULT '',
    at        TEXT NOT NULL,
    diff      TEXT NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_audit_rev ON audit_log(rev);

CREATE TABLE IF NOT EXISTS attachments (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    type        TEXT NOT NULL,
    size        INTEGER NOT NULL,
    uploaded_by TEXT NOT NULL,
    uploaded_at TEXT NOT NULL,
    content     BLOB
);

CREATE TABLE IF NOT EXISTS meta (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
);
"""


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


class _Row(dict):
    """صف يدعم الوصول بالاسم row["x"] وبالرقم row[0] — مثل sqlite3.Row."""

    def __init__(self, cols, values):
        super().__init__(zip(cols, values))
        self._values = values

    def __getitem__(self, key):
        if isinstance(key, int):
            return self._values[key]
        return super().__getitem__(key)

    def keys(self):  # noqa: D401
        return list(super().keys())


class _PgCursor:
    def __init__(self, cur):
        self._cur = cur

    def _cols(self):
        return [d.name for d in self._cur.description] if self._cur.description else []

    def fetchone(self):
        r = self._cur.fetchone()
        return None if r is None else _Row(self._cols(), r)

    def fetchall(self):
        cols = self._cols()
        return [_Row(cols, r) for r in self._cur.fetchall()]

    def __iter__(self):
        return iter(self.fetchall())


class PgConnection:
    """غلاف بسيط حول psycopg بنفس واجهة sqlite3 المستخدمة في المشروع (علامات ? والصفوف)."""

    is_pg = True

    def __init__(self, url: str):
        import psycopg

        self._conn = psycopg.connect(url, autocommit=True, prepare_threshold=None, connect_timeout=15)
        if config.DB_SCHEMA != "public":
            self._conn.execute(f'CREATE SCHEMA IF NOT EXISTS "{config.DB_SCHEMA}"')
        self._conn.execute(f'SET search_path TO "{config.DB_SCHEMA}"')

    def execute(self, sql: str, params=()):
        return _PgCursor(self._conn.execute(sql.replace("?", "%s"), params))

    def executescript(self, script: str):
        for stmt in script.split(";"):
            if stmt.strip():
                self._conn.execute(stmt)

    def close(self):
        self._conn.close()


def connect():
    if config.DATABASE_URL:
        return PgConnection(config.DATABASE_URL)
    conn = sqlite3.connect(config.DB_PATH, timeout=30, isolation_level=None)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA busy_timeout = 30000")
    return conn


def is_pg(conn) -> bool:
    return getattr(conn, "is_pg", False)


@contextmanager
def get_conn():
    conn = connect()
    try:
        yield conn
    finally:
        conn.close()


@contextmanager
def write_tx(conn):
    """معاملة كتابة حصرية: تمنع تداخل حفظين متزامنين من مستخدمَين مختلفَين."""
    if is_pg(conn):
        conn.execute("BEGIN")
        conn.execute("SELECT pg_advisory_xact_lock(724501)")
    else:
        conn.execute("BEGIN IMMEDIATE")
    try:
        yield conn
        conn.execute("COMMIT")
    except BaseException:
        conn.execute("ROLLBACK")
        raise


def meta_get(conn, key: str, default: str = "0") -> str:
    row = conn.execute("SELECT value FROM meta WHERE key=?", (key,)).fetchone()
    return row["value"] if row else default


def meta_set(conn, key: str, value) -> None:
    conn.execute(
        "INSERT INTO meta(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",
        (key, str(value)),
    )


def next_rev(conn) -> int:
    rev = int(meta_get(conn, "rev", "0")) + 1
    meta_set(conn, "rev", rev)
    return rev


def pg_schema() -> str:
    return (SCHEMA.replace("INTEGER PRIMARY KEY AUTOINCREMENT", "BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY")
            .replace("BLOB", "BYTEA"))


def init_db() -> None:
    if not config.DATABASE_URL:
        config.DATA_DIR.mkdir(parents=True, exist_ok=True)
        config.DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with get_conn() as conn:
        if is_pg(conn):
            with write_tx(conn):
                conn.executescript("\n".join(l for l in pg_schema().splitlines() if not l.strip().startswith("--")))
        else:
            conn.execute("PRAGMA journal_mode = WAL")
            conn.executescript(SCHEMA)
            cols = [r[1] for r in conn.execute("PRAGMA table_info(attachments)").fetchall()]
            if "content" not in cols:
                conn.execute("ALTER TABLE attachments ADD COLUMN content BLOB")
        with write_tx(conn):
            if config.SEED_DEFAULT_ACCOUNTS and conn.execute("SELECT COUNT(*) FROM users").fetchone()[0] == 0:
                for username, role in DEFAULT_ACCOUNTS:
                    conn.execute(
                        "INSERT INTO users(username, display_name, password_hash, role, created_at) VALUES(?,?,?,?,?)",
                        (username, "", hash_password(config.DEFAULT_PASSWORD), role, now_iso()),
                    )
            # المخزن الافتراضي، كما كان يُنشأ في النسخة القديمة
            if conn.execute("SELECT COUNT(*) FROM records WHERE kind='warehouse'").fetchone()[0] == 0:
                import json

                rev = next_rev(conn)
                wh = {"id": "wh-main", "name": "المخزن الرئيسي", "location": "جدة", "entries": []}
                conn.execute(
                    "INSERT INTO records(kind,id,data,rev,updated_at,updated_by) VALUES('warehouse',?,?,?,?,?)",
                    (wh["id"], json.dumps(wh, ensure_ascii=False), rev, now_iso(), "system"),
                )
