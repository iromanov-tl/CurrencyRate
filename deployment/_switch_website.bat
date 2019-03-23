@ECHO off
REM --- Change IIS virtual directory ---
@IF "%1" == "" GOTO usage_error
@IF "%2" == "" GOTO usage_error
@ECHO Changing iis vdir...
C:\Windows\System32\inetsrv\appcmd set vdir "%1/" -physicalPath:%2\web\wwwroot || goto handle_error
C:\Windows\System32\inetsrv\appcmd set vdir "%1/extranet/" -physicalPath:%2\web\extranet || goto handle_error
C:\Windows\System32\inetsrv\appcmd set vdir "%1/extranet-api/" -physicalPath:%2\api\extranet || goto handle_error
C:\Windows\System32\inetsrv\appcmd set vdir "%1/accounts-api/" -physicalPath:%2\api\accounts || goto handle_error
goto success

:usage_error
    REM Invalid environment name. Error
    ECHO Deploy script for WebAppTemplate app. Environment is not passed.
    ECHO --------------------------------
    ECHO Usage:  %~n0 ^<env^>
    EXIT /B 1
goto end

goto handle_error

:handle_error
exit /B %ERRORLEVEL%

:success
    ECHO Switch website success.
goto end

:end