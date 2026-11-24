"""
منظومة العالمية — حمودة: الخادم الخلفي (Python / FastAPI).

يقدّم:
  • تسجيل دخول حقيقي (كلمات مرور مُجزّأة + جلسات بكوكي HttpOnly)
  • تخزين مركزي لكل الطلبيات والمخازن والمالية وسجل التدقيق في SQLite (مشترك بين كل المستخدمين)
  • مزامنة تزايدية مع كشف التعارض عند تعديل نفس الطلبية من جهازين
  • رفع المرفقات (PDF/صور) وحفظها على الخادم
  • إدارة المستخدمين والنسخ الاحتياطي للمدير
  • الواجهة نفسها (frontend/) كملفات ثابتة
"""
import json
import re
import time
import uuid
from urllib.parse import quote
from collections import defaultdict
from contextlib import asynccontextmanager
from datetime import datetime, timedelta, timezone
from typing import Any, Optional

from fastapi import Depends, FastAPI, File, HTTPException, Query, Request, Response, UploadFile
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from . import config
from .db import get_conn, init_db, meta_get, meta_set, next_rev, now_iso, write_tx
from .permissions import PERMISSIONS, ROLES, can
from .security import hash_password, new_token, token_digest, verify_password

@asynccontextmanager
async def _lifespan(_app: FastAPI):
    init_db()
    yield


app = FastAPI(title="Hamouda Operations API", version="1.0.0", docs_url="/api/docs",
              openapi_url="/api/openapi.json", lifespan=_lifespan)

UI_ONLY_FINANCE_KEYS = ("tab", "sub", "period", "expPeriod", "expKind")
SETTINGS_KEYS = ("yellowThresholdDays",)
ORDER_NO_RE = re.compile(r"^ORD-(\d+)$")


@app.middleware("http")
async def _security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers.setdefault("X-Content-Type-Options", "nosniff")
    response.headers.setdefault("Referrer-Policy", "same-origin")
    response.headers.setdefault("X-Frame-Options", "SAMEORIGIN")
    if request.url.path.startswith("/api/"):
        response.headers.setdefault("Cache-Control", "no-store")
    return response


# ============================================================
# المصادقة
# ============================================================
class CurrentUser(BaseModel):
    id: int
    username: str
    display_name: str
    role: str

    @property
    def permissions(self) -> list[str]:
        return PERMISSIONS.get(self.role, [])

    def can(self, perm: str) -> bool:
        return can(self.role, perm)


def current_user(request: Request) -> CurrentUser:
    token = request.cookies.get(config.COOKIE_NAME)
    if not token:
        raise HTTPException(401, "not_authenticated")
    with get_conn() as conn:
        row = conn.execute(
            """SELECT u.id, u.username, u.display_name, u.role, u.active, s.expires_at
               FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_digest=?""",
            (token_digest(token),),
        ).fetchone()
    if not row or not row["active"] or row["expires_at"] < now_iso():
        raise HTTPException(401, "session_expired")
    return CurrentUser(id=row["id"], username=row["username"], display_name=row["display_name"], role=row["role"])


def require(perm: str):
    def dep(user: CurrentUser = Depends(current_user)) -> CurrentUser:
        if not user.can(perm):
            raise HTTPException(403, "forbidden")
        return user

    return dep


def user_payload(user: CurrentUser) -> dict:
    return {
        "id": user.id,
        "username": user.username,
        "displayName": user.display_name,
        "role": user.role,
        "permissions": user.permissions,
    }


class LoginIn(BaseModel):
    username: str
    password: str


# حماية بسيطة من تخمين كلمات المرور: 10 محاولات فاشلة كحد أقصى لكل اسم مستخدم/عنوان خلال 15 دقيقة
_FAILED: dict[str, list[float]] = defaultdict(list)
_FAIL_WINDOW = 15 * 60
_FAIL_MAX = 10


def _too_many(key: str) -> bool:
    cutoff = time.time() - _FAIL_WINDOW
    _FAILED[key] = [t for t in _FAILED[key] if t > cutoff]
    return len(_FAILED[key]) >= _FAIL_MAX


