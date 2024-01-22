---
title: ufw
icon: file
---

### 安装命令

```shell
sudo apt update
sudo apt install ufw
```

### 检查UFW状态

```shell
sudo ufw status verbose
```

### 应用配置

```shell
#列出系统上所有应用程序
sudo ufw app list
#例如，要获取有关OpenSSH配置文件的信息
sudo ufw app info OpenSSH
#要将UFW防火墙配置为接受SSH连接
sudo ufw allow OpenSSH
#例如，您的ssh服务器侦听端口2222
sudo ufw allow 2222/tcp
```

### 启用与禁用UFW

```shell
sudo ufw enable
sudo ufw disable
```

### 开放端口

开启http服务需要的80端口:

```shell
sudo ufw allow http
```

可以使用端口号80代替http配置文件：

```shell
sudo ufw allow 80/tcp
```

开启https服务需要端口:

```shell
sudo ufw allow https
```

可以使用端口号443代替https配置文件：

```shell
sudo ufw allow 443/tcp
```

开启tomcat默认使用的8080端口:

```shell
sudo ufw allow 8080/tcp
```

允许网段:

```shell
sudo ufw allow 8090:9090/tcp
sudo ufw allow 8090:9090/udp
```

允许IP:

```shell
sudo ufw allow from 192.168.1.1
```

允许IP+port:

```shell
sudo ufw allow from 192.168.1.1 to any port 22
```

允许子网:

```shell
sudo ufw allow from 192.168.1.0/24 to any port 3306
sudo ufw allow from 192.168.1.0/24
```

允许连接到特定的网络接口:

```shell
sudo ufw allow in on eth0 to any port 3306
```

### 拒绝连接

```shell
allow 换成 deny
```

### 删除UFW规则

```shell
#查看规则
sudo ufw status numbered
#通过规则号删除
sudo ufw delete 3
#通过端口号删除
sudo ufw delete allow 8069
```

### 重置UFW

```shell
#重置UFW将会禁用UFW，并删除所有活动规则。
sudo ufw reset
```

### 端口转发

```shell
#配置文件
vi etc/default/ufw
default_forward_policy = "accept"

#/etc/ufw/sysctl.conf 允许ipv4转发
net/ipv4/ip_forward=1

#iptables方式
iptables -t nat -A PREROUTING -p tcp --dport [端口号] -j DNAT --to-destination [目标IP]
iptables -t nat -A POSTROUTING -p tcp -d [目标IP] --dport [端口号] -j SNAT --to-source [中转服务器IP]

#ufw方式
vi /etc/ufw/before.rules

#注意*nat，以COMMIT结尾才会生效。*filter一个COMMIT,*nat一个COMMIT
#不能总用一个COMMIT。
*nat
:PREROUTING ACCEPT [0:0]
:POSTROUTING ACCEPT [0:0]

# Port Forwardings 
-A PREROUTING -p tcp --dport 10010 -j DNAT --to-destination 103.79.78.76
-A POSTROUTING -p tcp -d 103.79.78.76 --dport 10010 -j SNAT --to-source 183.60.100.8

# don't delete the 'COMMIT' line or these rules won't be processed
COMMIT

#重新启动ufw
sudo ufw disable && sudo ufw enable

#查看iptables生效状态
iptables -t nat -L -v
```
