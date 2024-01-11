---
title: docker 入门
icon: file
---
### docker run

| 参数            | 作用            |
|:------------- |:------------- |
| -d            | 后台运行          |
| -i            | 交互模式，通常于t配合使用 |
| -t            | 伪终端，通常于i配合使用  |
| -p            | 指定映射端口，真机:虚拟机 |
| --name="xxx"  | 容器名称          |
| --dns 8.8.8.8 | DNS服务器        |
| -e            | 环境变量          |
| -m            | 设置容器内存        |
| -v            | 绑定卷，真机:虚拟机    |

### 修改源

```shell
mkdir -p /etc/docker 
vim /etc/docker/daemon.json
{"registry-mirrors": ["https://1197heba.mirror.aliyuncs.com"]}
systemctl daemon-reload
systemctl restart docker
systemctl enable docker
```

### 图形化工具

```shell
docker run -d -p 9000:9000 \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
--name prtainer docker.io/portainer/portainer
```

### 容器详细

```shell
docker inspect [容器名]
```

### 真机to虚拟机

```shell
docker cp [宿主机]/dir/file [虚拟机]:/dir/file
```

### 虚拟机to真机

```shell
docker cp [虚拟机]:/dir/file [宿主机]/dir/file
```

### 开启容器自启动

```shell
docker update --restart=always [容器名]
```

### 导出镜像

```shell
docker save -o ${server_home}/${mysql_app_name}.tar ${group_name}/${mysql_app_name}
```

### 导入镜像

```shell
docker load -i ${server_home}/${mysql_app_name}.tar
```
