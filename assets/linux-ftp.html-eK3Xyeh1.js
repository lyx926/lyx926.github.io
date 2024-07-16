import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as e}from"./app-Bh0UmbdV.js";const l={},i=e(`<h3 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">ip</span><span class="token operator">=</span>xxx <span class="token comment">#ftp服务器</span>
<span class="token assign-left variable">u</span><span class="token operator">=</span>xxx <span class="token comment">#用户名</span>
<span class="token assign-left variable">p</span><span class="token operator">=</span>xxx <span class="token comment">#密码</span>
<span class="token assign-left variable">tm</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m<span class="token variable">\`</span></span> <span class="token comment">#获取当前系统年月</span>
<span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span> <span class="token comment">#获取当前系统年月日</span>
<span class="token assign-left variable">lcdPath</span><span class="token operator">=</span>/xxx/xxx <span class="token comment">#下载目录</span>

<span class="token comment">#连接、切换目录、上传*.zip</span>
<span class="token function">ftp</span> <span class="token parameter variable">-vn</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
open <span class="token variable">$ip</span>
user <span class="token variable">$u</span> <span class="token variable">$p</span>
binary
prompt off
cd  /
lcd <span class="token variable">\${lcdPath}</span>
mput *.zip
close
quit
EOF</span>

<span class="token comment">#批量重置后缀成*.zipbackup</span>
<span class="token comment">#rename .zip .zipbackup *.zip</span>

<span class="token comment">#清空本地目录</span>
<span class="token comment">#rm -rf /home/data/*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">ip</span><span class="token operator">=</span>xxx <span class="token comment">#ftp服务器</span>
<span class="token assign-left variable">u</span><span class="token operator">=</span>xxx <span class="token comment">#用户名</span>
<span class="token assign-left variable">p</span><span class="token operator">=</span>xxx <span class="token comment">#密码</span>
<span class="token assign-left variable">tm</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m<span class="token variable">\`</span></span> <span class="token comment">#获取当前系统年月</span>
<span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span> <span class="token comment">#获取当前系统年月日</span>
<span class="token assign-left variable">lcdPath</span><span class="token operator">=</span>/xxx/xxx <span class="token comment">#下载目录</span>

<span class="token comment">#连接、切换目录、下载传*.zip</span>
<span class="token function">ftp</span> <span class="token parameter variable">-ivn</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
open <span class="token variable">$ip</span>
user <span class="token variable">$u</span> <span class="token variable">$p</span>
binary
cd <span class="token variable">\${tm}</span>
lcd <span class="token variable">\${lcdPath}</span>
get *.zip
close
bye
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[i];function t(c,o){return n(),a("div",null,p)}const v=s(l,[["render",t],["__file","linux-ftp.html.vue"]]);export{v as default};
