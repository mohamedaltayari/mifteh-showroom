"""إعدادات المنظومة — تُقرأ من متغيرات البيئة مع قيم افتراضية آمنة للتشغيل المحلي."""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = Path(os.environ.get("HAMOUDA_DATA_DIR", BASE_DIR / "data"))
DB_PATH = Path(os.environ.get("HAMOUDA_DB_PATH", DATA_DIR / "hamouda.db"))
UPLOAD_DIR = Path(os.environ.get("HAMOUDA_UPLOAD_DIR", DATA_DIR / "uploads"))
FRONTEND_DIR = BASE_DIR / "frontend"
# عند ضبطه تُستخدم PostgreSQL (مثل Supabase) بدل ملف SQLite المحلي — مطلوب عند الاستضافة على Vercel
DATABASE_URL = os.environ.get("DATABASE_URL") or os.environ.get("POSTGRES_URL") or ""
# على Vercel لا يوجد قرص دائم، فلا بد من قاعدة PostgreSQL
ON_VERCEL = bool(os.environ.get("VERCEL"))
DB_MISSING = ON_VERCEL and not DATABASE_URL
DB_SCHEMA = os.environ.get("HAMOUDA_DB_SCHEMA", "public")

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
# إنشاء الحسابات الخمسة الافتراضية عند أول تشغيل. عند ضبطه 0 تبدأ المنظومة بلا حسابات
# وتعرض شاشة الدخول نموذج «إنشاء حساب المدير» لأول زائر (مناسب للنشر على الإنترنت).
SEED_DEFAULT_ACCOUNTS = os.environ.get("HAMOUDA_SEED_DEFAULT_ACCOUNTS", "1") == "1"

MAX_UPLOAD_BYTES = int(os.environ.get("HAMOUDA_MAX_UPLOAD_MB", "15")) * 1024 * 1024
AUDIT_LIMIT = 300
