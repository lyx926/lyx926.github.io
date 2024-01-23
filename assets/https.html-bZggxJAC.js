const n=JSON.parse('{"key":"v-35a0a6ee","path":"/skill/command/https.html","title":"https","lang":"zh-CN","frontmatter":{"title":"https","icon":"file","description":"nginx容器 docker run -d -p 80:80 -p 443:443 \\\\ --name n-index \\\\ --privileged=true \\\\ --restart=always \\\\ -v /disk/home/index/nginx/www:/usr/share/nginx/html \\\\ -v /disk/home/index/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\\\ -v /disk/home/index/nginx/logs:/var/log/nginx \\\\ -v /disk/home/index/nginx/cert:/etc/nginx/cert \\\\ -e TZ=Asia/Shanghai nginx:latest","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/command/https.html"}],["meta",{"property":"og:title","content":"https"}],["meta",{"property":"og:description","content":"nginx容器 docker run -d -p 80:80 -p 443:443 \\\\ --name n-index \\\\ --privileged=true \\\\ --restart=always \\\\ -v /disk/home/index/nginx/www:/usr/share/nginx/html \\\\ -v /disk/home/index/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\\\ -v /disk/home/index/nginx/logs:/var/log/nginx \\\\ -v /disk/home/index/nginx/cert:/etc/nginx/cert \\\\ -e TZ=Asia/Shanghai nginx:latest"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-23T03:44:29.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2024-01-23T03:44:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"https\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-23T03:44:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[{"level":3,"title":"nginx容器","slug":"nginx容器","link":"#nginx容器","children":[]},{"level":3,"title":"https的nginx.conf配置","slug":"https的nginx-conf配置","link":"#https的nginx-conf配置","children":[]},{"level":3,"title":"/disk/home/index/nginx目录结构","slug":"disk-home-index-nginx目录结构","link":"#disk-home-index-nginx目录结构","children":[]}],"git":{"createdTime":1705981469000,"updatedTime":1705981469000,"contributors":[{"name":"刘艺祥","email":"lyx990926@outlook.com","commits":1}]},"readingTime":{"minutes":0.79,"words":236},"filePathRelative":"skill/command/https.md","localizedDate":"2024年1月23日","excerpt":"<h3> nginx容器</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">80</span>:80 <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">443</span>:443 <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">--name</span> n-index <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">--privileged</span><span class=\\"token operator\\">=</span>true <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">-v</span> /disk/home/index/nginx/www:/usr/share/nginx/html <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">-v</span> /disk/home/index/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">-v</span> /disk/home/index/nginx/logs:/var/log/nginx <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">-v</span> /disk/home/index/nginx/cert:/etc/nginx/cert <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span>Asia/Shanghai nginx:latest\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};