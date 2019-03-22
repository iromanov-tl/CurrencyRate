@echo off
rem Switch website directories to the new ones (to the new version)
rem Parameters:
rem %1 - site name, %2 - releases path (directory where releases are deployed to), %3 - site root directory path relative to the release (version) directory (optional)

set SITE_NAME=%1
set RELEASES_PATH=%2
set SITE_ROOT_PATH_RELATIVE_TO_RELEASE_DIRECTORY=%3
if '%SITE_NAME%'=='' (GOTO wrong_input_params)
if '%RELEASES_PATH%'=='' (GOTO wrong_input_params)

set currentDirectory=%~dp0
set psScriptPath=%currentDirectory%switch_website_dir.ps1

powershell -NonInteractive -NoProfile %psScriptPath% -SwitchWebsiteDirs -siteName '%SITE_NAME%' -releasesPath '%RELEASES_PATH%' -siteRootPathRelativeToReleaseDirectory '%SITE_ROOT_PATH_RELATIVE_TO_RELEASE_DIRECTORY%'
if not %ERRORLEVEL%==0 exit /b %ERRORLEVEL%
exit /b 0

:wrong_input_params
echo Error: wrong parameters
echo ----------------------------------------
echo Usage: %~nx0 ^<site name^> ^<releases path^> [site root directory path relative to the release (version) directory]
exit /B 1