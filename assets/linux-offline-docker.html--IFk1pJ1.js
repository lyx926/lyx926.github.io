import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-zIsYl0QO.js";const c={},o=e(`<h3 id="下载离线包" tabindex="-1"><a class="header-anchor" href="#下载离线包" aria-hidden="true">#</a> 下载离线包</h3><blockquote><p>https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/ containerd.io_1.6.9-1_amd64.deb docker-ce_20.10.23<sub>3-0</sub>ubuntu-jammy_amd64.deb docker-ce-cli_20.10.23<sub>3-0</sub>ubuntu-jammy_amd64.deb</p></blockquote><h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>

<span class="token comment">#docker-run</span>
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> *.deb <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token parameter variable">-f</span> <span class="token function">install</span>
<span class="token comment">#5s</span>
<span class="token function">sleep</span> 5s
<span class="token comment">#enable-docker</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token comment">#restart-docker</span>
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
<span class="token comment">#set user in group</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
<span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> <span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token function">docker</span>
newgrp <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[o];function i(l,d){return s(),a("div",null,t)}const u=n(c,[["render",i],["__file","linux-offline-docker.html.vue"]]);export{u as default};