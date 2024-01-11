```shell
@echo off  
rem input port  
set/p port=input port:  
echo port : %port%  
for /f "usebackq tokens=1-5" %%a in (`netstat -ano ^| findstr %port%`) do (  
if [%%d] EQU [LISTENING] (  
set pid=%%e  
)  
)  
for /f "usebackq tokens=1-5" %%a in (`tasklist ^| findstr %pid%`) do (  
set executableFile=%%a  
)  
echo now will kill process : pid %pid%, executableFile: %executableFile%  
pause  
rem byPID kill Process  
taskkill /f /pid %pid%  
pause
```