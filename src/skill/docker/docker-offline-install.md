---
title: docker 离线安装
icon: file
---

```shell
#/bin/bash

#docker-run
echo 'input_group_name:'
read group_name

mysql_port=3306
redis_port=6379
nginx_port=80
java_port=8080
intranet_extranet=127.0.0.1
server_home=${PWD}
mysql_app_name=${group_name}-'mysql'
redis_app_name=${group_name}-'redis'
nginx_app_name=${group_name}-'nginx'
java_app_name=${group_name}-'java'
app_version='latest'

#import-images
docker load -i ${server_home}/${mysql_app_name}.tar
docker load -i ${server_home}/${redis_app_name}.tar
docker load -i ${server_home}/${nginx_app_name}.tar
docker load -i ${server_home}/${java_app_name}.tar

#docker-run-mysql
docker stop ${mysql_app_name}
docker rm ${mysql_app_name}
docker run \
  --name ${mysql_app_name} \
  --privileged=true \
  --restart=always \
  -v ${server_home}/mysqlhome:/var/lib/mysql \
  -p ${mysql_port}:3306 \
  -e MYSQL_ROOT_PASSWORD=system \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${mysql_app_name}:${app_version}

#docker-run-redis
docker stop ${redis_app_name}
docker rm ${redis_app_name}
docker run \
  --name ${redis_app_name} \
  --privileged=true \
  --restart=always \
  -p ${redis_port}:6379 \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${redis_app_name}:${app_version} \
  --requirepass system \
  --appendonly yes

#docker-run-nginx
docker stop ${nginx_app_name}
docker rm ${nginx_app_name}
docker run \
  --name ${nginx_app_name} \
  --privileged=true \
  --restart=always \
  -v ${server_home}/nginxhome/html:/usr/share/nginx/html \
  -v ${server_home}/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf \
  -v ${server_home}/nginxhome/logs:/var/log/nginx \
  -p ${nginx_port}:80 \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${nginx_app_name}:${app_version}

#docker-run-java
docker stop ${java_app_name}
docker rm ${java_app_name}
docker run \
  --name ${java_app_name} \
  --privileged=true \
  --restart=always \
  -v ${server_home}/jarhome:/root \
  -p ${java_port}:8080 \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${java_app_name}:${app_version}

```
