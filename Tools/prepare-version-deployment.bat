SET VER_OLD=1.8.3
SET VER_NEW=1.9.0

SET SVN_USER=robot
SET SVN_PASS=N@c,28*oM3

SET BASE_SRC_URL=svn://dev.cpslabs.ru:3691/TravelLine/ChannelManager/branches

SET BASE_SRC_URL_OLD=%BASE_SRC_URL%/%VER_OLD%
SET BASE_SRC_URL_NEW=%BASE_SRC_URL%/%VER_NEW%

SET CHECKOUT_URL=%BASE_SRC_URL_NEW%

svn.exe co --username %SVN_USER% --password %SVN_PASS% --no-auth-cache --non-interactive %CHECKOUT_URL%

IF NOT EXIST %VER_NEW%\build MKDIR %VER_NEW%\build

COPY %VER_NEW%\Tools\1-precompile.bat %VER_NEW%\build /Y
COPY %VER_NEW%\Tools\2-db_update.bat %VER_NEW%\build /Y
COPY %VER_NEW%\Tools\3-catch_up.bat %VER_NEW%\build /Y
COPY %VER_NEW%\Tools\4-db_update_post.bat %VER_NEW%\build /Y
COPY env %VER_NEW%\build /Y

REM DB migration scripts
REM SET SQL_OLD=%BASE_SRC_URL_OLD%/db-migrations
REM SET SQL_NEW=%BASE_SRC_URL_NEW%/db-migrations
REM CALL %VER_NEW%\Tools\db_update_prepare.bat %SQL_OLD% %SQL_NEW% %SVN_USER% "%SVN_PASS%" > %VER_NEW%\db-migrations\sql.bat