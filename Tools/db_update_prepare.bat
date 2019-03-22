@@ECHO OFF
SETLOCAL

REM previous and new script urls
SET PREV_URL=%1
SET NEW_URL=%2

SET SVN_USER=%3
SET SVN_PASS=%4

IF "%PREV_URL%"=="" GOTO error_wrong_params
IF "%NEW_URL%"=="" GOTO error_wrong_params

SET TMP_FILE=%TEMP%\pmslib-db-migrations-tags-diff.tmp
SET TMP_BAT=%TEMP%\pmslib-db-migrations-sql.tmp

REM cleanup temprary files
IF EXIST %TMP_BAT% (DEL /F /Q %TMP_BAT%)
IF EXIST %TMP_FILE% (DEL /F /Q %TMP_FILE%)

svn diff %PREV_URL% %NEW_URL% --summarize --no-diff-deleted --non-interactive --username %SVN_USER% --password %SVN_PASS% | FINDSTR /C:".sql" > %TMP_FILE%

REM output sql execution command lines
SET SQL_CMD=sqlcmd -S %%SERVER%% -d %%DB_NAME%% -i
FOR /F "tokens=2" %%I IN (%TMP_FILE%) DO (
    ECHO %SQL_CMD% %%~nxI% %>>% %%TMP_BAT%%
)

ECHO REM Compared urls: %PREV_URL% and %NEW_URL%
ECHO REM Don't forget to check SERVER and DB_NAME variable
ECHO SET SERVER="localhost"
ECHO SET DB_NAME=pms_lib

IF EXIST %TMP_BAT% (
    SORT %TMP_BAT%
)

ENDLOCAL
@@ECHO ON
@@EXIT /B 0

:error_wrong_params
ECHO Error: wrong parameters passed.
ECHO Usage: %~nx0 old-scripts-url new-scripts-url [output-file]

ENDLOCAL
@@ECHO ON
@@EXIT /B 1