@app.post("/api/auth/login")
def login(body: LoginIn, request: Request, response: Response):
    username = body.username.strip().lower()
    ip = request.client.host if request.client else "?"
    keys = (f"u:{username}", f"ip:{ip}")
    if any(_too_many(k) for k in keys):
        raise HTTPException(429, "too_many_attempts")
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM users WHERE username=?", (username,)).fetchone()
        if not row or not row["active"] or not verify_password(body.password, row["password_hash"]):
            for k in keys:
                _FAILED[k].append(time.time())
            raise HTTPException(401, "invalid_credentials")
        token = new_token()
        expires = (datetime.now(timezone.utc) + timedelta(hours=config.SESSION_HOURS)).isoformat(
            timespec="milliseconds"
        ).replace("+00:00", "Z")
        with write_tx(conn):
            conn.execute("DELETE FROM sessions WHERE expires_at < ?", (now_iso(),))
            conn.execute(
                "INSERT INTO sessions(token_digest,user_id,created_at,expires_at) VALUES(?,?,?,?)",
                (token_digest(token), row["id"], now_iso(), expires),
            )
    for k in keys:
        _FAILED.pop(k, None)
    response.set_cookie(
        config.COOKIE_NAME, token, httponly=True, samesite="lax", secure=config.COOKIE_SECURE,
        max_age=config.SESSION_HOURS * 3600, path="/",
    )
    user = CurrentUser(id=row["id"], username=row["username"], display_name=row["display_name"], role=row["role"])
    return {"user": user_payload(user)}


@app.post("/api/auth/logout")
def logout(request: Request, response: Response):
    token = request.cookies.get(config.COOKIE_NAME)
    if token:
        with get_conn() as conn:
            conn.execute("DELETE FROM sessions WHERE token_digest=?", (token_digest(token),))
    response.delete_cookie(config.COOKIE_NAME, path="/")
    return {"ok": True}


@app.get("/api/auth/me")
def me(user: CurrentUser = Depends(current_user)):
    return {"user": user_payload(user)}


def _start_session(conn, user_id: int, response: Response) -> None:
    token = new_token()
    expires = (datetime.now(timezone.utc) + timedelta(hours=config.SESSION_HOURS)).isoformat(
        timespec="milliseconds"
    ).replace("+00:00", "Z")
    conn.execute(
        "INSERT INTO sessions(token_digest,user_id,created_at,expires_at) VALUES(?,?,?,?)",
        (token_digest(token), user_id, now_iso(), expires),
    )
    response.set_cookie(
        config.COOKIE_NAME, token, httponly=True, samesite="lax", secure=config.COOKIE_SECURE,
        max_age=config.SESSION_HOURS * 3600, path="/",
    )


class SetupIn(BaseModel):
    username: str = Field(min_length=3, max_length=120)
    password: str = Field(min_length=8, max_length=200)
    displayName: str = ""


@app.post("/api/auth/setup")
def first_setup(body: SetupIn, response: Response):
    """أول تشغيل بلا حسابات: ينشئ حساب المدير (الإدارة العليا) بالبريد وكلمة المرور التي يختارها صاحب المنظومة."""
    username = body.username.strip().lower()
    with get_conn() as conn:
        with write_tx(conn):
            if conn.execute("SELECT COUNT(*) FROM users").fetchone()[0] > 0:
                raise HTTPException(409, "already_setup")
            conn.execute(
                "INSERT INTO users(username, display_name, password_hash, role, created_at) VALUES(?,?,?,?,?)",
                (username, body.displayName.strip(), hash_password(body.password), "senior_management", now_iso()),
            )
            row = conn.execute("SELECT * FROM users WHERE username=?", (username,)).fetchone()
            _start_session(conn, row["id"], response)
    user = CurrentUser(id=row["id"], username=row["username"], display_name=row["display_name"], role=row["role"])
    return {"user": user_payload(user)}


@app.get("/api/auth/login-options")
def login_options():
    """قائمة الاختيار السريع في شاشة الدخول (وضع التجربة فقط)، وهل المنظومة تحتاج إعدادًا أوليًا."""
    with get_conn() as conn:
        needs_setup = conn.execute("SELECT COUNT(*) FROM users").fetchone()[0] == 0
        rows = conn.execute("SELECT username, role FROM users WHERE active=1 ORDER BY id").fetchall()
    if not config.DEMO_AUTOFILL:
        return {"accounts": [], "demoPassword": None, "maxUploadBytes": config.MAX_UPLOAD_BYTES,
                "needsSetup": needs_setup}
    return {"accounts": [{"username": r["username"], "role": r["role"]} for r in rows],
            "demoPassword": config.DEFAULT_PASSWORD, "maxUploadBytes": config.MAX_UPLOAD_BYTES,
            "needsSetup": needs_setup}


