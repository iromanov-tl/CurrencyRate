REM --- Build website static files ---
@ECHO Start publish static files...
SET CUR_DIR=%~dp0
@ECHO Publish Extranet...
CD ..\Web\Extranet
CALL npm install
CALL build.bat package
exit 0