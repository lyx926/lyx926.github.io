---
title: centos
icon: file
---

### 常用命令

```shell
待补充
```

### vi方向和退格失灵（/etc/vim/vimrc.tiny）

```shell
#打开配置文件
vi /etc/vim/vimrc.tiny
set nocompatible
set backspace=2
```

### 普通用户sudo失败（/etc/sudoers）

```shell
#切换到root用户下
chmod u+w /etc/sudoers
vi /etc/sudoers
#找到这行 root ALL=(ALL) ALL,在他下面添加xxx ALL=(ALL) ALL (这里的xxx是你的用户名)
```

### 配置网卡（/etc/network/interface）

```shell
#修改网卡配置文件
vi /etc/network/interface
#配置网卡eth0的IP地址
#表示网卡随系统自动请
auto eth0

#static  手工配置ip地址   dhcp是自动获取ip地址
iface eth0 inet static  #表示网卡为静态ip地址
address 192.168.2.147   #表示设置ip地址
netmask 255.255.255.0   #表示子网掩码
gateway 192.168.2.1     #表示网关，不为了上网，可以不填，只用于局域网通信

#配置dns
vi /etc/resolv.conf
nameserver 8.8.8.8
#重启网卡
systemctl restart networking
```

### 配置apt源（/etc/apt/sources.list）

```shell
#配置网络源
cat /etc/issue
#查看系统版本
cat /etc/issue
#备份
mv /etc/apt/sources.list /etc/apt/sources.list.bak
#查找此版本的deb
#赋值到配置文件中
nano /etc/apt/sources.list

#配置本地源
#1删除配置文件所有内容
#2添加两个光驱，指定镜像文件
#3重启
#4apt-cdrom add

#安装vim软件
apt -y install vim

#清除当前apt缓存
apt clean
#加载当前配置文件到缓存
apt update
#更新现有软件
apt dist-upgrade
```

### 安装ssh服务（/etc/ssh/sshd_config）

```shell
#安装ssh
apt -y install ssh
#修改配置文件
vim /etc/ssh/sshd_config
PermitRootLogin yes
#通过ssh远程软件远程登陆
AllowUsers xxx@0.0.0.0/0 设置ssh限制用户登录
```

### 免密登录例子

```shell
#安装SSH
#仅允许client客户端进行ssh访问，其余所有主机的请求都应该拒绝
#配置client只能在Chinaskill20用户环境下可以免秘钥登录，端口号为2222，并且拥有root控制权限
#1.安装
apt-get -y install ssh
#2.
vim /etc/hosts.allow
 sshd:192.168.1.110:allow #只允许某一地址登陆
vim /etc/hosts.deny
 sshd:ALL                  #开启白名单
vi /etc/ssh/sshd_config 
    port                  #修改端口号
    listenaddress         #设置需要监听的ip
    pubkeyauthentication  #启用公钥认证，默认为yes

#另一台计算机操作
#3.用户操作
 #创建用户
 groupadd Chinaskill20
    useradd -m Chinaskill20 -g Chinaskill20 -s /bin/bash -d /home/Chinaskill20
    passwd Chinaskill20

#4.生成密钥
ssh-keygen -t rsa

ssh-copy-id root@192.168.1.107 -p 2222
#5.以用户名免密钥登陆
ssh root@192.168.1.107 -p 2222
```

### GNOME图形界面

```shell
#1、安装
apt-get install gnome -y
#设置成图形模式
systemctl set-default graphical.target

#2、命令行页面切换
#从桌面切换到命令行
Ctrl+Alt+F6  /   Alt+F6
#从命令行切换到桌面
init 5

#3、root用户不能登陆问题
#修改配置文件
vi /etc/gdm3/daemon.conf
#在[security]下
AllowRoot = true
#修改配置文件
vi /etc/pam.d/gdm-password
#注释掉
auth required pam_succeed_if.so user != root quiet_success
```

### ntp时钟同步

> 需求
> chrony为全网提供时间同步服务器；
> Server01、Server02、Server04、Client和Rserver应定期与其校正时间；
> 每隔1分钟自动校正一次时间。

```shell
#安装
apt install -y chrony

#修改配置
cp /etc/chrony/chrony.conf /etc/chrony/chrony.conf.bak
vim /etc/chrony/chrony.conf
    server 192.168.174.55    #服务器ip
    allow 0.0.0.0/0            #允许连接的ip
    local stratum 10        #连接不到服务器ip使用本地时间同步

 #开启ntp同步
 timedatectl set-ntp yes
```

```shell
#安装chrony和ntpdate
apt install -y chrony  ntpdate

#修改配置
vim /etc/chrony/chrony.conf
 #注释pool 2.debian.pool.ntp.org iburst
 #添加chrony服务器ip
 server  192.168.174.55 iburst

#开启ntp同步
timedatectl set-ntp yes

#重启chrony服务器
systemctl restart chrony

#添加定时任务  1分钟同步一次时间
vim /etc/crontab 
 */1 * * * * root ntpdate 192.168.174.55

#重启系统
    rebootet-ntp yes
```