class ChangePasswordIn(BaseModel):
    currentPassword: str
    newPassword: str = Field(min_length=8, max_length=200)


@app.post("/api/auth/change-password")
def change_password(body: ChangePasswordIn, request: Request, user: CurrentUser = Depends(current_user)):
    with get_conn() as conn:
        row = conn.execute("SELECT password_hash FROM users WHERE id=?", (user.id,)).fetchone()
        if not verify_password(body.currentPassword, row["password_hash"]):
            raise HTTPException(400, "wrong_current_password")
        current_digest = token_digest(request.cookies.get(config.COOKIE_NAME, ""))
        with write_tx(conn):
            conn.execute("UPDATE users SET password_hash=? WHERE id=?", (hash_password(body.newPassword), user.id))
            # إنهاء الجلسات الأخرى لهذا المستخدم على الأجهزة الثانية
            conn.execute("DELETE FROM sessions WHERE user_id=? AND token_digest<>?", (user.id, current_digest))
    return {"ok": True}


# ============================================================
# إدارة المستخدمين (المدير فقط)
# ============================================================
class UserCreateIn(BaseModel):
    username: str = Field(min_length=3, max_length=120)
    password: str = Field(min_length=8, max_length=200)
    role: str
    displayName: str = ""


class UserUpdateIn(BaseModel):
    role: Optional[str] = None
    active: Optional[bool] = None
    password: Optional[str] = Field(default=None, min_length=8, max_length=200)
    displayName: Optional[str] = None


def _user_row(r) -> dict:
    return {
        "id": r["id"], "username": r["username"], "displayName": r["display_name"],
        "role": r["role"], "active": bool(r["active"]), "createdAt": r["created_at"],
    }


@app.get("/api/users")
def list_users(user: CurrentUser = Depends(require("system:manage_settings"))):
    with get_conn() as conn:
        rows = conn.execute("SELECT * FROM users ORDER BY id").fetchall()
    return {"users": [_user_row(r) for r in rows], "roles": ROLES}


@app.post("/api/users", status_code=201)
def create_user(body: UserCreateIn, user: CurrentUser = Depends(require("system:manage_settings"))):
    if body.role not in ROLES:
        raise HTTPException(400, "invalid_role")
    username = body.username.strip().lower()
    with get_conn() as conn:
        if conn.execute("SELECT 1 FROM users WHERE username=?", (username,)).fetchone():
            raise HTTPException(409, "username_taken")
        with write_tx(conn):
            conn.execute(
                "INSERT INTO users(username, display_name, password_hash, role, created_at) VALUES(?,?,?,?,?)",
                (username, body.displayName.strip(), hash_password(body.password), body.role, now_iso()),
            )
            _audit(conn, user, "User", username, "CREATE")
        row = conn.execute("SELECT * FROM users WHERE username=?", (username,)).fetchone()
    return {"user": _user_row(row)}


@app.patch("/api/users/{user_id}")
def update_user(user_id: int, body: UserUpdateIn, user: CurrentUser = Depends(require("system:manage_settings"))):
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM users WHERE id=?", (user_id,)).fetchone()
        if not row:
            raise HTTPException(404, "not_found")
        if body.role is not None and body.role not in ROLES:
            raise HTTPException(400, "invalid_role")
        if user_id == user.id and (body.active is False or (body.role and body.role != user.role)):
            raise HTTPException(400, "cannot_demote_self")
        with write_tx(conn):
            if body.role is not None:
                conn.execute("UPDATE users SET role=? WHERE id=?", (body.role, user_id))
            if body.displayName is not None:
                conn.execute("UPDATE users SET display_name=? WHERE id=?", (body.displayName.strip(), user_id))
            if body.active is not None:
                conn.execute("UPDATE users SET active=? WHERE id=?", (1 if body.active else 0, user_id))
                if not body.active:
                    conn.execute("DELETE FROM sessions WHERE user_id=?", (user_id,))
            if body.password:
                conn.execute("UPDATE users SET password_hash=? WHERE id=?", (hash_password(body.password), user_id))
                conn.execute("DELETE FROM sessions WHERE user_id=?", (user_id,))
            _audit(conn, user, "User", row["username"], "UPDATE")
        row = conn.execute("SELECT * FROM users WHERE id=?", (user_id,)).fetchone()
    return {"user": _user_row(row)}


