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
    uploaded_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS meta (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
);
"""


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


def connect() -> sqlite3.Connection:
    conn = sqlite3.connect(config.DB_PATH, timeout=30, isolation_level=None)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA busy_timeout = 30000")
    return conn


@contextmanager
def get_conn():
    conn = connect()
    try:
        yield conn
    finally:
        conn.close()


@contextmanager
def write_tx(conn: sqlite3.Connection):
    """معاملة كتابة حصرية: تمنع تداخل حفظين متزامنين من مستخدمَين مختلفَين."""
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


def init_db() -> None:
    config.DATA_DIR.mkdir(parents=True, exist_ok=True)
    config.UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    config.DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with get_conn() as conn:
        conn.execute("PRAGMA journal_mode = WAL")
        conn.executescript(SCHEMA)
        with write_tx(conn):
            if conn.execute("SELECT COUNT(*) FROM users").fetchone()[0] == 0:
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
