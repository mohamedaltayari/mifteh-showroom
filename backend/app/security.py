"""تجزئة كلمات المرور (PBKDF2-SHA256) وإنشاء رموز الجلسات — مكتبة بايثون القياسية فقط."""
import hashlib
import hmac
import secrets

_ITERATIONS = 260_000


def hash_password(password: str) -> str:
    salt = secrets.token_bytes(16)
    dk = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, _ITERATIONS)
    return f"pbkdf2_sha256${_ITERATIONS}${salt.hex()}${dk.hex()}"


def verify_password(password: str, stored: str) -> bool:
    try:
        algo, iters, salt_hex, hash_hex = stored.split("$")
        if algo != "pbkdf2_sha256":
            return False
        dk = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), bytes.fromhex(salt_hex), int(iters))
        return hmac.compare_digest(dk.hex(), hash_hex)
    except (ValueError, TypeError):
        return False


def new_token() -> str:
    return secrets.token_urlsafe(32)


def token_digest(token: str) -> str:
    """نخزّن بصمة الرمز فقط في قاعدة البيانات، فتسريب القاعدة لا يكشف جلسات صالحة."""
    return hashlib.sha256(token.encode("utf-8")).hexdigest()
