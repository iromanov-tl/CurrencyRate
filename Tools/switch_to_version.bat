@ECHO OFF

CALL ..\Tools\config.inc.bat %*

SET DEPLOYMENT_VERSION=%2
IF "%DEPLOYMENT_VERSION%"=="%APPLICATION%" SET DEPLOYMENT_VERSION=%3
IF "%DEPLOYMENT_VERSION%"=="" (GOTO error_invalid_params)

%MSBUILD% %PROJ_NAME%\%PROJ_NAME%.proj /p:Env=%ENV% /p:DeploymentVersion=%DEPLOYMENT_VERSION% /t:SwitchToVersion

PAUSE

EXIT /B

:error_invalid_params
ECHO Switching web site to the specified version (for PmsLib)
ECHO --------------------------------
ECHO Error: wrong parameters
ECHO Usage: %~n0 ^<env^> [application] ^<deployment version^>
ECHO   Parameter [application] is optional. Values: webservice - for WebService.
ECHO   Default value is channelManager.
EXIT /B 1