# ============================================================
# البيانات المشتركة: قراءة كاملة + تغييرات تزايدية + مزامنة
# ============================================================
def _audit(conn, user: CurrentUser, entity: str, entity_id: str, action: str, diff: str = "", by_role: str = "",
           at: str = "", rev: Optional[int] = None) -> None:
    conn.execute(
        "INSERT INTO audit_log(rev, entity, entity_id, action, by_role, by_user, at, diff) VALUES(?,?,?,?,?,?,?,?)",
        (rev if rev is not None else next_rev(conn), entity, entity_id, action, by_role or user.role,
         user.username, at or now_iso(), diff),
    )


def _audit_rows(rows) -> list[dict]:
    return [
        {"entity": r["entity"], "entityId": r["entity_id"], "action": r["action"], "byRole": r["by_role"],
         "byUser": r["by_user"], "at": r["at"], "diff": r["diff"], "rev": r["rev"]}
        for r in rows
    ]


def _record_out(r) -> dict:
    return {"id": r["id"], "rev": r["rev"], "deleted": bool(r["deleted"]),
            "data": None if r["deleted"] else json.loads(r["data"])}


def _snapshot(conn, since: Optional[int]) -> dict:
    if since is None:
        recs = conn.execute("SELECT * FROM records WHERE deleted=0").fetchall()
        audit = conn.execute("SELECT * FROM audit_log ORDER BY id DESC LIMIT ?", (config.AUDIT_LIMIT,)).fetchall()
    else:
        recs = conn.execute("SELECT * FROM records WHERE rev>?", (since,)).fetchall()
        audit = conn.execute(
            "SELECT * FROM audit_log WHERE rev>? ORDER BY id DESC LIMIT ?", (since, config.AUDIT_LIMIT)
        ).fetchall()
    out: dict[str, Any] = {
        "rev": int(meta_get(conn, "rev", "0")),
        "orderCounter": int(meta_get(conn, "order_counter", "0")),
        "orders": [], "warehouses": [], "docs": {}, "audit": _audit_rows(audit),
    }
    for r in recs:
        if r["kind"] == "order":
            out["orders"].append(_record_out(r))
        elif r["kind"] == "warehouse":
            out["warehouses"].append(_record_out(r))
        elif r["kind"] == "doc":
            out["docs"][r["id"]] = _record_out(r)
    return out


@app.get("/api/state")
def get_state(user: CurrentUser = Depends(current_user)):
    with get_conn() as conn:
        return _snapshot(conn, None)


@app.get("/api/changes")
def get_changes(since: int = Query(0, ge=0), user: CurrentUser = Depends(current_user)):
    with get_conn() as conn:
        return _snapshot(conn, since)


class RecordIn(BaseModel):
    id: str = Field(min_length=1, max_length=120)
    baseRev: int = 0
    data: dict


class KindChanges(BaseModel):
    upsert: list[RecordIn] = []
    delete: list[RecordIn] = []  # data هنا يُتجاهل؛ نحتاج id و baseRev فقط


class DocIn(BaseModel):
    baseRev: int = 0
    data: dict


class AuditIn(BaseModel):
    entity: str = ""
    entityId: str = ""
    action: str = ""
    byRole: str = ""
    at: str = ""
    diff: str = ""


class SyncIn(BaseModel):
    orders: KindChanges = KindChanges()
    warehouses: KindChanges = KindChanges()
    finance: Optional[DocIn] = None
    settings: Optional[DocIn] = None
    audit: list[AuditIn] = []
    force: bool = False  # استيراد نسخة احتياطية: يتجاوز كشف التعارض (للمدير فقط)


def _order_num(n: Any) -> Optional[int]:
    m = ORDER_NO_RE.match(str(n or ""))
    return int(m.group(1)) if m else None


