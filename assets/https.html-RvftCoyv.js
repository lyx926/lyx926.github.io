import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-DMV0CyYq.js";const i={},l=e(`<h3 id="nginx容器" tabindex="-1"><a class="header-anchor" href="#nginx容器" aria-hidden="true">#</a> nginx容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> n-index <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /disk/home/index/nginx/www:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /disk/home/index/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /disk/home/index/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /disk/home/index/nginx/cert:/etc/nginx/cert <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai nginx:latest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https的nginx-conf配置" tabindex="-1"><a class="header-anchor" href="#https的nginx-conf配置" aria-hidden="true">#</a> https的nginx.conf配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        <span class="token comment">#80</span>
        server <span class="token punctuation">{</span>
                listen <span class="token number">80</span><span class="token punctuation">;</span>
                server_name liuyixiang.xyz<span class="token punctuation">;</span> <span class="token comment">#填写绑定证书的域名</span>
                rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span> <span class="token comment">#把http的域名请求转成https</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#443</span>
        server <span class="token punctuation">{</span>

                <span class="token comment">#listen       80;</span>
                <span class="token comment">#server_name  localhost;</span>

                listen <span class="token number">443</span> ssl<span class="token punctuation">;</span> <span class="token comment">#SSL 访问端口号为 443  并启用 SSL 功能</span>
                server_name liuyixiang.xyz<span class="token punctuation">;</span> <span class="token comment">#填写绑定证书的域名</span>
                ssl_certificate /etc/nginx/cert/6459658_www.liuyixiang.xyz.pem<span class="token punctuation">;</span> <span class="token comment">#证书文件名称</span>
                ssl_certificate_key /etc/nginx/cert/6459658_www.liuyixiang.xyz.key<span class="token punctuation">;</span> <span class="token comment">#私钥文件名称</span>
                ssl_session_timeout 5m<span class="token punctuation">;</span>
                ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span> <span class="token comment">#请按照这个协议配置</span>
                ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span> <span class="token comment">#请按照这个套件配置，配置加密套件，写法遵循 openssl 标准。</span>
                ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

                <span class="token comment">#web</span>
                location / <span class="token punctuation">{</span>
                        root   /usr/share/nginx/html<span class="token punctuation">;</span>
                        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
                        index  index.html index.htm<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>

                location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
                        root   html<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="disk-home-index-nginx目录结构" tabindex="-1"><a class="header-anchor" href="#disk-home-index-nginx目录结构" aria-hidden="true">#</a> /disk/home/index/nginx目录结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lyx-host nginx<span class="token punctuation">]</span><span class="token comment"># tree</span>
<span class="token builtin class-name">.</span>
├── cert
│   ├── 6459658_www.liuyixiang.xyz.key
│   ├── 6459658_www.liuyixiang.xyz.pem
│   ├── apiclient_cert.p12
│   ├── apiclient_cert.p12_bak
│   ├── apiclient_cert.pem
│   └── apiclient_key.pem
├── conf│   └── nginx.conf
├── logs
│   ├── access.log
│   └── error.log
└── www
    ├── <span class="token number">1557105</span>.apk
    ├── index.html
    ├── script.js
    └── style.css

<span class="token number">4</span> directories, <span class="token number">13</span> files
<span class="token punctuation">[</span>root@lyx-host nginx<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function c(p,o){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","https.html.vue"]]);export{u as default};
