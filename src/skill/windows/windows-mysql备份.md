```shell
rem auther:lyx926
rem ******MySQL backup start********
@echo off
forfiles /p "C:\heli\mysql\MySQL BackUp" /m backup_*.sql -d -30 /c "cmd /c del /f @path"
set "Ymd=%date:~0,4%%date:~5,2%%date:~8,2%0%time:~1,1%%time:~3,2%%time:~6,2%"
"C:\heli\mysql\winmysql56\MySQL\MySQL\bin\mysqldump" --opt --single-transaction=TRUE --user=root --password=system --host=127.0.0.1 --protocol=tcp --port=3306 --default-character-set=utf8 --single-transaction=TRUE --routines --events "helisd" > "C:\heli\mysql\MySQL BackUp\backup_%Ymd%.sql"
@echo on
rem ******MySQL backup end********
```