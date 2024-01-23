import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-3TYQz3YH.js";const i={},t=e(`<h3 id="git-commit-提交" tabindex="-1"><a class="header-anchor" href="#git-commit-提交" aria-hidden="true">#</a> Git Commit（提交）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#提交</span>
<span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-branch-分支" tabindex="-1"><a class="header-anchor" href="#git-branch-分支" aria-hidden="true">#</a> Git branch（分支）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>your-branch-name<span class="token operator">&gt;</span>
<span class="token comment">#切换到新的分支上</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>your-branch-name<span class="token operator">&gt;</span>
<span class="token comment">#创建一个新的分支同时切换到新创建的分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>your-branch-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-merge-合并" tabindex="-1"><a class="header-anchor" href="#git-merge-合并" aria-hidden="true">#</a> git merge（合并）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#意思：我要把这两个父节点本身及它们所有的祖先都包含进来</span>
<span class="token comment">#创建新分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>your-branch-name<span class="token operator">&gt;</span>
<span class="token comment">#命令切换到该分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>your-branch-name<span class="token operator">&gt;</span>
<span class="token comment">#提交一次（提交分支代码）</span>
<span class="token function">git</span> commit
<span class="token comment"># 切换回 main</span>
<span class="token function">git</span> checkout main
<span class="token comment">#再提交一次（提交主干代码）</span>
<span class="token function">git</span> commit
<span class="token comment">#把 &lt;your-branch-name&gt; 合并到 main（在主干下执行；把分支拿过来）</span>
<span class="token function">git</span> merge 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function o(l,r){return a(),s("div",null,c)}const p=n(i,[["render",o],["__file","git.html.vue"]]);export{p as default};
