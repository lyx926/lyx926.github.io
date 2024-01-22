---
title: ftp
icon: file
---

### 上传

```shell
#!/bin/bash

ip=xxx #ftp服务器
u=xxx #用户名
p=xxx #密码
tm=`date +%Y%m` #获取当前系统年月
td=`date +%Y%m%d` #获取当前系统年月日
lcdPath=/xxx/xxx #下载目录

#连接、切换目录、上传*.zip
ftp -vn <<EOF
open $ip
user $u $p
binary
prompt off
cd  /
lcd ${lcdPath}
mput *.zip
close
quit
EOF

#批量重置后缀成*.zipbackup
#rename .zip .zipbackup *.zip

#清空本地目录
#rm -rf /home/data/*
```

### 下载

```shell
#!/bin/bash

ip=xxx #ftp服务器
u=xxx #用户名
p=xxx #密码
tm=`date +%Y%m` #获取当前系统年月
td=`date +%Y%m%d` #获取当前系统年月日
lcdPath=/xxx/xxx #下载目录

#连接、切换目录、下载传*.zip
ftp -ivn <<EOF
open $ip
user $u $p
binary
cd ${tm}
lcd ${lcdPath}
get *.zip
close
bye
EOF
```
