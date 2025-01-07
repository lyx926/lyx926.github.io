const a=JSON.parse('{"key":"v-180953cc","path":"/skill/docker/docker-offline-make.html","title":"docker 离线制作","lang":"zh-CN","frontmatter":{"title":"docker 离线制作","icon":"file","description":"#!/bin/sh echo \'input_group_name:\' read group_name mysql_port=3306 redis_port=6379 nginx_port=80 java_port=8080 intranet_extranet=127.0.0.1 server_home=${PWD} mysql_app_name=${group_name}-\'mysql\' redis_app_name=${group_name}-\'redis\' nginx_app_name=${group_name}-\'nginx\' java_app_name=${group_name}-\'java\' app_version=\'latest\' #mysql echo \'FROM mysql:5.7.28 ENV TZ=Asia/Shanghai\' &gt;Dockerfile #make-mysql docker stop ${mysql_app_name} docker rm ${mysql_app_name} docker rmi ${group_name}/${mysql_app_name}:${app_version} docker build -t ${group_name}/${mysql_app_name}:${app_version} . docker run \\\\ --name ${mysql_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/mysqlhome:/var/lib/mysql \\\\ -p ${mysql_port}:3306 \\\\ -e MYSQL_ROOT_PASSWORD=system \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${mysql_app_name}:${app_version} #redis echo \'FROM redis:7-alpine ENV TZ=Asia/Shanghai RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone EXPOSE 6379\' &gt;Dockerfile #make-redis docker stop ${redis_app_name} docker rm ${redis_app_name} docker rmi ${group_name}/${redis_app_name}:${app_version} docker build -t ${group_name}/${redis_app_name}:${app_version} . docker run \\\\ --name ${redis_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -p ${redis_port}:6379 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${redis_app_name}:${app_version} \\\\ --requirepass system \\\\ --appendonly yes #nginx echo \'FROM nginx:1-alpine-slim ENV TZ=Asia/Shanghai RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone EXPOSE 80 443\' &gt;Dockerfile #make-nginx docker stop ${nginx_app_name} docker rm ${nginx_app_name} docker rmi ${group_name}/${nginx_app_name}:${app_version} docker build -t ${group_name}/${nginx_app_name}:${app_version} . mkdir -p ${server_home}/nginxhome/conf.d docker run --name tmp-nginx-container -d nginx docker cp tmp-nginx-container:/etc/nginx/conf.d/default.conf ${server_home}/nginxhome/conf.d/default.conf docker cp tmp-nginx-container:/usr/share/nginx/html ${server_home}/nginxhome/html docker rm -f tmp-nginx-container sed -i \'/#error_page 404/i\\\\ location /prod-api/{\\\\ proxy_set_header Host $http_host;\\\\ proxy_set_header X-Real-IP $remote_addr;\\\\ proxy_set_header REMOTE-HOST $remote_addr;\\\\ proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\\\ proxy_pass http://\'${intranet_extranet}\':\'${java_port}\'/;\\\\ }\\\\ \' ${server_home}/nginxhome/conf.d/default.conf docker run \\\\ --name ${nginx_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/nginxhome/html:/usr/share/nginx/html \\\\ -v ${server_home}/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf \\\\ -v ${server_home}/nginxhome/logs:/var/log/nginx \\\\ -p ${nginx_port}:80 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${nginx_app_name}:${app_version} #java echo \'FROM openjdk:8-alpine3.9 ENV TZ=Asia/Shanghai RUN apk add fping RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone RUN apk --no-cache add ttf-dejavu fontconfig EXPOSE 8080 ENV APP_PORT=8080 ENV TZ=Asia/Shanghai ENTRYPOINT java -jar -Xms1024m -Xmx2048m -Dfile.encoding=utf-8 -Dserver.port=8080 /root/*.jar\'&gt;Dockerfile #make-java docker stop ${java_app_name} docker rm ${java_app_name} docker rmi ${group_name}/${java_app_name}:${app_version} docker build -t ${group_name}/${java_app_name}:${app_version} . docker run \\\\ --name ${java_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/jarhome:/root \\\\ -p ${java_port}:8080 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${java_app_name}:${app_version} #export-images docker save -o ${server_home}/${mysql_app_name}.tar ${group_name}/${mysql_app_name} docker save -o ${server_home}/${redis_app_name}.tar ${group_name}/${redis_app_name} docker save -o ${server_home}/${nginx_app_name}.tar ${group_name}/${nginx_app_name} docker save -o ${server_home}/${java_app_name}.tar ${group_name}/${java_app_name}","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/docker/docker-offline-make.html"}],["meta",{"property":"og:title","content":"docker 离线制作"}],["meta",{"property":"og:description","content":"#!/bin/sh echo \'input_group_name:\' read group_name mysql_port=3306 redis_port=6379 nginx_port=80 java_port=8080 intranet_extranet=127.0.0.1 server_home=${PWD} mysql_app_name=${group_name}-\'mysql\' redis_app_name=${group_name}-\'redis\' nginx_app_name=${group_name}-\'nginx\' java_app_name=${group_name}-\'java\' app_version=\'latest\' #mysql echo \'FROM mysql:5.7.28 ENV TZ=Asia/Shanghai\' &gt;Dockerfile #make-mysql docker stop ${mysql_app_name} docker rm ${mysql_app_name} docker rmi ${group_name}/${mysql_app_name}:${app_version} docker build -t ${group_name}/${mysql_app_name}:${app_version} . docker run \\\\ --name ${mysql_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/mysqlhome:/var/lib/mysql \\\\ -p ${mysql_port}:3306 \\\\ -e MYSQL_ROOT_PASSWORD=system \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${mysql_app_name}:${app_version} #redis echo \'FROM redis:7-alpine ENV TZ=Asia/Shanghai RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone EXPOSE 6379\' &gt;Dockerfile #make-redis docker stop ${redis_app_name} docker rm ${redis_app_name} docker rmi ${group_name}/${redis_app_name}:${app_version} docker build -t ${group_name}/${redis_app_name}:${app_version} . docker run \\\\ --name ${redis_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -p ${redis_port}:6379 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${redis_app_name}:${app_version} \\\\ --requirepass system \\\\ --appendonly yes #nginx echo \'FROM nginx:1-alpine-slim ENV TZ=Asia/Shanghai RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone EXPOSE 80 443\' &gt;Dockerfile #make-nginx docker stop ${nginx_app_name} docker rm ${nginx_app_name} docker rmi ${group_name}/${nginx_app_name}:${app_version} docker build -t ${group_name}/${nginx_app_name}:${app_version} . mkdir -p ${server_home}/nginxhome/conf.d docker run --name tmp-nginx-container -d nginx docker cp tmp-nginx-container:/etc/nginx/conf.d/default.conf ${server_home}/nginxhome/conf.d/default.conf docker cp tmp-nginx-container:/usr/share/nginx/html ${server_home}/nginxhome/html docker rm -f tmp-nginx-container sed -i \'/#error_page 404/i\\\\ location /prod-api/{\\\\ proxy_set_header Host $http_host;\\\\ proxy_set_header X-Real-IP $remote_addr;\\\\ proxy_set_header REMOTE-HOST $remote_addr;\\\\ proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\\\ proxy_pass http://\'${intranet_extranet}\':\'${java_port}\'/;\\\\ }\\\\ \' ${server_home}/nginxhome/conf.d/default.conf docker run \\\\ --name ${nginx_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/nginxhome/html:/usr/share/nginx/html \\\\ -v ${server_home}/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf \\\\ -v ${server_home}/nginxhome/logs:/var/log/nginx \\\\ -p ${nginx_port}:80 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${nginx_app_name}:${app_version} #java echo \'FROM openjdk:8-alpine3.9 ENV TZ=Asia/Shanghai RUN apk add fping RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone RUN apk --no-cache add ttf-dejavu fontconfig EXPOSE 8080 ENV APP_PORT=8080 ENV TZ=Asia/Shanghai ENTRYPOINT java -jar -Xms1024m -Xmx2048m -Dfile.encoding=utf-8 -Dserver.port=8080 /root/*.jar\'&gt;Dockerfile #make-java docker stop ${java_app_name} docker rm ${java_app_name} docker rmi ${group_name}/${java_app_name}:${app_version} docker build -t ${group_name}/${java_app_name}:${app_version} . docker run \\\\ --name ${java_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/jarhome:/root \\\\ -p ${java_port}:8080 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${java_app_name}:${app_version} #export-images docker save -o ${server_home}/${mysql_app_name}.tar ${group_name}/${mysql_app_name} docker save -o ${server_home}/${redis_app_name}.tar ${group_name}/${redis_app_name} docker save -o ${server_home}/${nginx_app_name}.tar ${group_name}/${nginx_app_name} docker save -o ${server_home}/${java_app_name}.tar ${group_name}/${java_app_name}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T05:51:40.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2025-01-07T05:51:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 离线制作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-07T05:51:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1736229100000,"updatedTime":1736229100000,"contributors":[{"name":"刘艺祥","email":"44796278+lyx926@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.5,"words":450},"filePathRelative":"skill/docker/docker-offline-make.md","localizedDate":"2025年1月7日","excerpt":"<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/sh</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\'input_group_name:\'</span>\\n<span class=\\"token builtin class-name\\">read</span> group_name\\n\\n<span class=\\"token assign-left variable\\">mysql_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">3306</span>\\n<span class=\\"token assign-left variable\\">redis_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">6379</span>\\n<span class=\\"token assign-left variable\\">nginx_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">80</span>\\n<span class=\\"token assign-left variable\\">java_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">8080</span>\\n<span class=\\"token assign-left variable\\">intranet_extranet</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">127.0</span>.0.1\\n<span class=\\"token assign-left variable\\">server_home</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${<span class=\\"token environment constant\\">PWD</span>}</span>\\n<span class=\\"token assign-left variable\\">mysql_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'mysql\'</span>\\n<span class=\\"token assign-left variable\\">redis_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'redis\'</span>\\n<span class=\\"token assign-left variable\\">nginx_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'nginx\'</span>\\n<span class=\\"token assign-left variable\\">java_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'java\'</span>\\n<span class=\\"token assign-left variable\\">app_version</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\'latest\'</span>\\n<span class=\\"token comment\\">#mysql</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\'FROM mysql:5.7.28\\nENV TZ=Asia/Shanghai\'</span> <span class=\\"token operator\\">&gt;</span>Dockerfile\\n<span class=\\"token comment\\">#make-mysql</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${mysql_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${mysql_app_name}</span>\\n<span class=\\"token function\\">docker</span> rmi <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${mysql_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n<span class=\\"token function\\">docker</span> build <span class=\\"token parameter variable\\">-t</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${mysql_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span> <span class=\\"token builtin class-name\\">.</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${mysql_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/mysqlhome:/var/lib/mysql <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${mysql_port}</span>:3306 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">MYSQL_ROOT_PASSWORD</span><span class=\\"token operator\\">=</span>system <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${mysql_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n\\n<span class=\\"token comment\\">#redis</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\'FROM redis:7-alpine\\nENV TZ=Asia/Shanghai\\nRUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone\\nEXPOSE 6379\'</span> <span class=\\"token operator\\">&gt;</span>Dockerfile\\n<span class=\\"token comment\\">#make-redis</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${redis_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${redis_app_name}</span>\\n<span class=\\"token function\\">docker</span> rmi <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${redis_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n<span class=\\"token function\\">docker</span> build <span class=\\"token parameter variable\\">-t</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${redis_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span> <span class=\\"token builtin class-name\\">.</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${redis_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${redis_port}</span>:6379 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${redis_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--requirepass</span> system <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--appendonly</span> <span class=\\"token function\\">yes</span>\\n\\n<span class=\\"token comment\\">#nginx</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\'FROM nginx:1-alpine-slim\\nENV TZ=Asia/Shanghai\\nRUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone\\nEXPOSE 80 443\'</span> <span class=\\"token operator\\">&gt;</span>Dockerfile\\n<span class=\\"token comment\\">#make-nginx</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${nginx_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${nginx_app_name}</span>\\n<span class=\\"token function\\">docker</span> rmi <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${nginx_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n<span class=\\"token function\\">docker</span> build <span class=\\"token parameter variable\\">-t</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${nginx_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span> <span class=\\"token builtin class-name\\">.</span>\\n<span class=\\"token function\\">mkdir</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/conf.d\\n<span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">--name</span> tmp-nginx-container <span class=\\"token parameter variable\\">-d</span> nginx\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">cp</span> tmp-nginx-container:/etc/nginx/conf.d/default.conf <span class=\\"token variable\\">${server_home}</span>/nginxhome/conf.d/default.conf\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">cp</span> tmp-nginx-container:/usr/share/nginx/html <span class=\\"token variable\\">${server_home}</span>/nginxhome/html\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-f</span> tmp-nginx-container\\n<span class=\\"token function\\">sed</span> <span class=\\"token parameter variable\\">-i</span> <span class=\\"token string\\">\'/#error_page  404/i\\\\\\n    location /prod-api/{\\\\\\n        proxy_set_header Host $http_host;\\\\\\n        proxy_set_header X-Real-IP $remote_addr;\\\\\\n        proxy_set_header REMOTE-HOST $remote_addr;\\\\\\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\\\\\n        proxy_pass http://\'</span><span class=\\"token variable\\">${intranet_extranet}</span><span class=\\"token string\\">\':\'</span><span class=\\"token variable\\">${java_port}</span><span class=\\"token string\\">\'/;\\\\\\n    }\\\\\\n\'</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/conf.d/default.conf\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${nginx_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/html:/usr/share/nginx/html <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/logs:/var/log/nginx <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${nginx_port}</span>:80 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${nginx_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n\\n<span class=\\"token comment\\">#java</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\'FROM openjdk:8-alpine3.9\\nENV TZ=Asia/Shanghai\\nRUN apk add fping\\nRUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone\\nRUN apk --no-cache add ttf-dejavu fontconfig\\nEXPOSE 8080\\nENV APP_PORT=8080\\nENV TZ=Asia/Shanghai\\nENTRYPOINT java -jar -Xms1024m -Xmx2048m -Dfile.encoding=utf-8 -Dserver.port=8080 /root/*.jar\'</span><span class=\\"token operator\\">&gt;</span>Dockerfile\\n<span class=\\"token comment\\">#make-java</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${java_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${java_app_name}</span>\\n<span class=\\"token function\\">docker</span> rmi <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${java_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n<span class=\\"token function\\">docker</span> build <span class=\\"token parameter variable\\">-t</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${java_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span> <span class=\\"token builtin class-name\\">.</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${java_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/jarhome:/root <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${java_port}</span>:8080 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${java_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n\\n<span class=\\"token comment\\">#export-images</span>\\n<span class=\\"token function\\">docker</span> save <span class=\\"token parameter variable\\">-o</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${mysql_app_name}</span>.tar <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${mysql_app_name}</span>\\n<span class=\\"token function\\">docker</span> save <span class=\\"token parameter variable\\">-o</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${redis_app_name}</span>.tar <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${redis_app_name}</span>\\n<span class=\\"token function\\">docker</span> save <span class=\\"token parameter variable\\">-o</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${nginx_app_name}</span>.tar <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${nginx_app_name}</span>\\n<span class=\\"token function\\">docker</span> save <span class=\\"token parameter variable\\">-o</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${java_app_name}</span>.tar <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${java_app_name}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};
