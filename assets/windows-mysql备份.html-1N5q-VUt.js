import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as e}from"./app-NTEIs-s-.js";const t={},o=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rem auther:lyx926
rem ******MySQL backup start********
@echo off
forfiles /p <span class="token string">&quot;C:\\heli\\mysql\\MySQL BackUp&quot;</span> /m backup_*.sql <span class="token parameter variable">-d</span> <span class="token parameter variable">-30</span> /c <span class="token string">&quot;cmd /c del /f @path&quot;</span>
<span class="token builtin class-name">set</span> <span class="token string">&quot;Ymd=%date:~0,4%%date:~5,2%%date:~8,2%0%time:~1,1%%time:~3,2%%time:~6,2%&quot;</span>
<span class="token string">&quot;C:\\heli\\mysql\\winmysql56\\MySQL\\MySQL<span class="token entity" title="\\b">\\b</span>in\\mysqldump&quot;</span> <span class="token parameter variable">--opt</span> --single-transaction<span class="token operator">=</span>TRUE <span class="token parameter variable">--user</span><span class="token operator">=</span>root <span class="token parameter variable">--password</span><span class="token operator">=</span>system <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token parameter variable">--protocol</span><span class="token operator">=</span>tcp <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">3306</span> --default-character-set<span class="token operator">=</span>utf8 --single-transaction<span class="token operator">=</span>TRUE <span class="token parameter variable">--routines</span> <span class="token parameter variable">--events</span> <span class="token string">&quot;helisd&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;C:\\heli\\mysql\\MySQL BackUp<span class="token entity" title="\\b">\\b</span>ackup_%Ymd%.sql&quot;</span>
@echo on
rem ******MySQL backup end********
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[o];function r(l,i){return a(),n("div",null,p)}const d=s(t,[["render",r],["__file","windows-mysql备份.html.vue"]]);export{d as default};
