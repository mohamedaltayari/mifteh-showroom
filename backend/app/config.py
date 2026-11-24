"""إعدادات المنظومة — تُقرأ من متغيرات البيئة مع قيم افتراضية آمنة للتشغيل المحلي."""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = Path(os.environ.get("HAMOUDA_DATA_DIR", BASE_DIR / "data"))
DB_PATH = Path(os.environ.get("HAMOUDA_DB_PATH", DATA_DIR / "hamouda.db"))
UPLOAD_DIR = Path(os.environ.get("HAMOUDA_UPLOAD_DIR", DATA_DIR / "uploads"))
FRONTEND_DIR = BASE_DIR / "frontend"

# مدة صلاحية جلسة الدخول (بالساعات)
SESSION_HOURS = int(os.environ.get("HAMOUDA_SESSION_HOURS", "12"))
# اجعلها 1 عند التشغيل خلف HTTPS حتى لا يُرسل الكوكي إلا عبر اتصال مشفّر
COOKIE_SECURE = os.environ.get("HAMOUDA_COOKIE_SECURE", "0") == "1"
COOKIE_NAME = "hamouda_session"

# كلمة المرور الأولية للحسابات الافتراضية — يجب تغييرها بعد أول دخول
DEFAULT_PASSWORD = os.environ.get("HAMOUDA_DEFAULT_PASSWORD", "Passw0rd!")
# وضع التجربة: قائمة الاختيار السريع في شاشة الدخول تملأ كلمة المرور الافتراضية.
# قبل التشغيل الفعلي: HAMOUDA_DEMO_AUTOFILL=0
DEMO_AUTOFILL = os.environ.get("HAMOUDA_DEMO_AUTOFILL", "1") == "1"

MAX_UPLOAD_BYTES = 15 * 1024 * 1024
AUDIT_LIMIT = 300
