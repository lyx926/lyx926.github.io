const s=JSON.parse('{"key":"v-73531cd6","path":"/skill/windows/windows-kill-port.html","title":"杀掉端口","lang":"zh-CN","frontmatter":{"title":"杀掉端口","icon":"file","description":"@echo off rem input port set/p port=input port: echo port : %port% for /f \\"usebackq tokens=1-5\\" %%a in (`netstat -ano ^| findstr %port%`) do ( if [%%d] EQU [LISTENING] ( set pid=%%e ) ) for /f \\"usebackq tokens=1-5\\" %%a in (`tasklist ^| findstr %pid%`) do ( set executableFile=%%a ) echo now will kill process : pid %pid%, executableFile: %executableFile% pause rem byPID kill Process taskkill /f /pid %pid% pause","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/windows/windows-kill-port.html"}],["meta",{"property":"og:title","content":"杀掉端口"}],["meta",{"property":"og:description","content":"@echo off rem input port set/p port=input port: echo port : %port% for /f \\"usebackq tokens=1-5\\" %%a in (`netstat -ano ^| findstr %port%`) do ( if [%%d] EQU [LISTENING] ( set pid=%%e ) ) for /f \\"usebackq tokens=1-5\\" %%a in (`tasklist ^| findstr %pid%`) do ( set executableFile=%%a ) echo now will kill process : pid %pid%, executableFile: %executableFile% pause rem byPID kill Process taskkill /f /pid %pid% pause"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T05:51:40.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2025-01-07T05:51:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"杀掉端口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-07T05:51:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1736229100000,"updatedTime":1736229100000,"contributors":[{"name":"刘艺祥","email":"44796278+lyx926@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.25,"words":74},"filePathRelative":"skill/windows/windows-kill-port.md","localizedDate":"2025年1月7日","excerpt":"<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>@echo off  \\nrem input port  \\nset/p <span class=\\"token assign-left variable\\">port</span><span class=\\"token operator\\">=</span>input port:  \\n<span class=\\"token builtin class-name\\">echo</span> port <span class=\\"token builtin class-name\\">:</span> %port%  \\n<span class=\\"token keyword\\">for</span> /f <span class=\\"token string\\">\\"usebackq tokens=1-5\\"</span> %%a <span class=\\"token keyword\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-ano</span> ^<span class=\\"token operator\\">|</span> findstr %port%<span class=\\"token variable\\">`</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">do</span> <span class=\\"token punctuation\\">(</span>  \\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span>%%d<span class=\\"token punctuation\\">]</span> EQU <span class=\\"token punctuation\\">[</span>LISTENING<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">(</span>  \\n<span class=\\"token builtin class-name\\">set</span> <span class=\\"token assign-left variable\\">pid</span><span class=\\"token operator\\">=</span>%%e  \\n<span class=\\"token punctuation\\">)</span>  \\n<span class=\\"token punctuation\\">)</span>  \\n<span class=\\"token keyword\\">for</span> /f <span class=\\"token string\\">\\"usebackq tokens=1-5\\"</span> %%a <span class=\\"token keyword\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span>tasklist ^<span class=\\"token operator\\">|</span> findstr %pid%<span class=\\"token variable\\">`</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">do</span> <span class=\\"token punctuation\\">(</span>  \\n<span class=\\"token builtin class-name\\">set</span> <span class=\\"token assign-left variable\\">executableFile</span><span class=\\"token operator\\">=</span>%%a  \\n<span class=\\"token punctuation\\">)</span>  \\n<span class=\\"token builtin class-name\\">echo</span> now will <span class=\\"token function\\">kill</span> process <span class=\\"token builtin class-name\\">:</span> pid %pid%, executableFile: %executableFile%  \\npause  \\nrem byPID <span class=\\"token function\\">kill</span> Process  \\ntaskkill /f /pid %pid%  \\npause\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
