@echo off
rem Clean up application releases
rem Parameters:
rem %1 - site name, %2 - releases path (directory where releases are deployed to), %3 - root application directory path relative to the release (version) directory (optional), %4 - root application to start from (optional)

set SITE_NAME=%1
set RELEASES_PATH=%2
set ROOT_APPLICATION_PATH_RELATIVE_TO_RELEASE_DIRECTORY=%3
set ROOT_APPLICATION_URL=%4
if '%SITE_NAME%'=='' (GOTO wrong_input_params)
if '%RELEASES_PATH%'=='' (GOTO wrong_input_params)

set currentDirectory=%~dp0
set psScriptPath=%currentDirectory%switch_website_dir.ps1

powershell -NonInteractive -NoProfile %psScriptPath% -Cleanup -siteName '%SITE_NAME%' -releasesPath '%RELEASES_PATH%' -rootApplicationUrl '%ROOT_APPLICATION_URL%' -rootApplicationPathRelativeToReleaseDirectory '%ROOT_APPLICATION_PATH_RELATIVE_TO_RELEASE_DIRECTORY%'
if not %ERRORLEVEL%==0 exit /b %ERRORLEVEL%
exit /b 0

:wrong_input_params
echo Error: wrong parameters
echo ----------------------------------------
echo Usage: %~nx0 ^<site name^> ^<releases path^> [root application directory path relative to the release (version) directory] [root application path]
exit /B 1