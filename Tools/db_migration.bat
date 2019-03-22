@ECHO OFF
SET DIR=%~dp0

SET SELF_NAME=%~n0
SET TOOL=%DIR%\DBMigration\DBMigration.exe
SET MSXSL=%DIR%msxsl.exe
SET TL_CONFIG=%DIR%\..\Configuration\config.xml
SET TL_MIGRATIONS_DIR=%DIR%\..\db-migrations

SET ENV=%1
SET COMMAND=%2

IF '%ENV%'=='help' (GOTO help_1)
IF '%COMMAND%'=='help' (GOTO help_2)

IF '%ENV%'=='' (GOTO usage)
IF '%COMMAND%'=='' (GOTO usage)

REM ---------------  get DB connection string from config -------------------
%MSXSL% %TL_CONFIG% get-dbconnection-string.xsl env=%ENV% > %DIR%tmp
SET /P CONN=<%DIR%tmp
DEL %DIR%tmp


%TOOL% %COMMAND% --conn="%CONN%" --dir=%TL_MIGRATIONS_DIR% %3 %4 %5 %6 %7 %8 %9
GOTO end

:help_1
    %TOOL% help %2 %3 %4 %5 %6 %7 %8 %9
GOTO end

:help_2
    %TOOL% help %3 %4 %5 %6 %7 %8 %9
GOTO end

:usage
    ECHO --------------------------------
    ECHO   TravelLine DB migration tool
    ECHO --------------------------------
    ECHO Usage: %SELF_NAME% ^<env^> ^<command^> ...
    ECHO Examples: 
    ECHO   %SELF_NAME% help [command]
    ECHO   %SELF_NAME% ^<env^> update
    ECHO   %SELF_NAME% ^<env^> info
    ECHO   %SELF_NAME% ^<env^> mark ^<migration^>
    EXIT /B 1
GOTO end

:end