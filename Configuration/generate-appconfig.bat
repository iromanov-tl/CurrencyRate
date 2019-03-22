@@rem input parameters: %1 - environment (local, dev, qa, prod, etc.), %2 - application (accounts, hotel, logsystem)

@@set ENV=%1
@@if '%ENV%' == '' goto no_env

@@set APPLICATION=%2
@@if '%APPLICATION%' == '' set APPLICATION=wpintservice

@@set OUTPUT_CONFIG_FILE=App.Config-%APPLICATION%
@@set TRANSFORMATION_FILE=config-transform-%APPLICATION%.xsl

@@echo Building configuration for "%ENV%" environment...
@@..\Tools\msxsl.exe config.xml %TRANSFORMATION_FILE% -o %OUTPUT_CONFIG_FILE% -m %ENV%
@@echo Success. Config generated to %OUTPUT_CONFIG_FILE%
@@goto exit


:no_env
@@echo Error - environment is not passed.
@@echo Example: generate-appconfig.bat prod

:exit