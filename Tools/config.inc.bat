@ECHO OFF
REM input
REM %1 - environment name, required

REM output
REM %ENV% - environment
REM %APPLICATION% - application (webservice)
REM %APP_DIR% - application base dir.
REM %MSBUILD% - msbuild.exe location full path
REM %HANDLE% - handle.exe location full path

SET WEB_SERVICE_APP_CODE=currencyRate

SET ENV=%1
SET APPLICATION=%2
IF NOT "%APPLICATION%"=="" (
    REM Allowed values: see APPLICATION variable above. If specified value is not allowed, reset to an empty string
    
    IF /I NOT "%APPLICATION%"=="%WEB_SERVICE_APP_CODE%" SET APPLICATION=
)
IF "%APPLICATION%"=="" SET APPLICATION=%WEB_SERVICE_APP_CODE%

SET PROJ_NAME=CurrencyRate
REM IF /I "%APPLICATION%"=="%WEB_SERVICE_APP_CODE%" SET PROJ_NAME=WebService

SET APP_DIR=%TEMP%\%PROJ_NAME%
SET HANDLE=C:\Bin\handle\handle.exe
SET MSXSL="%~d0%~p0msxsl.exe"

SET FRAMEWORK_DIR=C:\Windows\Microsoft.NET\Framework
IF "%PROCESSOR_ARCHITECTURE%"=="AMD64" SET FRAMEWORK_DIR=C:\Windows\Microsoft.NET\Framework64
SET MSBUILD=%FRAMEWORK_DIR%\v4.0.30319\MSBuild.exe

IF "%ENV%"=="" (goto usage_error)

REM Validate specified environment
SET ENV_FILE="%~d0%~p0..\build\env"
IF NOT EXIST %ENV_FILE% (goto wrong_environment)
SET /P ENVS=<%ENV_FILE%
SET ENV_IS_VALID=0
FOR %%i IN (%ENVS%) DO (
  IF %%i==%ENV% SET ENV_IS_VALID=1
)
IF %ENV_IS_VALID%==0 (goto wrong_environment)

SET CONF_FILE="%~d0%~p0..\build\%PROJ_NAME%\%PROJ_NAME%.proj"
IF EXIST %CONF_FILE% (goto load_config) ELSE (goto unknown_environment)

:load_config
    %MSXSL% %CONF_FILE% fetch_property.xsl name=EnvironmentDir> tmp
    SET /P APP_DIR=<tmp
    del tmp
goto end

:usage_error
    REM Invalid environment name. Error
    ECHO Tool script for CurrencyRate
    ECHO --------------------------------
    ECHO Usage:  %~n0 ^<env^> [application]
    ECHO   Parameter [application] is optional. Values: currencyRate - for CurrencyRate.
    ECHO   Default value is currencyRate.
    EXIT /B 1
goto end

:unknown_environment
    ECHO ERROR: unknown environment %ENV%
    EXIT /B 2
goto end

:wrong_environment
    ECHO ERROR: Wrong environment %ENV%. See "env" file.
    EXIT /B 3
goto end

:end