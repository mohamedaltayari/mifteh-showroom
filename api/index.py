"""نقطة الدخول على Vercel: كل الطلبات تُوجَّه إلى تطبيق FastAPI."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from backend.app.main import app  # noqa: E402,F401
