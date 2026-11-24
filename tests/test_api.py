import importlib

import pytest
from fastapi.testclient import TestClient

PW = "Passw0rd!"


@pytest.fixture()
def app(tmp_path, monkeypatch):
    monkeypatch.setenv("HAMOUDA_DATA_DIR", str(tmp_path))
    from backend.app import config, db, main

    importlib.reload(config)
    importlib.reload(db)
    importlib.reload(main)
    return main.app


def client_for(app, username):
    c = TestClient(app)
    c.__enter__()
    r = c.post("/api/auth/login", json={"username": username, "password": PW})
    assert r.status_code == 200, r.text
    return c


def order(oid, num, **extra):
    return {"id": oid, "orderNumber": num, "customer": {"name": "X"}, "stages": [], **extra}


def test_login_required_and_wrong_password(app):
    with TestClient(app) as c:
        assert c.get("/api/state").status_code == 401
        assert c.post("/api/auth/login", json={"username": "manager@hamouda.local", "password": "bad"}).status_code == 401
        assert c.post("/api/auth/login", json={"username": "manager@hamouda.local", "password": PW}).status_code == 200
        me = c.get("/api/auth/me").json()["user"]
        assert me["role"] == "senior_management"
        c.post("/api/auth/logout")
        assert c.get("/api/auth/me").status_code == 401


def test_sync_create_and_other_user_sees_it(app):
    com = client_for(app, "commercial@hamouda.local")
    r = com.post("/api/sync", json={"orders": {"upsert": [{"id": "o1", "baseRev": 0, "data": order("o1", "ORD-0001")}]}}).json()
    assert r["applied"] == 1 and not r["rejected"]
    log = client_for(app, "logistics@hamouda.local")
    st = log.get("/api/state").json()
    assert [o["data"]["orderNumber"] for o in st["orders"]] == ["ORD-0001"]
    assert st["orderCounter"] == 1
    ch = log.get(f"/api/changes?since={r['rev']}").json()
    assert ch["orders"] == []


def test_duplicate_order_number_is_renumbered(app):
    a = client_for(app, "commercial@hamouda.local")
    b = client_for(app, "manufacturing@hamouda.local")
    a.post("/api/sync", json={"orders": {"upsert": [{"id": "o1", "data": order("o1", "ORD-0001")}]}})
    r = b.post("/api/sync", json={
        "orders": {"upsert": [{"id": "o2", "data": order("o2", "ORD-0001")}]},
        "audit": [{"entity": "Order", "entityId": "ORD-0001", "action": "CREATE"}],
    }).json()
    assert r["renumbered"] == {"o2": "ORD-0002"}
    audit = b.get("/api/state").json()["audit"]
    assert audit[0]["entityId"] == "ORD-0002" and audit[0]["byUser"] == "manufacturing@hamouda.local"


def test_conflict_detection(app):
    a = client_for(app, "commercial@hamouda.local")
    b = client_for(app, "logistics@hamouda.local")
    r1 = a.post("/api/sync", json={"orders": {"upsert": [{"id": "o1", "data": order("o1", "ORD-0001")}]}}).json()
    base = r1["rev"]
    ok = b.post("/api/sync", json={"orders": {"upsert": [{"id": "o1", "baseRev": base, "data": order("o1", "ORD-0001", hsCode="B")}]}}).json()
    assert ok["applied"] == 1
    stale = a.post("/api/sync", json={"orders": {"upsert": [{"id": "o1", "baseRev": base, "data": order("o1", "ORD-0001", hsCode="A")}]}}).json()
    assert stale["rejected"][0]["reason"] == "conflict"
    assert stale["rejected"][0]["current"]["data"]["hsCode"] == "B"


def test_permissions_enforced(app):
    log = client_for(app, "logistics@hamouda.local")
    r = log.post("/api/sync", json={
        "finance": {"baseRev": 0, "data": {"employees": [{"id": "e"}]}},
        "orders": {"upsert": [{"id": "o9", "data": order("o9", "ORD-0009")}]},
    }).json()
    reasons = {(x["kind"], x["id"]): x["reason"] for x in r["rejected"]}
    assert reasons == {("doc", "finance"): "forbidden", ("order", "o9"): "forbidden"}
    assert log.get("/api/users").status_code == 403
    fin = client_for(app, "finance@hamouda.local")
    r = fin.post("/api/sync", json={"finance": {"baseRev": 0, "data": {"employees": [], "tab": "ui-only"}}}).json()
    assert r["applied"] == 1
    doc = fin.get("/api/state").json()["docs"]["finance"]["data"]
    assert "tab" not in doc


def test_user_management_and_password_change(app):
    mgr = client_for(app, "manager@hamouda.local")
    r = mgr.post("/api/users", json={"username": "New@Hamouda.local", "password": "Secret123", "role": "finance_team"})
    assert r.status_code == 201
    with TestClient(app) as c:
        assert c.post("/api/auth/login", json={"username": "new@hamouda.local", "password": "Secret123"}).status_code == 200
        assert c.post("/api/auth/change-password", json={"currentPassword": "Secret123", "newPassword": "Another123"}).status_code == 200
        assert c.get("/api/auth/me").status_code == 200  # الجلسة الحالية تبقى
    uid = r.json()["user"]["id"]
    mgr.patch(f"/api/users/{uid}", json={"active": False})
    with TestClient(app) as c:
        assert c.post("/api/auth/login", json={"username": "new@hamouda.local", "password": "Another123"}).status_code == 401


def test_attachments(app):
    c = client_for(app, "logistics@hamouda.local")
    r = c.post("/api/attachments", files={"file": ("bl.pdf", b"%PDF-1.4 test", "application/pdf")})
    assert r.status_code == 201
    att = r.json()
    got = c.get(f"/api/attachments/{att['id']}")
    assert got.status_code == 200 and got.content == b"%PDF-1.4 test"
    assert c.post("/api/attachments", files={"file": ("x.exe", b"MZ", "application/x-msdownload")}).status_code == 415
    c.delete(f"/api/attachments/{att['id']}")
    assert c.get(f"/api/attachments/{att['id']}").status_code == 404
