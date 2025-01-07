import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as t}from"./app-CJFOVqyv.js";const l={};function p(i,s){return a(),e("div",null,s[0]||(s[0]=[t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off  
rem input port  
set/p <span class="token assign-left variable">port</span><span class="token operator">=</span>input port:  
<span class="token builtin class-name">echo</span> port <span class="token builtin class-name">:</span> %port%  
<span class="token keyword">for</span> /f <span class="token string">&quot;usebackq tokens=1-5&quot;</span> %%a <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-ano</span> ^<span class="token operator">|</span> findstr %port%<span class="token variable">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>  
<span class="token keyword">if</span> <span class="token punctuation">[</span>%%d<span class="token punctuation">]</span> EQU <span class="token punctuation">[</span>LISTENING<span class="token punctuation">]</span> <span class="token punctuation">(</span>  
<span class="token builtin class-name">set</span> <span class="token assign-left variable">pid</span><span class="token operator">=</span>%%e  
<span class="token punctuation">)</span>  
<span class="token punctuation">)</span>  
<span class="token keyword">for</span> /f <span class="token string">&quot;usebackq tokens=1-5&quot;</span> %%a <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>tasklist ^<span class="token operator">|</span> findstr %pid%<span class="token variable">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>  
<span class="token builtin class-name">set</span> <span class="token assign-left variable">executableFile</span><span class="token operator">=</span>%%a  
<span class="token punctuation">)</span>  
<span class="token builtin class-name">echo</span> now will <span class="token function">kill</span> process <span class="token builtin class-name">:</span> pid %pid%, executableFile: %executableFile%  
pause  
rem byPID <span class="token function">kill</span> Process  
taskkill /f /pid %pid%  
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const r=n(l,[["render",p],["__file","windows-kill-port.html.vue"]]);export{r as default};
