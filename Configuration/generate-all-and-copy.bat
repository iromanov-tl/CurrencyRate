@@rem input parameters: %1 - environment (local, dev, qa, prod, etc.)

@@set ENV=%1
@@if '%ENV%' == '' goto no_env

call generate-webconfig.bat %ENV% ExtranetApi
call generate-webconfig.bat %ENV% AccountsApi
call generate-appconfig.bat %ENV% CurrencyRateSvc

@move /Y Web.Config-ExtranetApi  ..\Web\ExtranetApi\web.config
@move /Y Web.Config-AccountsApi  ..\Web\AccountsApi\web.config
@move /Y App.Config-CurrencyRateSvc ..\WinServices\CurrencyRateSvc\app.config

@goto exit

:no_env
@@echo Error - environment is not passed.
@@echo Example: generate-all-and-copy.bat dev

:exit