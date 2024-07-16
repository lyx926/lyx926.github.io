const n=JSON.parse(`{"key":"v-75e9c6d4","path":"/skill/mysql/mysql-create-demo.html","title":"mysql create 例子","lang":"zh-CN","frontmatter":{"title":"mysql create 例子","icon":"book","description":"DROP TABLE IF EXISTS 模块_业务; create table if not exists 模块_业务 ( 业务_id bigint auto_increment comment '主键ID' primary key, 关联_id bigint null comment '关联id', 数字 int(4) null comment '数字', 时间 datetime null comment '时间', 字典 char(10) default '0' null comment '字典', 字符 varchar(64) default '' null comment '字符', 价格 decimal(10, 2) default 0.00 null comment '价格', sort int(4) null comment '排序', del_flag char(10) default '0' null comment '删除标志（0代表存在 2代表删除）', create_by varchar(64) default '' null comment '创建者', create_time datetime null comment '创建时间', update_by varchar(64) default '' null comment '更新者', update_time datetime null comment '更新时间', remark varchar(64) default '' null comment '备注' ) comment '模块_业务表';","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/mysql/mysql-create-demo.html"}],["meta",{"property":"og:title","content":"mysql create 例子"}],["meta",{"property":"og:description","content":"DROP TABLE IF EXISTS 模块_业务; create table if not exists 模块_业务 ( 业务_id bigint auto_increment comment '主键ID' primary key, 关联_id bigint null comment '关联id', 数字 int(4) null comment '数字', 时间 datetime null comment '时间', 字典 char(10) default '0' null comment '字典', 字符 varchar(64) default '' null comment '字符', 价格 decimal(10, 2) default 0.00 null comment '价格', sort int(4) null comment '排序', del_flag char(10) default '0' null comment '删除标志（0代表存在 2代表删除）', create_by varchar(64) default '' null comment '创建者', create_time datetime null comment '创建时间', update_by varchar(64) default '' null comment '更新者', update_time datetime null comment '更新时间', remark varchar(64) default '' null comment '备注' ) comment '模块_业务表';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-23T06:17:35.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2024-01-23T06:17:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mysql create 例子\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-23T06:17:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1705990655000,"updatedTime":1705990655000,"contributors":[{"name":"刘艺祥","email":"lyx990926@outlook.com","commits":1}]},"readingTime":{"minutes":0.56,"words":169},"filePathRelative":"skill/mysql/mysql-create-demo.md","localizedDate":"2024年1月23日","excerpt":"<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">DROP</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token keyword\\">IF</span> <span class=\\"token keyword\\">EXISTS</span> 模块_业务<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> <span class=\\"token keyword\\">if</span> <span class=\\"token operator\\">not</span> <span class=\\"token keyword\\">exists</span> 模块_业务\\n<span class=\\"token punctuation\\">(</span>\\n    业务_id     <span class=\\"token keyword\\">bigint</span> <span class=\\"token keyword\\">auto_increment</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'主键ID'</span> <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span>\\n\\n    关联_id     <span class=\\"token keyword\\">bigint</span>                      <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'关联id'</span><span class=\\"token punctuation\\">,</span>\\n    数字        <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span>                      <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'数字'</span><span class=\\"token punctuation\\">,</span>\\n    时间        <span class=\\"token keyword\\">datetime</span>                    <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'时间'</span><span class=\\"token punctuation\\">,</span>\\n    字典        <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span>       <span class=\\"token keyword\\">default</span> <span class=\\"token string\\">'0'</span>  <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'字典'</span><span class=\\"token punctuation\\">,</span>\\n    字符        <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span>    <span class=\\"token keyword\\">default</span> <span class=\\"token string\\">''</span>   <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'字符'</span><span class=\\"token punctuation\\">,</span>\\n    价格        <span class=\\"token keyword\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">default</span> <span class=\\"token number\\">0.00</span> <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'价格'</span><span class=\\"token punctuation\\">,</span>\\n\\n    sort        <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span>                      <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'排序'</span><span class=\\"token punctuation\\">,</span>\\n    del_flag    <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span>       <span class=\\"token keyword\\">default</span> <span class=\\"token string\\">'0'</span>  <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'删除标志（0代表存在 2代表删除）'</span><span class=\\"token punctuation\\">,</span>\\n    create_by   <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span>    <span class=\\"token keyword\\">default</span> <span class=\\"token string\\">''</span>   <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'创建者'</span><span class=\\"token punctuation\\">,</span>\\n    create_time <span class=\\"token keyword\\">datetime</span>                    <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'创建时间'</span><span class=\\"token punctuation\\">,</span>\\n    update_by   <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span>    <span class=\\"token keyword\\">default</span> <span class=\\"token string\\">''</span>   <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'更新者'</span><span class=\\"token punctuation\\">,</span>\\n    update_time <span class=\\"token keyword\\">datetime</span>                    <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'更新时间'</span><span class=\\"token punctuation\\">,</span>\\n    remark      <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span>    <span class=\\"token keyword\\">default</span> <span class=\\"token string\\">''</span>   <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'备注'</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">comment</span> <span class=\\"token string\\">'模块_业务表'</span><span class=\\"token punctuation\\">;</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