```shell
#服务端
root@debian:/var/www/html# chronyc clients
Hostname                      NTP   Drop Int IntL Last     Cmd   Drop Int  Last
===============================================================================
192.168.174.55                 11      0   6   -    40       0      0   -     -
192.168.174.56                  6      0   5   -    63       0      0   -     -


#客户端
root@debian:~# chronyc sources -V
210 Number of sources = 1
MS Name/IP address         Stratum Poll Reach LastRx Last sample               
===============================================================================
^* 192.168.174.55               11   6   177    57    -12us[  -51us] +/-   11ms   rebootet-ntp yes
```

```shell
#客户端查看时间
root@debian:~# date
Tue 02 Mar 2021 09:53:19 AM EST

#服务端修改时间
root@debian:/var/www/html# date -s 12
Tue 02 Mar 2021 12:00:00 PM EST

#客户端查看时间
```

### ftp文件服务器

> 需求
> 使用ftp服务上传网页代码。
> 使用vsftpd服务；
> ftp的上传文件根目录即为web服务器的网站根目录；
> ftp登录的用户为ftpuser；

```shell
#安装
apt-get install vsftpd

#备份配置文件
cp /etc/vsftpd.conf /etc/vsftpd.conf.bak
#写入配置文件
vim /etc/vsftpd.conf
 write_enable=YES  #允许执行写操作
 chroot_local_user=YES  # 所有用户被限制在ftp目录内，不能跨出该目录，除非有例外情况；
 allow_writeable_chroot=YES    #允许写入跟路径，这条不加容易出现 500
 local_root=/data/share/htdocs/skills ## 设置ftp文件主目录（登陆ftp后显示的目录）

#重启服务
systemctl restart vsftpd

#创建根目录
mkdir /data/share/htdocs/skills -p

#修改权限
chmod 777 /data/share/htdocs/skills

#创建用户
useradd -m ftpuser -d /home/ftpuser

#修改用户密码
passwd ftpuser
```

```shell
#客户机安装ftp
apt -y install ftp

#登陆
ftp 192.168.174.55

#输入账号密码
Name (192.168.174.55:root): ftpuser
331 Please specify the password.
Password:
230 Login successful

#新建文件测试
 mkdir 1


#在服务器查看是否新建成功
#修改用户密码
passwd ftpuser
```

### nfs文件共享

> 需求
> 共享/data/share目录；
> 用于存储server01主机的web数据；
> 仅允许service网段（10.1.100.与172.16.100.）访问该共享。

```shell
#安装
apt-get install nfs-common nfs-kernel-server

#创建共享文件夹
mkdir /data/share -p
#修改配置文件
vi /etc/exports 
/data/share     10.1.100.* || 172.16.100.*(rw,sync,no_root_squash,insecure)
# #共享目录信息，哪个网段可以访问，访问权限， sync同步，数据会先写入到NFS服务器内存中，no_root_squash 共享文件的所述主是远程访问的用户，允许非授权访问
#重启服务
systemctl restart nfs-kernel-server
```

```shell
#安装
apt-get install nfs-common
#查看服务端共享出来的文件夹
showmount -e 10.1.100.128
#创建挂载目录
mkdir /data/mynfs
#挂载
mount  10.1.100.128:/data/share /data/mynfs
#开机自动挂载
echo "/usr/bin/mount  192.168.31.228:/data/share /data/mynfs">> /etc/rc.local # /etc/rc.local为开机自启文件
```

### smba文件共享

```shell
apt -y install samba  #安装samba服务
useradd user          #新建一个用户，用于远程登录
smbpasswd -a user     #将用户加入到samba组
mkdir /home/share
chmod 777 /home/share/
vi /etc/samba/smb.conf 
 [share]
    comment = share           #共享名称
    path=/home/share          #共享路径
    public=yes                #允许用户访问
    writable=yes              #允许写入文件
    directory mask = 0775     #拥有创建目录权限（读写执行）
    create mask = 0775        #拥有创建文件权限
    valid users = user,root   #允许访问的用户
    write list = user         #允许可以写入目录的用户
    browseable = yes          #指定该共享目录可以浏览
    available = yes           #使用该共享资源
```

```shell
#windows配置
1.windows关闭防火墙
2.windows开启所有网络发现，网络共享
3.在计算机管理里面新建用户
3.windows新建文件，右键共享，指定用户为新建用户

#Linux配置
1.安装cifs-utils
2.mount.cifs //windows ip地址/Share /挂载位置 -o user=用户名
输入密码查看
```

### dhcp

