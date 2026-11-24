"""تشغيل المنظومة: python run.py  ثم افتح http://localhost:8000"""
import os

import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        "backend.app.main:app",
        host=os.environ.get("HAMOUDA_HOST", "0.0.0.0"),
        port=int(os.environ.get("HAMOUDA_PORT", "8000")),
        reload=os.environ.get("HAMOUDA_RELOAD", "0") == "1",
    )
