const e=JSON.parse('{"key":"v-0ff0580f","path":"/skill/windows/windows-mysql%E5%A4%87%E4%BB%BD.html","title":"备份mysql","lang":"zh-CN","frontmatter":{"title":"备份mysql","icon":"file","description":"rem auther:lyx926 rem ******MySQL backup start******** @echo off forfiles /p \\"C:\\\\heli\\\\mysql\\\\MySQL BackUp\\" /m backup_*.sql -d -30 /c \\"cmd /c del /f @path\\" set \\"Ymd=%date:~0,4%%date:~5,2%%date:~8,2%0%time:~1,1%%time:~3,2%%time:~6,2%\\" \\"C:\\\\heli\\\\mysql\\\\winmysql56\\\\MySQL\\\\MySQL\\\\bin\\\\mysqldump\\" --opt --single-transaction=TRUE --user=root --password=system --host=127.0.0.1 --protocol=tcp --port=3306 --default-character-set=utf8 --single-transaction=TRUE --routines --events \\"helisd\\" &gt; \\"C:\\\\heli\\\\mysql\\\\MySQL BackUp\\\\backup_%Ymd%.sql\\" @echo on rem ******MySQL backup end********","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/windows/windows-mysql%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:title","content":"备份mysql"}],["meta",{"property":"og:description","content":"rem auther:lyx926 rem ******MySQL backup start******** @echo off forfiles /p \\"C:\\\\heli\\\\mysql\\\\MySQL BackUp\\" /m backup_*.sql -d -30 /c \\"cmd /c del /f @path\\" set \\"Ymd=%date:~0,4%%date:~5,2%%date:~8,2%0%time:~1,1%%time:~3,2%%time:~6,2%\\" \\"C:\\\\heli\\\\mysql\\\\winmysql56\\\\MySQL\\\\MySQL\\\\bin\\\\mysqldump\\" --opt --single-transaction=TRUE --user=root --password=system --host=127.0.0.1 --protocol=tcp --port=3306 --default-character-set=utf8 --single-transaction=TRUE --routines --events \\"helisd\\" &gt; \\"C:\\\\heli\\\\mysql\\\\MySQL BackUp\\\\backup_%Ymd%.sql\\" @echo on rem ******MySQL backup end********"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-13T02:56:57.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2025-03-13T02:56:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"备份mysql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-13T02:56:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1741834617000,"updatedTime":1741834617000,"contributors":[{"name":"刘艺祥","email":"44796278+lyx926@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"skill/windows/windows-mysql备份.md","localizedDate":"2025年3月13日","excerpt":"<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>rem auther:lyx926\\nrem ******MySQL backup start********\\n@echo off\\nforfiles /p <span class=\\"token string\\">\\"C:\\\\heli\\\\mysql\\\\MySQL BackUp\\"</span> /m backup_*.sql <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-30</span> /c <span class=\\"token string\\">\\"cmd /c del /f @path\\"</span>\\n<span class=\\"token builtin class-name\\">set</span> <span class=\\"token string\\">\\"Ymd=%date:~0,4%%date:~5,2%%date:~8,2%0%time:~1,1%%time:~3,2%%time:~6,2%\\"</span>\\n<span class=\\"token string\\">\\"C:\\\\heli\\\\mysql\\\\winmysql56\\\\MySQL\\\\MySQL<span class=\\"token entity\\" title=\\"\\\\b\\">\\\\b</span>in\\\\mysqldump\\"</span> <span class=\\"token parameter variable\\">--opt</span> --single-transaction<span class=\\"token operator\\">=</span>TRUE <span class=\\"token parameter variable\\">--user</span><span class=\\"token operator\\">=</span>root <span class=\\"token parameter variable\\">--password</span><span class=\\"token operator\\">=</span>system <span class=\\"token parameter variable\\">--host</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">127.0</span>.0.1 <span class=\\"token parameter variable\\">--protocol</span><span class=\\"token operator\\">=</span>tcp <span class=\\"token parameter variable\\">--port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">3306</span> --default-character-set<span class=\\"token operator\\">=</span>utf8 --single-transaction<span class=\\"token operator\\">=</span>TRUE <span class=\\"token parameter variable\\">--routines</span> <span class=\\"token parameter variable\\">--events</span> <span class=\\"token string\\">\\"helisd\\"</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token string\\">\\"C:\\\\heli\\\\mysql\\\\MySQL BackUp<span class=\\"token entity\\" title=\\"\\\\b\\">\\\\b</span>ackup_%Ymd%.sql\\"</span>\\n@echo on\\nrem ******MySQL backup end********\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
