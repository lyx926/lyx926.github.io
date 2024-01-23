const e=JSON.parse('{"key":"v-99b391f8","path":"/skill/linux/linux-offline-docker.html","title":"离线docker","lang":"zh-CN","frontmatter":{"title":"离线docker","icon":"file","description":"下载离线包 https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/ containerd.io_1.6.9-1_amd64.deb docker-ce_20.10.233-0ubuntu-jammy_amd64.deb docker-ce-cli_20.10.233-0ubuntu-jammy_amd64.deb 安装步骤 #/bin/bash #docker-run sudo dpkg -i *.deb &amp;&amp; apt-get -f install #5s sleep 5s #enable-docker sudo systemctl enable docker #restart-docker sudo systemctl restart docker #set user in group sudo groupadd docker sudo gpasswd -a ${USER} docker newgrp docker","head":[["meta",{"property":"og:url","content":"https://liuyixiang.xyz/skill/linux/linux-offline-docker.html"}],["meta",{"property":"og:title","content":"离线docker"}],["meta",{"property":"og:description","content":"下载离线包 https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/ containerd.io_1.6.9-1_amd64.deb docker-ce_20.10.233-0ubuntu-jammy_amd64.deb docker-ce-cli_20.10.233-0ubuntu-jammy_amd64.deb 安装步骤 #/bin/bash #docker-run sudo dpkg -i *.deb &amp;&amp; apt-get -f install #5s sleep 5s #enable-docker sudo systemctl enable docker #restart-docker sudo systemctl restart docker #set user in group sudo groupadd docker sudo gpasswd -a ${USER} docker newgrp docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-23T03:33:05.000Z"}],["meta",{"property":"article:author","content":"lyx926"}],["meta",{"property":"article:modified_time","content":"2024-01-23T03:33:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"离线docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-23T03:33:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lyx926\\",\\"url\\":\\"https://liuyixiang.xyz\\"}]}"]]},"headers":[{"level":3,"title":"下载离线包","slug":"下载离线包","link":"#下载离线包","children":[]},{"level":3,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]}],"git":{"createdTime":1705980785000,"updatedTime":1705980785000,"contributors":[{"name":"刘艺祥","email":"lyx990926@outlook.com","commits":1}]},"readingTime":{"minutes":0.24,"words":73},"filePathRelative":"skill/linux/linux-offline-docker.md","localizedDate":"2024年1月23日","excerpt":"<h3> 下载离线包</h3>\\n<blockquote>\\n<p>https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/\\ncontainerd.io_1.6.9-1_amd64.deb\\ndocker-ce_20.10.23<sub>3-0</sub>ubuntu-jammy_amd64.deb\\ndocker-ce-cli_20.10.23<sub>3-0</sub>ubuntu-jammy_amd64.deb</p>\\n</blockquote>\\n<h3> 安装步骤</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#/bin/bash</span>\\n\\n<span class=\\"token comment\\">#docker-run</span>\\n<span class=\\"token function\\">sudo</span> dpkg <span class=\\"token parameter variable\\">-i</span> *.deb <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token parameter variable\\">-f</span> <span class=\\"token function\\">install</span>\\n<span class=\\"token comment\\">#5s</span>\\n<span class=\\"token function\\">sleep</span> 5s\\n<span class=\\"token comment\\">#enable-docker</span>\\n<span class=\\"token function\\">sudo</span> systemctl <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token function\\">docker</span>\\n<span class=\\"token comment\\">#restart-docker</span>\\n<span class=\\"token function\\">sudo</span> systemctl restart <span class=\\"token function\\">docker</span>\\n<span class=\\"token comment\\">#set user in group</span>\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">groupadd</span> <span class=\\"token function\\">docker</span>\\n<span class=\\"token function\\">sudo</span> gpasswd <span class=\\"token parameter variable\\">-a</span> <span class=\\"token variable\\">${<span class=\\"token environment constant\\">USER</span>}</span> <span class=\\"token function\\">docker</span>\\nnewgrp <span class=\\"token function\\">docker</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};