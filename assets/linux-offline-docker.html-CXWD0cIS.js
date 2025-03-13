import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as d,o,b as s,a as t,d as a,e as c}from"./app-BMPBEw1T.js";const r={},p={href:"https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/",target:"_blank",rel:"noopener noreferrer"};function u(m,n){const e=l("ExternalLinkIcon");return o(),d("div",null,[n[1]||(n[1]=s("h3",{id:"下载离线包",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下载离线包","aria-hidden":"true"},"#"),a(" 下载离线包")],-1)),s("p",null,[s("a",p,[n[0]||(n[0]=a("https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/")),c(e)])]),n[2]||(n[2]=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>containerd.io_1.6.9-1_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docker-ce_20.10.23~3-0~ubuntu-jammy_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docker-ce-cli_20.10.23~3-0~ubuntu-jammy_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5))])}const k=i(r,[["render",u],["__file","linux-offline-docker.html.vue"]]);export{k as default};
