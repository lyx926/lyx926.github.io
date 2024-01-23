import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as e}from"./app-Nhhw7drx.js";const p={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;input_group_name:&#39;</span>
<span class="token builtin class-name">read</span> group_name

<span class="token assign-left variable">mysql_port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">redis_port</span><span class="token operator">=</span><span class="token number">6379</span>
<span class="token assign-left variable">nginx_port</span><span class="token operator">=</span><span class="token number">80</span>
<span class="token assign-left variable">java_port</span><span class="token operator">=</span><span class="token number">8080</span>
<span class="token assign-left variable">intranet_extranet</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">server_home</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PWD</span>}</span>
<span class="token assign-left variable">mysql_app_name</span><span class="token operator">=</span><span class="token variable">\${group_name}</span>-<span class="token string">&#39;mysql&#39;</span>
<span class="token assign-left variable">redis_app_name</span><span class="token operator">=</span><span class="token variable">\${group_name}</span>-<span class="token string">&#39;redis&#39;</span>
<span class="token assign-left variable">nginx_app_name</span><span class="token operator">=</span><span class="token variable">\${group_name}</span>-<span class="token string">&#39;nginx&#39;</span>
<span class="token assign-left variable">java_app_name</span><span class="token operator">=</span><span class="token variable">\${group_name}</span>-<span class="token string">&#39;java&#39;</span>
<span class="token assign-left variable">app_version</span><span class="token operator">=</span><span class="token string">&#39;latest&#39;</span>
<span class="token comment">#mysql</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;FROM mysql:5.7.28
ENV TZ=Asia/Shanghai&#39;</span> <span class="token operator">&gt;</span>Dockerfile
<span class="token comment">#make-mysql</span>
<span class="token function">docker</span> stop <span class="token variable">\${mysql_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${mysql_app_name}</span>
<span class="token function">docker</span> rmi <span class="token variable">\${group_name}</span>/<span class="token variable">\${mysql_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${mysql_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${mysql_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/mysqlhome:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${mysql_port}</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>system <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${mysql_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>

<span class="token comment">#redis</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;FROM redis:7-alpine
ENV TZ=Asia/Shanghai
RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/\${TZ} /etc/localtime &amp;&amp; echo \${TZ} &gt; /etc/timezone
EXPOSE 6379&#39;</span> <span class="token operator">&gt;</span>Dockerfile
<span class="token comment">#make-redis</span>
<span class="token function">docker</span> stop <span class="token variable">\${redis_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${redis_app_name}</span>
<span class="token function">docker</span> rmi <span class="token variable">\${group_name}</span>/<span class="token variable">\${redis_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${redis_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${redis_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${redis_port}</span>:6379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${redis_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--requirepass</span> system <span class="token punctuation">\\</span>
  <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span>

<span class="token comment">#nginx</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;FROM nginx:1-alpine-slim
ENV TZ=Asia/Shanghai
RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/\${TZ} /etc/localtime &amp;&amp; echo \${TZ} &gt; /etc/timezone
EXPOSE 80 443&#39;</span> <span class="token operator">&gt;</span>Dockerfile
<span class="token comment">#make-nginx</span>
<span class="token function">docker</span> stop <span class="token variable">\${nginx_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${nginx_app_name}</span>
<span class="token function">docker</span> rmi <span class="token variable">\${group_name}</span>/<span class="token variable">\${nginx_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${nginx_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span> <span class="token builtin class-name">.</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${server_home}</span>/nginxhome/conf.d
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> tmp-nginx-container <span class="token parameter variable">-d</span> nginx
<span class="token function">docker</span> <span class="token function">cp</span> tmp-nginx-container:/etc/nginx/conf.d/default.conf <span class="token variable">\${server_home}</span>/nginxhome/conf.d/default.conf
<span class="token function">docker</span> <span class="token function">cp</span> tmp-nginx-container:/usr/share/nginx/html <span class="token variable">\${server_home}</span>/nginxhome/html
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> tmp-nginx-container
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/#error_page  404/i\\
    location /prod-api/{\\
        proxy_set_header Host $http_host;\\
        proxy_set_header X-Real-IP $remote_addr;\\
        proxy_set_header REMOTE-HOST $remote_addr;\\
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\
        proxy_pass http://&#39;</span><span class="token variable">\${intranet_extranet}</span><span class="token string">&#39;:&#39;</span><span class="token variable">\${java_port}</span><span class="token string">&#39;/;\\
    }\\
&#39;</span> <span class="token variable">\${server_home}</span>/nginxhome/conf.d/default.conf
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${nginx_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/nginxhome/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/nginxhome/conf.d/default.conf:/etc/nginx/conf.d/default.conf <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/nginxhome/logs:/var/log/nginx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${nginx_port}</span>:80 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${nginx_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>

<span class="token comment">#java</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;FROM openjdk:8-alpine3.9
ENV TZ=Asia/Shanghai
RUN apk add fping
RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/\${TZ} /etc/localtime &amp;&amp; echo \${TZ} &gt; /etc/timezone
RUN apk --no-cache add ttf-dejavu fontconfig
EXPOSE 8080
ENV APP_PORT=8080
ENV TZ=Asia/Shanghai
ENTRYPOINT java -jar -Xms1024m -Xmx2048m -Dfile.encoding=utf-8 -Dserver.port=8080 /root/*.jar&#39;</span><span class="token operator">&gt;</span>Dockerfile
<span class="token comment">#make-java</span>
<span class="token function">docker</span> stop <span class="token variable">\${java_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${java_app_name}</span>
<span class="token function">docker</span> rmi <span class="token variable">\${group_name}</span>/<span class="token variable">\${java_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${java_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${java_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/jarhome:/root <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${java_port}</span>:8080 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${java_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>

<span class="token comment">#export-images</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${mysql_app_name}</span>.tar <span class="token variable">\${group_name}</span>/<span class="token variable">\${mysql_app_name}</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${redis_app_name}</span>.tar <span class="token variable">\${group_name}</span>/<span class="token variable">\${redis_app_name}</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${nginx_app_name}</span>.tar <span class="token variable">\${group_name}</span>/<span class="token variable">\${nginx_app_name}</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${java_app_name}</span>.tar <span class="token variable">\${group_name}</span>/<span class="token variable">\${java_app_name}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function t(r,o){return n(),s("div",null,i)}const m=a(p,[["render",t],["__file","docker-offline-make.html.vue"]]);export{m as default};