@app.post("/api/sync")
def sync(body: SyncIn, user: CurrentUser = Depends(current_user)):
    """
    يستقبل التعديلات المحلية للمتصفح. لكل سجل نرسل baseRev = رقم المراجعة الذي بُني عليه التعديل.
    إن كان السجل تغيّر على الخادم بعده (مستخدم آخر عدّله) يُرفض التعديل كـ«تعارض» ويُعاد النص الحالي من الخادم.
    """
    force = body.force and user.can("system:manage_settings")
    rejected: list[dict] = []  # {kind,id,reason,current}
    renumbered: dict[str, str] = {}
    applied = 0

    with get_conn() as conn, write_tx(conn):
        rev = next_rev(conn)
        ts = now_iso()
        counter = int(meta_get(conn, "order_counter", "0"))

        def current(kind: str, rid: str):
            return conn.execute("SELECT * FROM records WHERE kind=? AND id=?", (kind, rid)).fetchone()

        def reject(kind, rid, reason, row):
            rejected.append({"kind": kind, "id": rid, "reason": reason, "current": _record_out(row) if row else None})

        def write(kind, rid, data, deleted=False):
            conn.execute(
                """INSERT INTO records(kind,id,data,rev,deleted,updated_at,updated_by) VALUES(?,?,?,?,?,?,?)
                   ON CONFLICT(kind,id) DO UPDATE SET data=excluded.data, rev=excluded.rev,
                   deleted=excluded.deleted, updated_at=excluded.updated_at, updated_by=excluded.updated_by""",
                (kind, rid, json.dumps(data, ensure_ascii=False), rev, 1 if deleted else 0, ts, user.username),
            )

        def stale(row, base_rev) -> bool:
            return (not force) and row is not None and row["rev"] != base_rev

        # ---------- الطلبيات ----------
        used_numbers = {
            json.loads(r["data"]).get("orderNumber"): r["id"]
            for r in conn.execute("SELECT id, data FROM records WHERE kind='order' AND deleted=0").fetchall()
        }
        for item in body.orders.upsert:
            row = current("order", item.id)
            if item.data.get("id") != item.id:
                item.data["id"] = item.id
            if stale(row, item.baseRev):
                reject("order", item.id, "conflict", row)
                continue
            is_new = row is None or row["deleted"]
            if is_new and not (user.can("order:create") or item.data.get("isDemo") or force
                               or user.can("system:manage_settings")):
                reject("order", item.id, "forbidden", row)
                continue
            if is_new:
                num = item.data.get("orderNumber")
                n = _order_num(num)
                if n is None or (num in used_numbers and used_numbers[num] != item.id):
                    # رقم مكرر (أنشأ مستخدمان طلبية في نفس اللحظة) — الخادم يمنح الرقم التالي
                    counter += 1
                    new_num = f"ORD-{counter:04d}"
                    renumbered[item.id] = new_num
                    item.data["orderNumber"] = new_num
                    for a in body.audit:
                        if a.entityId == num:
                            a.entityId = new_num
                else:
                    counter = max(counter, n)
                used_numbers[item.data["orderNumber"]] = item.id
            write("order", item.id, item.data)
            applied += 1

        for item in body.orders.delete:
            row = current("order", item.id)
            if row is None or row["deleted"]:
                continue
            data = json.loads(row["data"])
            if not (data.get("isDemo") or user.can("system:manage_settings")):
                reject("order", item.id, "forbidden", row)
                continue
            if stale(row, item.baseRev):
                reject("order", item.id, "conflict", row)
                continue
            write("order", item.id, data, deleted=True)
            applied += 1

        # ---------- المخازن ----------
        wh_allowed = user.can("warehouse:edit") or user.can("system:manage_settings")
        for item in body.warehouses.upsert:
            row = current("warehouse", item.id)
            if not wh_allowed:
                reject("warehouse", item.id, "forbidden", row)
            elif stale(row, item.baseRev):
                reject("warehouse", item.id, "conflict", row)
            else:
                item.data["id"] = item.id
                write("warehouse", item.id, item.data)
                applied += 1
        for item in body.warehouses.delete:
            row = current("warehouse", item.id)
            if row is None or row["deleted"]:
                continue
            if not wh_allowed:
                reject("warehouse", item.id, "forbidden", row)
            elif stale(row, item.baseRev):
                reject("warehouse", item.id, "conflict", row)
            else:
                write("warehouse", item.id, json.loads(row["data"]), deleted=True)
                applied += 1

        # ---------- المستندات المفردة: المالية والإعدادات ----------
        for doc_id, doc, perm, keys in (
            ("finance", body.finance, "finance:manage", None),
            ("settings", body.settings, "system:manage_settings", SETTINGS_KEYS),
        ):
            if doc is None:
                continue
            row = current("doc", doc_id)
            if not user.can(perm):
                reject("doc", doc_id, "forbidden", row)
                continue
            if stale(row, doc.baseRev):
                reject("doc", doc_id, "conflict", row)
                continue
            data = dict(doc.data)
            if keys:
                data = {k: data[k] for k in keys if k in data}
            for k in UI_ONLY_FINANCE_KEYS if doc_id == "finance" else ():
                data.pop(k, None)
            write("doc", doc_id, data)
            applied += 1

        # ---------- سجل التدقيق ----------
        for a in body.audit[:200]:
            _audit(conn, user, a.entity[:80], str(a.entityId)[:120], a.action[:80], a.diff[:2000],
                   by_role=a.byRole[:80], at=a.at[:40] or ts, rev=rev)

        meta_set(conn, "order_counter", counter)

    return {"rev": rev, "applied": applied, "rejected": rejected, "renumbered": renumbered, "orderCounter": counter}


