import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-DMV0CyYq.js";const p={},t=e(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> 模块_业务<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> 模块_业务
<span class="token punctuation">(</span>
    业务_id     <span class="token keyword">bigint</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">&#39;主键ID&#39;</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>

    关联_id     <span class="token keyword">bigint</span>                      <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;关联id&#39;</span><span class="token punctuation">,</span>
    数字        <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>                      <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;数字&#39;</span><span class="token punctuation">,</span>
    时间        <span class="token keyword">datetime</span>                    <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;时间&#39;</span><span class="token punctuation">,</span>
    字典        <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>       <span class="token keyword">default</span> <span class="token string">&#39;0&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;字典&#39;</span><span class="token punctuation">,</span>
    字符        <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>   <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;字符&#39;</span><span class="token punctuation">,</span>
    价格        <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0.00</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;价格&#39;</span><span class="token punctuation">,</span>

    sort        <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>                      <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;排序&#39;</span><span class="token punctuation">,</span>
    del_flag    <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>       <span class="token keyword">default</span> <span class="token string">&#39;0&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;删除标志（0代表存在 2代表删除）&#39;</span><span class="token punctuation">,</span>
    create_by   <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>   <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;创建者&#39;</span><span class="token punctuation">,</span>
    create_time <span class="token keyword">datetime</span>                    <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
    update_by   <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>   <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;更新者&#39;</span><span class="token punctuation">,</span>
    update_time <span class="token keyword">datetime</span>                    <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;更新时间&#39;</span><span class="token punctuation">,</span>
    remark      <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>   <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;备注&#39;</span>
<span class="token punctuation">)</span> <span class="token keyword">comment</span> <span class="token string">&#39;模块_业务表&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function l(c,k){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","mysql.html.vue"]]);export{u as default};
