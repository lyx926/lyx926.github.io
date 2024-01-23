import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as t,c as o,b as a,d as l,e as c,a as p}from"./app-zIsYl0QO.js";const r={},i={href:"https://blog.csdn.net/zyy247796143/article/details/124355917",target:"_blank",rel:"noopener noreferrer"},d=p(`<h3 id="备份脚本" tabindex="-1"><a class="header-anchor" href="#备份脚本" aria-hidden="true">#</a> 备份脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器名<span class="token punctuation">]</span> mysql_config_editor <span class="token builtin class-name">set</span> --login-path<span class="token operator">=</span>root_login <span class="token parameter variable">--user</span><span class="token operator">=</span>root <span class="token parameter variable">--password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器名<span class="token punctuation">]</span> <span class="token function">ls</span> <span class="token parameter variable">-la</span> /root/.mylogin.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器名<span class="token punctuation">]</span> mysqldump --login-path<span class="token operator">=</span>root_login <span class="token punctuation">[</span>数据库<span class="token punctuation">]</span> <span class="token operator">&gt;</span> /backup/<span class="token punctuation">[</span>数据库<span class="token punctuation">]</span>_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d<span class="token variable">)</span></span>.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;00 02 * * * root find /backup -maxdepth 1 -type f -mtime +30 -name &quot;*.sql&quot; | xargs rm -rf&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;00 03 * * * root /usr/bin/docker exec [容器名] mysqldump --login-path=root_login [数据库] &gt; /backup/[数据库]_$(date +\\%Y\\%m\\%d).sql&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function u(m,k){const s=e("ExternalLinkIcon");return t(),o("div",null,[a("blockquote",null,[a("p",null,[a("a",i,[l("(98条消息) docker版mysql:5.7.34 免密码使用mysqldump备份_mysqldump免密_昜羊的博客-CSDN博客"),c(s)])])]),d])}const g=n(r,[["render",u],["__file","mysql-backup.html.vue"]]);export{g as default};