@app.get("/api/backup")
def backup(user: CurrentUser = Depends(require("system:manage_settings"))):
    """نسخة احتياطية كاملة من الخادم بنفس شكل ملف النسخة القديمة (قابلة للاستيراد من الإعدادات)."""
    with get_conn() as conn:
        snap = _snapshot(conn, None)
        all_audit = conn.execute("SELECT * FROM audit_log ORDER BY id DESC").fetchall()
    settings = (snap["docs"].get("settings") or {}).get("data") or {}
    payload = {
        "orders": [r["data"] for r in snap["orders"]],
        "warehouses": [r["data"] for r in snap["warehouses"]],
        "finance": (snap["docs"].get("finance") or {}).get("data"),
        "auditLog": _audit_rows(all_audit),
        "orderCounter": snap["orderCounter"],
        "yellowThresholdDays": settings.get("yellowThresholdDays", 3),
        "exportedAt": now_iso(),
        "exportedBy": user.username,
    }
    stamp = now_iso()[:19].replace(":", "-").replace("T", "-")
    return JSONResponse(payload, headers={"Content-Disposition": f'attachment; filename="hamouda-server-backup-{stamp}.json"'})


# ============================================================
# المرفقات
# ============================================================
ATT_ID_RE = re.compile(r"^att[A-Za-z0-9_-]{6,80}$")


def _check_att_id(att_id: str) -> None:
    if not ATT_ID_RE.match(att_id):
        raise HTTPException(400, "bad_id")


@app.post("/api/attachments", status_code=201)
async def upload_attachment(file: UploadFile = File(...), user: CurrentUser = Depends(current_user)):
    """المرفق يُحفظ داخل قاعدة البيانات نفسها، فيعمل على أي استضافة (حتى بدون قرص دائم)."""
    ctype = (file.content_type or "").lower()
    name = (file.filename or "document").replace("\\", "/").split("/")[-1][:200]
    if not (ctype.startswith("image/") or ctype == "application/pdf" or name.lower().endswith(".pdf")):
        raise HTTPException(415, "ui.attBadType")
    content = bytearray()
    while chunk := await file.read(1024 * 1024):
        content.extend(chunk)
        if len(content) > config.MAX_UPLOAD_BYTES:
            raise HTTPException(413, "ui.attTooBig")
    att_id = "att" + uuid.uuid4().hex
    meta = {"id": att_id, "name": name, "size": len(content), "type": ctype or "application/octet-stream",
            "at": now_iso(), "by": user.role}
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO attachments(id,name,type,size,uploaded_by,uploaded_at,content) VALUES(?,?,?,?,?,?,?)",
            (att_id, name, meta["type"], meta["size"], user.username, meta["at"], bytes(content)),
        )
    return meta


@app.get("/api/attachments/{att_id}")
def get_attachment(att_id: str, download: bool = False, user: CurrentUser = Depends(current_user)):
    _check_att_id(att_id)
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM attachments WHERE id=?", (att_id,)).fetchone()
    if not row or row["content"] is None:
        raise HTTPException(404, "ui.attMissing")
    disp = "attachment" if download else "inline"
    return Response(
        content=bytes(row["content"]), media_type=row["type"],
        headers={"Content-Disposition": f"{disp}; filename*=UTF-8''{quote(row['name'])}"},
    )


@app.delete("/api/attachments/{att_id}")
def delete_attachment(att_id: str, user: CurrentUser = Depends(current_user)):
    _check_att_id(att_id)
    with get_conn() as conn:
        conn.execute("DELETE FROM attachments WHERE id=?", (att_id,))
    return {"ok": True}


@app.get("/api/health")
def health():
    return {"ok": True}


# ============================================================
# الواجهة (ملفات ثابتة) — تُركَّب آخرًا حتى لا تحجب مسارات /api
# ============================================================
app.mount("/", StaticFiles(directory=config.FRONTEND_DIR, html=True), name="frontend")
