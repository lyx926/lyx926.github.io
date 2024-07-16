const a=JSON.parse('{"key":"v-5ce9505d","path":"/skill/docker/docker-offline-install.html","title":"docker 离线安装","lang":"zh-CN","frontmatter":{"title":"docker 离线安装","icon":"file","description":"#/bin/bash #docker-run echo \'input_group_name:\' read group_name mysql_port=3306 redis_port=6379 nginx_port=80 java_port=8080 intranet_extranet=127.0.0.1 server_home=${PWD} mysql_app_name=${group_name}-\'mysql\' redis_app_name=${group_name}-\'redis\' nginx_app_name=${group_name}-\'nginx\' java_app_name=${group_name}-\'java\' app_version=\'latest\' #import-images docker load -i ${server_home}/${mysql_app_name}.tar docker load -i ${server_home}/${redis_app_name}.tar docker load -i ${server_home}/${nginx_app_name}.tar docker load -i ${server_home}/${java_app_name}.tar #docker-run-mysql docker stop ${mysql_app_name} docker rm ${mysql_app_name} docker run \\\\ --name ${mysql_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/mysqlhome:/var/lib/mysql \\\\ -p ${mysql_port}:3306 \\\\ -e MYSQL_ROOT_PASSWORD=system \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${mysql_app_name}:${app_version} #docker-run-redis docker stop ${redis_app_name} docker rm ${redis_app_name} docker run \\\\ --name ${redis_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -p ${redis_port}:6379 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${redis_app_name}:${app_version} \\\\ --requirepass system \\\\ --appendonly yes #docker-run-nginx docker stop ${nginx_app_name} docker rm ${nginx_app_name} docker run \\\\ --name ${nginx_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/nginxhome/html:/usr/share/nginx/html \\\\ -v ${server_home}/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf \\\\ -v ${server_home}/nginxhome/logs:/var/log/nginx \\\\ -p ${nginx_port}:80 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${nginx_app_name}:${app_version} #docker-run-java docker stop ${java_app_name} docker rm ${java_app_name} docker run \\\\ --name ${java_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/jarhome:/root \\\\ -p ${java_port}:8080 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${java_app_name}:${app_version}","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/docker/docker-offline-install.html"}],["meta",{"property":"og:title","content":"docker 离线安装"}],["meta",{"property":"og:description","content":"#/bin/bash #docker-run echo \'input_group_name:\' read group_name mysql_port=3306 redis_port=6379 nginx_port=80 java_port=8080 intranet_extranet=127.0.0.1 server_home=${PWD} mysql_app_name=${group_name}-\'mysql\' redis_app_name=${group_name}-\'redis\' nginx_app_name=${group_name}-\'nginx\' java_app_name=${group_name}-\'java\' app_version=\'latest\' #import-images docker load -i ${server_home}/${mysql_app_name}.tar docker load -i ${server_home}/${redis_app_name}.tar docker load -i ${server_home}/${nginx_app_name}.tar docker load -i ${server_home}/${java_app_name}.tar #docker-run-mysql docker stop ${mysql_app_name} docker rm ${mysql_app_name} docker run \\\\ --name ${mysql_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/mysqlhome:/var/lib/mysql \\\\ -p ${mysql_port}:3306 \\\\ -e MYSQL_ROOT_PASSWORD=system \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${mysql_app_name}:${app_version} #docker-run-redis docker stop ${redis_app_name} docker rm ${redis_app_name} docker run \\\\ --name ${redis_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -p ${redis_port}:6379 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${redis_app_name}:${app_version} \\\\ --requirepass system \\\\ --appendonly yes #docker-run-nginx docker stop ${nginx_app_name} docker rm ${nginx_app_name} docker run \\\\ --name ${nginx_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/nginxhome/html:/usr/share/nginx/html \\\\ -v ${server_home}/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf \\\\ -v ${server_home}/nginxhome/logs:/var/log/nginx \\\\ -p ${nginx_port}:80 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${nginx_app_name}:${app_version} #docker-run-java docker stop ${java_app_name} docker rm ${java_app_name} docker run \\\\ --name ${java_app_name} \\\\ --privileged=true \\\\ --restart=always \\\\ -v ${server_home}/jarhome:/root \\\\ -p ${java_port}:8080 \\\\ -e TZ=Asia/Shanghai \\\\ -d ${group_name}/${java_app_name}:${app_version}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T10:16:14.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2024-01-11T10:16:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 离线安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-11T10:16:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1704968174000,"updatedTime":1704968174000,"contributors":[{"name":"刘艺祥","email":"lyx990926@outlook.com","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"skill/docker/docker-offline-install.md","localizedDate":"2024年1月11日","excerpt":"<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#/bin/bash</span>\\n\\n<span class=\\"token comment\\">#docker-run</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\'input_group_name:\'</span>\\n<span class=\\"token builtin class-name\\">read</span> group_name\\n\\n<span class=\\"token assign-left variable\\">mysql_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">3306</span>\\n<span class=\\"token assign-left variable\\">redis_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">6379</span>\\n<span class=\\"token assign-left variable\\">nginx_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">80</span>\\n<span class=\\"token assign-left variable\\">java_port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">8080</span>\\n<span class=\\"token assign-left variable\\">intranet_extranet</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">127.0</span>.0.1\\n<span class=\\"token assign-left variable\\">server_home</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${<span class=\\"token environment constant\\">PWD</span>}</span>\\n<span class=\\"token assign-left variable\\">mysql_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'mysql\'</span>\\n<span class=\\"token assign-left variable\\">redis_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'redis\'</span>\\n<span class=\\"token assign-left variable\\">nginx_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'nginx\'</span>\\n<span class=\\"token assign-left variable\\">java_app_name</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${group_name}</span>-<span class=\\"token string\\">\'java\'</span>\\n<span class=\\"token assign-left variable\\">app_version</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\'latest\'</span>\\n\\n<span class=\\"token comment\\">#import-images</span>\\n<span class=\\"token function\\">docker</span> load <span class=\\"token parameter variable\\">-i</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${mysql_app_name}</span>.tar\\n<span class=\\"token function\\">docker</span> load <span class=\\"token parameter variable\\">-i</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${redis_app_name}</span>.tar\\n<span class=\\"token function\\">docker</span> load <span class=\\"token parameter variable\\">-i</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${nginx_app_name}</span>.tar\\n<span class=\\"token function\\">docker</span> load <span class=\\"token parameter variable\\">-i</span> <span class=\\"token variable\\">${server_home}</span>/<span class=\\"token variable\\">${java_app_name}</span>.tar\\n\\n<span class=\\"token comment\\">#docker-run-mysql</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${mysql_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${mysql_app_name}</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${mysql_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/mysqlhome:/var/lib/mysql <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${mysql_port}</span>:3306 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">MYSQL_ROOT_PASSWORD</span><span class=\\"token operator\\">=</span>system <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${mysql_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n\\n<span class=\\"token comment\\">#docker-run-redis</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${redis_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${redis_app_name}</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${redis_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${redis_port}</span>:6379 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${redis_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--requirepass</span> system <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--appendonly</span> <span class=\\"token function\\">yes</span>\\n\\n<span class=\\"token comment\\">#docker-run-nginx</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${nginx_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${nginx_app_name}</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${nginx_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/html:/usr/share/nginx/html <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/nginxhome/logs:/var/log/nginx <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${nginx_port}</span>:80 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${nginx_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n\\n<span class=\\"token comment\\">#docker-run-java</span>\\n<span class=\\"token function\\">docker</span> stop <span class=\\"token variable\\">${java_app_name}</span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token function\\">rm</span> <span class=\\"token variable\\">${java_app_name}</span>\\n<span class=\\"token function\\">docker</span> run <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--name</span> <span class=\\"token variable\\">${java_app_name}</span> <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-v</span> <span class=\\"token variable\\">${server_home}</span>/jarhome:/root <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${java_port}</span>:8080 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${group_name}</span>/<span class=\\"token variable\\">${java_app_name}</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">${app_version}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};
