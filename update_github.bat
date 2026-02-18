@echo off
echo.
echo ========================================
echo Updating Optus Energy on GitHub
echo ========================================
echo.

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/
    pause
    exit /b
)

echo Adding changes...
git add .

echo.
echo Committing changes...
git commit -m "Fix: Added ScrollToTop component for better navigation"

echo.
echo Pushing to GitHub...
git push

echo.
echo ========================================
echo Update Complete!
echo ========================================
echo.
pause
