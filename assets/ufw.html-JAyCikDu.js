import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,a as i}from"./app-DNkwlrGX.js";const l={};function d(t,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h3 id="安装命令" tabindex="-1"><a class="header-anchor" href="#安装命令" aria-hidden="true">#</a> 安装命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ufw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查ufw状态" tabindex="-1"><a class="header-anchor" href="#检查ufw状态" aria-hidden="true">#</a> 检查UFW状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw status verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="应用配置" tabindex="-1"><a class="header-anchor" href="#应用配置" aria-hidden="true">#</a> 应用配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#列出系统上所有应用程序</span>
<span class="token function">sudo</span> ufw app list
<span class="token comment">#例如，要获取有关OpenSSH配置文件的信息</span>
<span class="token function">sudo</span> ufw app info OpenSSH
<span class="token comment">#要将UFW防火墙配置为接受SSH连接</span>
<span class="token function">sudo</span> ufw allow OpenSSH
<span class="token comment">#例如，您的ssh服务器侦听端口2222</span>
<span class="token function">sudo</span> ufw allow <span class="token number">2222</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用与禁用ufw" tabindex="-1"><a class="header-anchor" href="#启用与禁用ufw" aria-hidden="true">#</a> 启用与禁用UFW</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
<span class="token function">sudo</span> ufw disable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开放端口" tabindex="-1"><a class="header-anchor" href="#开放端口" aria-hidden="true">#</a> 开放端口</h3><p>开启http服务需要的80端口:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow http
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用端口号80代替http配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">80</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启https服务需要端口:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow https
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用端口号443代替https配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">443</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启tomcat默认使用的8080端口:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">8080</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许网段:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">8090</span>:9090/tcp
<span class="token function">sudo</span> ufw allow <span class="token number">8090</span>:9090/udp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>允许IP:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token number">192.168</span>.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许IP+port:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token number">192.168</span>.1.1 to any port <span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许子网:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token number">192.168</span>.1.0/24 to any port <span class="token number">3306</span>
<span class="token function">sudo</span> ufw allow from <span class="token number">192.168</span>.1.0/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>允许连接到特定的网络接口:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token keyword">in</span> on eth0 to any port <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拒绝连接" tabindex="-1"><a class="header-anchor" href="#拒绝连接" aria-hidden="true">#</a> 拒绝连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>allow 换成 deny
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除ufw规则" tabindex="-1"><a class="header-anchor" href="#删除ufw规则" aria-hidden="true">#</a> 删除UFW规则</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看规则</span>
<span class="token function">sudo</span> ufw status numbered
<span class="token comment">#通过规则号删除</span>
<span class="token function">sudo</span> ufw delete <span class="token number">3</span>
<span class="token comment">#通过端口号删除</span>
<span class="token function">sudo</span> ufw delete allow <span class="token number">8069</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重置ufw" tabindex="-1"><a class="header-anchor" href="#重置ufw" aria-hidden="true">#</a> 重置UFW</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#重置UFW将会禁用UFW，并删除所有活动规则。</span>
<span class="token function">sudo</span> ufw reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口转发" tabindex="-1"><a class="header-anchor" href="#端口转发" aria-hidden="true">#</a> 端口转发</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置文件</span>
<span class="token function">vi</span> etc/default/ufw
default_forward_policy <span class="token operator">=</span> <span class="token string">&quot;accept&quot;</span>

<span class="token comment">#/etc/ufw/sysctl.conf 允许ipv4转发</span>
net/ipv4/ip_forward<span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">#iptables方式</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token punctuation">[</span>端口号<span class="token punctuation">]</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token punctuation">[</span>目标IP<span class="token punctuation">]</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>目标IP<span class="token punctuation">]</span> <span class="token parameter variable">--dport</span> <span class="token punctuation">[</span>端口号<span class="token punctuation">]</span> <span class="token parameter variable">-j</span> SNAT --to-source <span class="token punctuation">[</span>中转服务器IP<span class="token punctuation">]</span>

<span class="token comment">#ufw方式</span>
<span class="token function">vi</span> /etc/ufw/before.rules

<span class="token comment">#注意*nat，以COMMIT结尾才会生效。*filter一个COMMIT,*nat一个COMMIT</span>
<span class="token comment">#不能总用一个COMMIT。</span>
*nat
:PREROUTING ACCEPT <span class="token punctuation">[</span><span class="token number">0</span>:0<span class="token punctuation">]</span>
:POSTROUTING ACCEPT <span class="token punctuation">[</span><span class="token number">0</span>:0<span class="token punctuation">]</span>

<span class="token comment"># Port Forwardings </span>
<span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">10010</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">103.79</span>.78.76
<span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-d</span> <span class="token number">103.79</span>.78.76 <span class="token parameter variable">--dport</span> <span class="token number">10010</span> <span class="token parameter variable">-j</span> SNAT --to-source <span class="token number">183.60</span>.100.8

<span class="token comment"># don&#39;t delete the &#39;COMMIT&#39; line or these rules won&#39;t be processed</span>
COMMIT

<span class="token comment">#重新启动ufw</span>
<span class="token function">sudo</span> ufw disable <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>

<span class="token comment">#查看iptables生效状态</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-L</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)]))}const r=s(l,[["render",d],["__file","ufw.html.vue"]]);export{r as default};
