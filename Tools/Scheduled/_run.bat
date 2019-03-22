@echo off
SET TASK_NAME=%1
SET URL=%2

SET LOG_DIR=logs
SET LOG_FILE=%LOG_DIR%\%TASK_NAME%.txt
SET OUT_FILE=%LOG_DIR%\%TASK_NAME%-last.txt

IF NOT EXIST %LOG_DIR% MD %LOG_DIR%

C:\Bin\wget\wget.exe -q -O %OUT_FILE% %URL%
SET RESULT=0
IF %ERRORLEVEL% NEQ 0 (
  SET RESULT=-400%ERRORLEVEL%
)

TYPE %OUT_FILE% >> %LOG_FILE%
ECHO.  >> %LOG_FILE%
ECHO ------------- >> %LOG_FILE%

IF %RESULT% NEQ 0 GOTO end

FOR /F "tokens=1 delims= " %%G IN (%OUT_FILE%) DO ( 
  ECHO %%G
  SET STATUS=%%G
)

IF "%STATUS%" == "OK" SET RESULT=0
IF "%STATUS%" == "WARN" SET RESULT=-1001
IF "%STATUS%" == "ERR" SET RESULT=-2001
rem Пропускать ответы отличные от кодов с результатом 0

:end
exit /b %RESULT%
