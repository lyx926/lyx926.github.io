---
title: docker 离线制作
icon: file
---

```shell
#!/bin/sh

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
#mysql
echo 'FROM mysql:5.7.28
ENV TZ=Asia/Shanghai' >Dockerfile
#make-mysql
docker stop ${mysql_app_name}
docker rm ${mysql_app_name}
docker rmi ${group_name}/${mysql_app_name}:${app_version}
docker build -t ${group_name}/${mysql_app_name}:${app_version} .
docker run \
  --name ${mysql_app_name} \
  --privileged=true \
  --restart=always \
  -v ${server_home}/mysqlhome:/var/lib/mysql \
  -p ${mysql_port}:3306 \
  -e MYSQL_ROOT_PASSWORD=system \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${mysql_app_name}:${app_version}

#redis
echo 'FROM redis:7-alpine
ENV TZ=Asia/Shanghai
RUN apk add tzdata && cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone
EXPOSE 6379' >Dockerfile
#make-redis
docker stop ${redis_app_name}
docker rm ${redis_app_name}
docker rmi ${group_name}/${redis_app_name}:${app_version}
docker build -t ${group_name}/${redis_app_name}:${app_version} .
docker run \
  --name ${redis_app_name} \
  --privileged=true \
  --restart=always \
  -p ${redis_port}:6379 \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${redis_app_name}:${app_version} \
  --requirepass system \
  --appendonly yes

#nginx
echo 'FROM nginx:1-alpine-slim
ENV TZ=Asia/Shanghai
RUN apk add tzdata && cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone
EXPOSE 80 443' >Dockerfile
#make-nginx
docker stop ${nginx_app_name}
docker rm ${nginx_app_name}
docker rmi ${group_name}/${nginx_app_name}:${app_version}
docker build -t ${group_name}/${nginx_app_name}:${app_version} .
mkdir -p ${server_home}/nginxhome/conf.d
docker run --name tmp-nginx-container -d nginx
docker cp tmp-nginx-container:/etc/nginx/conf.d/default.conf ${server_home}/nginxhome/conf.d/default.conf
docker cp tmp-nginx-container:/usr/share/nginx/html ${server_home}/nginxhome/html
docker rm -f tmp-nginx-container
sed -i '/#error_page  404/i\
    location /prod-api/{\
        proxy_set_header Host $http_host;\
        proxy_set_header X-Real-IP $remote_addr;\
        proxy_set_header REMOTE-HOST $remote_addr;\
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\
        proxy_pass http://'${intranet_extranet}':'${java_port}'/;\
    }\
' ${server_home}/nginxhome/conf.d/default.conf
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

#java
echo 'FROM openjdk:8-alpine3.9
ENV TZ=Asia/Shanghai
RUN apk add fping
RUN apk add tzdata && cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone
RUN apk --no-cache add ttf-dejavu fontconfig
EXPOSE 8080
ENV APP_PORT=8080
ENV TZ=Asia/Shanghai
ENTRYPOINT java -jar -Xms1024m -Xmx2048m -Dfile.encoding=utf-8 -Dserver.port=8080 /root/*.jar'>Dockerfile
#make-java
docker stop ${java_app_name}
docker rm ${java_app_name}
docker rmi ${group_name}/${java_app_name}:${app_version}
docker build -t ${group_name}/${java_app_name}:${app_version} .
docker run \
  --name ${java_app_name} \
  --privileged=true \
  --restart=always \
  -v ${server_home}/jarhome:/root \
  -p ${java_port}:8080 \
  -e TZ=Asia/Shanghai \
  -d ${group_name}/${java_app_name}:${app_version}

#export-images
docker save -o ${server_home}/${mysql_app_name}.tar ${group_name}/${mysql_app_name}
docker save -o ${server_home}/${redis_app_name}.tar ${group_name}/${redis_app_name}
docker save -o ${server_home}/${nginx_app_name}.tar ${group_name}/${nginx_app_name}
docker save -o ${server_home}/${java_app_name}.tar ${group_name}/${java_app_name}
```
