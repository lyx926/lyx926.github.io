import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as D,c as m,a as h}from"./app-DMV0CyYq.js";function f(){var e=window.location.pathname;e==="/"&&setTimeout(()=>{const a=Date.parse(new Date("2023-10-24 20:53:00")),n=Date.parse(new Date);v(n,a),_()},500)}function v(e,a){const n=e-a,s=Math.floor(n/(24*3600*1e3)),t=n%(24*3600*1e3),o=Math.floor(t/(3600*1e3)),i=t%(3600*1e3),c=Math.floor(i/(60*1e3)),d=i%(60*1e3),u=Math.floor(d/1e3),l=s+"天"+o+"时"+c+"分"+u+"秒";document.getElementById("miss").innerHTML=l}function _(){var e=new Date,a=e.toLocaleDateString(),n=e.getHours(),s=e.getMinutes(),t=e.getSeconds(),o=a+"	"+r(n)+":"+r(s)+":"+r(t);document.getElementById("currentTime").innerHTML=o}typeof document<"u"&&setInterval(f,1e3);function r(e){return e<10?"0"+e:e}console.info("script run success ^_^");const g={},b=h(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token punctuation">\\</span> _/<span class="token punctuation">)</span>  🟡
<span class="token punctuation">(</span> <span class="token string">&#39;ㅅ&#39;</span><span class="token punctuation">)</span>
/<span class="token operator">&gt;</span> 🥕<span class="token operator">&lt;</span><span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="today-s-date" tabindex="-1"><a class="header-anchor" href="#today-s-date" aria-hidden="true">#</a> Today&#39;s date <span id="currentTime"></span></h3><h3 id="has-been-running" tabindex="-1"><a class="header-anchor" href="#has-been-running" aria-hidden="true">#</a> Has been running <span id="miss"></span></h3>`,3),T=[b];function k(e,a,n,s,t,o){return D(),m("div",null,T)}const M=p(g,[["render",k],["__file","index.html.vue"]]);export{M as default};