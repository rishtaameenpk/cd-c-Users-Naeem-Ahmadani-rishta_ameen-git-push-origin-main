@echo off
cd /d "%~dp0docs"
echo.
echo ============================================
echo   Rishta Ameen - Run on Mobile Chrome
echo ============================================
echo.
echo 1. Connect your phone and PC to the SAME Wi-Fi
echo 2. On your phone Chrome, open one of these URLs:
echo.

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  echo    http://%%a:8080
)

echo.
echo 3. Keep this window open while testing
echo.
echo Starting server on port 8080...
echo.

python -m http.server 8080 --bind 0.0.0.0
if errorlevel 1 py -m http.server 8080 --bind 0.0.0.0

pause
