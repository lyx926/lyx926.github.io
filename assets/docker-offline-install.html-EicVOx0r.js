import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as e}from"./app-DMV0CyYq.js";const p={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>

<span class="token comment">#docker-run</span>
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

<span class="token comment">#import-images</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${mysql_app_name}</span>.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${redis_app_name}</span>.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${nginx_app_name}</span>.tar
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> <span class="token variable">\${server_home}</span>/<span class="token variable">\${java_app_name}</span>.tar

<span class="token comment">#docker-run-mysql</span>
<span class="token function">docker</span> stop <span class="token variable">\${mysql_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${mysql_app_name}</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${mysql_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/mysqlhome:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${mysql_port}</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>system <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${mysql_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>

<span class="token comment">#docker-run-redis</span>
<span class="token function">docker</span> stop <span class="token variable">\${redis_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${redis_app_name}</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${redis_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${redis_port}</span>:6379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${redis_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--requirepass</span> system <span class="token punctuation">\\</span>
  <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span>

<span class="token comment">#docker-run-nginx</span>
<span class="token function">docker</span> stop <span class="token variable">\${nginx_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${nginx_app_name}</span>
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

<span class="token comment">#docker-run-java</span>
<span class="token function">docker</span> stop <span class="token variable">\${java_app_name}</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">\${java_app_name}</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token variable">\${java_app_name}</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable">\${server_home}</span>/jarhome:/root <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token variable">\${java_port}</span>:8080 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token variable">\${group_name}</span>/<span class="token variable">\${java_app_name}</span><span class="token builtin class-name">:</span><span class="token variable">\${app_version}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function t(r,o){return n(),s("div",null,i)}const k=a(p,[["render",t],["__file","docker-offline-install.html.vue"]]);export{k as default};