> 需求
> 为客户端分配IP范围是10.10.100.1-10.10.100.50；
> DNS：按照实际需求配置DNS服务器地址选项；
> GATEWAY：按照实际需求配置网关地址选项。

```shell
#1.将ip地址改成静态地址
#2.安装服务
apt install  isc-dhcp-server -y
#3查看网卡名字
ip addr
#4修改监听配置
vim  /etc/default/isc-dhcp-server
 INTERFACESv4="ens33"  #ens33网卡名，使用ipv4

#5备份配置文件
mv /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.bak
#6.写入配置
vim /etc/dhcp/dhcpd.conf#(格式在下方)
ddns-update-style none;
subnet 10.10.100.0 netmask 255.255.255.0 {
 range 10.10.100.1 10.10.100.50;
 option subnet-mask 255.255.255.0;
 option routers 10.10.100.2;
 option domain-name "ChinaSkills.cn";
 option domain-name-servers 114.114.114.114;
 default-lease-time 3600;
 max-lease-time 7200;
}

#7.重启服务
systemctl restart isc-dhcp-server
#8.测试
关掉虚拟机的dhcp功能，重新启动一台机器，地址为动态获取。
```

```shell
ddns-update-style none;
subnet ${子网:10.10.100.0} netmask ${子网掩码:255.255.255.0}{
 range ${开始IP:10.10.100.1} ${10.10.100.50};
 option subnet-mask ${子网掩码:255.255.255.0};
 option routers ${网关地址:10.10.100.2};
 option domain-name "${域名：dhcp.com}";
 option domain-name-servers ${DNS服务器IP地址：114.114.114.114};
 default-lease-time 3600;
 max-lease-time 7200;
}
```

### raid5与lvm

> 需求
> 在虚拟机上添加 4 个 1G 的硬盘；
> 创建 raid5，其中一个作为热备盘, 设备名为md0;
> 将 md0 设置为 LVM，设备为/dev/vg01/lv01；
> 格式化为 ext4 文件系统;
> 开机自动挂载到/data 目录。

```shell
#查看四块磁盘是否存在
root@debian:~# fdisk -l | grep sd

#安装mdadm
root@debian:~#  apt-get install mdadm

#创建raid5
root@debian:~# mdadm --create /dev/md0 --name=Nas --level=5 --raid-devices=3 --spare-devices=1 /dev/sd[bcde]
mdadm: Defaulting to version 1.2 metadata
mdadm: array /dev/md0 started.

#安装lvm
apt-get install lvm2

#创建卷组
root@debian:~# vgcreate vg01 /dev/md0
  Physical volume "/dev/md0" successfully created.
  Volume group "vg01" successfully created

#创建逻辑卷组
root@debian:~# lvcreate -L 1G -n lv01 vg01
  Logical volume "lv01" created.

#将逻辑卷格式化
root@debian:~# mkfs.ext4 /dev/vg01/lv01

#普通挂载
root@debian:~# mount /dev/vg01/lv01 /data/

#开机自动挂载
root@debian:~# echo /dev/vg01/lv01 /data/  defaults 0 0 >> /etc/fstab
```

### 防火墙配置

```shell
默认阻挡所有流量
iptables -A INPUT -s 0.0.0.0/0 -j REJECT

#192.168.10.0/24 禁止访问 192.168.1.0/24
iptables -A INPUT -s 192.168.10.0/24 -d 192.168.1.0/24 -j REJECT
#上面的命令将丢掉所有来自 所有 网络的网络包，而将只允许192.168.1.0/24网络和10.1.100.0/24网络通过端口 22 的流入流量。
```

```shell
#查看规则
iptables -L
#清除所有规则
iptables -F
#保存规则
iptables-save > /etc/iptables/rules.v4
#载入保存的规则
iptables-restore </etc/iptables/rules.v4
```

### 其他操作

```shell
#修改欢迎信息
#vi /etc/motd
#修改sshd配置文件，取消上次登陆提示信息
PrintLastLog = no
#修改环境变量
#取主机名
$HOSTNAME  
#取当前系统时间
date "+%Y-%m-%d %H:%M:%S"
#查看当前系统发行版本
uname -v
source /etc/os-release
VERSION_ID
ID
```

### 开启ssh

```shell
#打开配置文件
vim /etc/ssh/sshd_config
#修改参数
PermitRootLogin yes
PasswordAuthentication yes
#重启服务
systemctl restart sshd
```

### 安装docker

#### 1更新软件包索引并安装软件包以允许使用 基于 HTTPS 的存储库

```shell
apt-get update
```

```shell
apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

#### 2添加 Docker 的官方 GPG 密钥

```shell
sudo mkdir -p /etc/apt/keyrings
```

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

#### 3使用以下命令设置存储库

```shell
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```shell
apt-get update
```

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-compose
```
