import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as e,c as z,b as i,d as I,e as E,a as f}from"./app-DZH5QBzw.js";const t={},r={id:"什么是gitea",tabindex:"-1"},P={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E4%BB%80%E4%B9%88%E6%98%AFgitea",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitea.io/",target:"_blank",rel:"noopener noreferrer"},d={id:"什么是drone",tabindex:"-1"},u={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E4%BB%80%E4%B9%88%E6%98%AFdrone",target:"_blank",rel:"noopener noreferrer"},X={href:"https://www.drone.io/",target:"_blank",rel:"noopener noreferrer"},c={id:"开始配置",tabindex:"-1"},O={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%BC%80%E5%A7%8B%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},a={id:"准备ubuntu一台配置docker-compose具体可以看docker-compose指南篇章",tabindex:"-1"},s={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%87%86%E5%A4%87ubuntu%E4%B8%80%E5%8F%B0%E9%85%8D%E7%BD%AEdocker-compose%E5%85%B7%E4%BD%93%E5%8F%AF%E4%BB%A5%E7%9C%8Bdocker-compose%E6%8C%87%E5%8D%97%E7%AF%87%E7%AB%A0",target:"_blank",rel:"noopener noreferrer"},j={id:"先上图",tabindex:"-1"},m={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%85%88%E4%B8%8A%E5%9B%BE",target:"_blank",rel:"noopener noreferrer"},Z={id:"启动",tabindex:"-1"},l={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%90%AF%E5%8A%A8",target:"_blank",rel:"noopener noreferrer"},H={id:"ip-3000配置gitea",tabindex:"-1"},x={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#ip3000%E9%85%8D%E7%BD%AEgitea",target:"_blank",rel:"noopener noreferrer"},p={id:"配置oauth2生成",tabindex:"-1"},y={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E9%85%8D%E7%BD%AEoauth2%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"},W={id:"配置-evn文件",tabindex:"-1"},N={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E9%85%8D%E7%BD%AEevn%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},V={id:"ip-3080配置drone",tabindex:"-1"},k={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#ip3080%E9%85%8D%E7%BD%AEdrone",target:"_blank",rel:"noopener noreferrer"},L={id:"创建test仓库配置webhook测试",tabindex:"-1"},T={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%88%9B%E5%BB%BAtest%E4%BB%93%E5%BA%93%E9%85%8D%E7%BD%AEwebhook%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"},q={id:"通过docker-compose快速搭建gitea-drone",tabindex:"-1"},G={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E9%80%9A%E8%BF%87docker-compose%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BAgiteadrone",target:"_blank",rel:"noopener noreferrer"},J={id:"env变量配置文件",tabindex:"-1"},w={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#env%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},M={id:"docker-compose-yml",tabindex:"-1"},S={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#docker-composeyml",target:"_blank",rel:"noopener noreferrer"},h={id:"修改-gitea-容器内的-conf-app-ini",tabindex:"-1"},Y={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E4%BF%AE%E6%94%B9-gitea-%E5%AE%B9%E5%99%A8%E5%86%85%E7%9A%84-confappini",target:"_blank",rel:"noopener noreferrer"},D={id:"创建共享密钥给drone-rpc-secret",tabindex:"-1"},o={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%88%9B%E5%BB%BA%E5%85%B1%E4%BA%AB%E5%AF%86%E9%92%A5%E7%BB%99drone_rpc_secret",target:"_blank",rel:"noopener noreferrer"},C={id:"drone-yml测试",tabindex:"-1"},K={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#droneyml%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"};function U(B,A){const R=n("ExternalLinkIcon");return e(),z("div",null,[A[53]||(A[53]=i("h1",{id:"docker-gitea-drone指南",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#docker-gitea-drone指南","aria-hidden":"true"},"#"),I(" Docker-Gitea+Drone指南")],-1)),A[54]||(A[54]=i("p",null,"本文是Docker-Gitea+Drone的一个快速指南。",-1)),i("h2",r,[A[0]||(A[0]=i("a",{class:"header-anchor",href:"#什么是gitea","aria-hidden":"true"},"#",-1)),A[1]||(A[1]=I()),i("a",P,[E(R)]),A[2]||(A[2]=I("什么是Gitea？"))]),A[55]||(A[55]=i("p",null,"Gitea 是一个自己托管的Git服务程序。他和GitHub, Bitbucket or Gitlab等比较类似。他是从 Gogs 发展而来，不过我们已经Fork并且命名为Gitea。对于我们Fork的原因可以看。",-1)),i("ul",null,[i("li",null,[i("a",b,[A[3]||(A[3]=I("官方文档")),E(R)])])]),i("h2",d,[A[4]||(A[4]=i("a",{class:"header-anchor",href:"#什么是drone","aria-hidden":"true"},"#",-1)),A[5]||(A[5]=I()),i("a",u,[E(R)]),A[6]||(A[6]=I("什么是Drone？"))]),A[56]||(A[56]=i("p",null,"Drone by Harness™ 是一个现代持续集成平台，使忙碌的团队能够使用强大的云原生管道引擎自动执行其构建、测试和发布工作流。",-1)),i("ul",null,[i("li",null,[i("a",X,[A[7]||(A[7]=I("官方文档")),E(R)])])]),i("h3",c,[A[8]||(A[8]=i("a",{class:"header-anchor",href:"#开始配置","aria-hidden":"true"},"#",-1)),A[9]||(A[9]=I()),i("a",O,[E(R)]),A[10]||(A[10]=I("开始配置"))]),i("h4",a,[A[11]||(A[11]=i("a",{class:"header-anchor",href:"#准备ubuntu一台配置docker-compose具体可以看docker-compose指南篇章","aria-hidden":"true"},"#",-1)),A[12]||(A[12]=I()),i("a",s,[E(R)]),A[13]||(A[13]=I("准备Ubuntu一台配置docker compose具体可以看Docker-compose指南篇章"))]),A[57]||(A[57]=f(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span>     ca-certificates     <span class="token function">curl</span>     gnupg     lsb-release

<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings

<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg

<span class="token builtin class-name">echo</span>   <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
        <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin <span class="token function">docker-compose</span>

<span class="token function">docker</span> compose version

<span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai

<span class="token comment"># 主机</span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.0.108 <span class="token comment"># ip/域名</span>

<span class="token comment"># Drone-server</span>
<span class="token assign-left variable">DRONE_SERVER_HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.0.108:3080 <span class="token comment"># ip/域名</span>
<span class="token assign-left variable">DRONE_SERVER_PROTO</span><span class="token operator">=</span>http <span class="token comment"># http/https</span>
<span class="token assign-left variable">DRONE_RPC_SECRET</span><span class="token operator">=</span>cd984341d2a3c961790376b75b53d453 <span class="token comment"># openssh共享密钥</span>

<span class="token comment"># Gitea</span>
<span class="token assign-left variable">DRONE_GITEA_CLIENT_ID</span><span class="token operator">=</span>a8844d3c-ad81-42fa-8221-a8bb37698e41 <span class="token comment"># OAuth2 客户端id</span>
<span class="token assign-left variable">DRONE_GITEA_CLIENT_SECRET</span><span class="token operator">=</span>gto_vjcf65wdjfcbzk4sfgbyhs6hxt4bdvusptbn7a6c76nlw4467sba <span class="token comment"># OAuth2 客户端密钥</span>
<span class="token assign-left variable">DRONE_GITEA_SERVER</span><span class="token operator">=</span>http://192.168.0.108:3000/ <span class="token comment"># ip/域名</span>
<span class="token assign-left variable">DRONE_DATABASE_DATASOURCE</span><span class="token operator">=</span>root:gitea@tcp<span class="token punctuation">(</span>mysql:3306<span class="token punctuation">)</span>/gitea <span class="token comment"># 数据库</span>
<span class="token assign-left variable">DRONE_DATABASE_DRIVER</span><span class="token operator">=</span>mysql <span class="token comment"># 数据库驱动</span>

<span class="token comment"># Drone-runner-docker</span>
<span class="token assign-left variable">DRONE_RPC_PROTO</span><span class="token operator">=</span>http <span class="token comment"># http/https</span>
<span class="token assign-left variable">DRONE_RUNNER_CAPACITY</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">DRONE_RUNNER_NAME</span><span class="token operator">=</span>docker-runner

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("h4",M,[A[41]||(A[41]=i("a",{class:"header-anchor",href:"#docker-compose-yml","aria-hidden":"true"},"#",-1)),A[42]||(A[42]=I()),i("a",S,[E(R)]),A[43]||(A[43]=I("docker-compose.yml"))]),A[69]||(A[69]=f(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3.7&quot;</span>
services:
    mysql:
        container_name: mysql
        image: mysql:5.7.27
        restart: always
        ports:
            - <span class="token string">&quot;3306:3306&quot;</span>
        volumes:
            - ./mysql/data:/var/lib/mysql:rw
            - ./mysql/logs:/var/log/mysql:rw
        environment:
            - <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token variable">\${TZ}</span>
            - <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>gitea
            - <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span>gitea
            - <span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span>gitea
            - <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>gitea
    gitea:
        container_name: gitea
        image: gitea/gitea:latest
        restart: always
        ports:
            - <span class="token string">&quot;3000:3000&quot;</span>
            - <span class="token string">&quot;3022:22&quot;</span>
        environment:
            - <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token variable">\${TZ}</span>
            - <span class="token assign-left variable">USER_UID</span><span class="token operator">=</span><span class="token number">1000</span>
            - <span class="token assign-left variable">USER_GID</span><span class="token operator">=</span><span class="token number">1000</span>
            - <span class="token assign-left variable">DB_TYPE</span><span class="token operator">=</span>mysql
            - <span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span><span class="token variable">\${HOST}</span>:3306
            - <span class="token assign-left variable">DB_NAME</span><span class="token operator">=</span>gitea
            - <span class="token assign-left variable">DB_USER</span><span class="token operator">=</span>gitea
        volumes:
            - ./gitea:/data
    drone-server:
        container_name: drone-server
        image: drone/drone:latest
        restart: always
        ports:
            - <span class="token string">&quot;3080:80&quot;</span>
        volumes:
            - ./drone:/var/lib/drone/
            - /var/run/docker.sock:/var/run/docker.sock
        environment:
            - <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token variable">\${TZ}</span>
            - <span class="token assign-left variable">DRONE_SERVER_HOST</span><span class="token operator">=</span><span class="token variable">\${DRONE_SERVER_HOST}</span>
            - <span class="token assign-left variable">DRONE_SERVER_PROTO</span><span class="token operator">=</span><span class="token variable">\${DRONE_SERVER_PROTO}</span>
            - <span class="token assign-left variable">DRONE_RPC_SECRET</span><span class="token operator">=</span><span class="token variable">\${DRONE_RPC_SECRET}</span>
            <span class="token comment"># Gitea Config</span>
            - <span class="token assign-left variable">DRONE_GITEA_CLIENT_ID</span><span class="token operator">=</span><span class="token variable">\${DRONE_GITEA_CLIENT_ID}</span>
            - <span class="token assign-left variable">DRONE_GITEA_CLIENT_SECRET</span><span class="token operator">=</span><span class="token variable">\${DRONE_GITEA_CLIENT_SECRET}</span>
            - <span class="token assign-left variable">DRONE_GITEA_SERVER</span><span class="token operator">=</span><span class="token variable">\${DRONE_GITEA_SERVER}</span>
            - <span class="token assign-left variable">DRONE_DATABASE_DATASOURCE</span><span class="token operator">=</span><span class="token variable">\${DRONE_DATABASE_DATASOURCE}</span>
            - <span class="token assign-left variable">DRONE_DATABASE_DRIVER</span><span class="token operator">=</span><span class="token variable">\${DRONE_DATABASE_DRIVER}</span>
            - <span class="token assign-left variable">DRONE_USER_CREATE</span><span class="token operator">=</span>username:gitea,admin:true <span class="token comment">#username是管理员账号</span>
    drone-runner-docker:
        container_name: drone-runner-docker
        image: drone/drone-runner-docker:latest
        restart: always
        depends_on:
            - drone-server
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
        environment:
            - <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token variable">\${TZ}</span>
            - <span class="token assign-left variable">DRONE_RPC_HOST</span><span class="token operator">=</span>drone-server
            - <span class="token assign-left variable">DRONE_RPC_PROTO</span><span class="token operator">=</span><span class="token variable">\${DRONE_RPC_PROTO}</span>
            - <span class="token assign-left variable">DRONE_RPC_SECRET</span><span class="token operator">=</span><span class="token variable">\${DRONE_RPC_SECRET}</span>
            - <span class="token assign-left variable">DRONE_RUNNER_CAPACITY</span><span class="token operator">=</span><span class="token variable">\${DRONE_RUNNER_CAPACITY}</span>
            - <span class="token assign-left variable">DRONE_RUNNER_NAME</span><span class="token operator">=</span><span class="token variable">\${DRONE_RUNNER_NAME}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("h4",h,[A[44]||(A[44]=i("a",{class:"header-anchor",href:"#修改-gitea-容器内的-conf-app-ini","aria-hidden":"true"},"#",-1)),A[45]||(A[45]=I()),i("a",Y,[E(R)]),A[46]||(A[46]=I("修改 Gitea 容器内的 conf/app.ini"))]),A[70]||(A[70]=f(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>webhook<span class="token punctuation">]</span>
ALLOWED_HOST_LIST <span class="token operator">=</span> *

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("h4",D,[A[47]||(A[47]=i("a",{class:"header-anchor",href:"#创建共享密钥给drone-rpc-secret","aria-hidden":"true"},"#",-1)),A[48]||(A[48]=I()),i("a",o,[E(R)]),A[49]||(A[49]=I("创建共享密钥给DRONE_RPC_SECRET"))]),A[71]||(A[71]=f(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl rand <span class="token parameter variable">-hex</span> <span class="token number">16</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),i("h4",C,[A[50]||(A[50]=i("a",{class:"header-anchor",href:"#drone-yml测试","aria-hidden":"true"},"#",-1)),A[51]||(A[51]=I()),i("a",K,[E(R)]),A[52]||(A[52]=I(".drone.yml测试"))]),A[72]||(A[72]=f(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kind: pipeline
name: default
steps:
  - name: Hello World
    image: centos
    commands:
      - <span class="token builtin class-name">echo</span> Hello World

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const Q=v(t,[["render",U],["__file","docker-gitea-drone.html.vue"]]);export{Q as default};