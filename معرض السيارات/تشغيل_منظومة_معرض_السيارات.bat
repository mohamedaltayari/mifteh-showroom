@echo off
title Car Showroom System
color 1F
echo ============================================================
echo   Car Showroom System
echo ============================================================
echo.

set "PATH=C:\Program Files\nodejs;%PATH%"
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js was not found on this computer.
  echo Please install it from https://nodejs.org first.
  echo.
  pause
  exit /b 1
)
echo [OK] Node.js found.

set "SRV=%~dp0agency-os\showroom-os\dev-harness\serve.js"
if not exist "%SRV%" (
  echo [ERROR] Project files were not found at:
  echo %SRV%
  echo Keep this file in the same folder as "agency-os".
  echo.
  pause
  exit /b 1
)
echo [OK] Project folder found.
echo.

powershell -NoProfile -Command "try { (Invoke-WebRequest -Uri 'http://localhost:8090/app/' -UseBasicParsing -TimeoutSec 2) | Out-Null; exit 0 } catch { exit 1 }" >nul 2>nul
if %errorlevel%==0 (
  echo [INFO] The system already seems to be running.
  echo Opening your browser now, without starting a new copy.
  start "" "http://localhost:8090/app/"
  echo.
  echo You can close this window now.
  pause
  exit /b 0
)

echo Starting the system now...
start "Car Showroom System - DO NOT CLOSE while using the system" /d "%~dp0" cmd /k node "%SRV%" 8090

echo Please wait...
timeout /t 3 /nobreak >nul
start "" "http://localhost:8090/app/"

echo.
echo ============================================================
echo The browser should have opened. If not, go to:
echo http://localhost:8090/app/
echo.
echo IMPORTANT: always open the system from this same address
echo (port 8090), because your data is saved per address.
echo Keep the other black window open while using the system.
echo Daily backups are saved in the folder "Backups" next to
echo this file (the Arabic-named backup folder).
echo You can close THIS window now.
echo ============================================================
pause
