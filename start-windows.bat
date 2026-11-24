@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ==========================================
echo   Hamouda system - starting...
echo ==========================================
where python >nul 2>nul
if errorlevel 1 (
  echo.
  echo [X] Python is not installed. Install it from https://www.python.org/downloads/
  echo     and tick "Add Python to PATH" during setup.
  pause
  exit /b 1
)
python -m pip install --disable-pip-version-check -q -r requirements.txt
if errorlevel 1 (
  echo [X] Could not install requirements. Check your internet connection.
  pause
  exit /b 1
)
start "" http://localhost:8000
echo.
echo  System is running: http://localhost:8000
echo  Keep this window open. Close it to stop the system.
echo.
python run.py
pause
