import{_ as f}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as v,o as n,c as e,b as A,d as i,e as R,a as E}from"./app-3TYQz3YH.js";const z={},t=A("h1",{id:"docker-gitea-drone指南",tabindex:"-1"},[A("a",{class:"header-anchor",href:"#docker-gitea-drone指南","aria-hidden":"true"},"#"),i(" Docker-Gitea+Drone指南")],-1),r=A("p",null,"本文是Docker-Gitea+Drone的一个快速指南。",-1),P={id:"什么是gitea",tabindex:"-1"},b=A("a",{class:"header-anchor",href:"#什么是gitea","aria-hidden":"true"},"#",-1),d={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E4%BB%80%E4%B9%88%E6%98%AFgitea",target:"_blank",rel:"noopener noreferrer"},u=A("p",null,"Gitea 是一个自己托管的Git服务程序。他和GitHub, Bitbucket or Gitlab等比较类似。他是从 Gogs 发展而来，不过我们已经Fork并且命名为Gitea。对于我们Fork的原因可以看。",-1),X={href:"https://gitea.io/",target:"_blank",rel:"noopener noreferrer"},c={id:"什么是drone",tabindex:"-1"},O=A("a",{class:"header-anchor",href:"#什么是drone","aria-hidden":"true"},"#",-1),a={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E4%BB%80%E4%B9%88%E6%98%AFdrone",target:"_blank",rel:"noopener noreferrer"},s=A("p",null,"Drone by Harness™ 是一个现代持续集成平台，使忙碌的团队能够使用强大的云原生管道引擎自动执行其构建、测试和发布工作流。",-1),j={href:"https://www.drone.io/",target:"_blank",rel:"noopener noreferrer"},m={id:"开始配置",tabindex:"-1"},Z=A("a",{class:"header-anchor",href:"#开始配置","aria-hidden":"true"},"#",-1),l={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%BC%80%E5%A7%8B%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},H={id:"准备ubuntu一台配置docker-compose具体可以看docker-compose指南篇章",tabindex:"-1"},x=A("a",{class:"header-anchor",href:"#准备ubuntu一台配置docker-compose具体可以看docker-compose指南篇章","aria-hidden":"true"},"#",-1),p={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%87%86%E5%A4%87ubuntu%E4%B8%80%E5%8F%B0%E9%85%8D%E7%BD%AEdocker-compose%E5%85%B7%E4%BD%93%E5%8F%AF%E4%BB%A5%E7%9C%8Bdocker-compose%E6%8C%87%E5%8D%97%E7%AF%87%E7%AB%A0",target:"_blank",rel:"noopener noreferrer"},y=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),bA={id:"docker-compose-yml",tabindex:"-1"},dA=A("a",{class:"header-anchor",href:"#docker-compose-yml","aria-hidden":"true"},"#",-1),uA={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#docker-composeyml",target:"_blank",rel:"noopener noreferrer"},XA=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3.7&quot;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),cA={id:"修改-gitea-容器内的-conf-app-ini",tabindex:"-1"},OA=A("a",{class:"header-anchor",href:"#修改-gitea-容器内的-conf-app-ini","aria-hidden":"true"},"#",-1),aA={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E4%BF%AE%E6%94%B9-gitea-%E5%AE%B9%E5%99%A8%E5%86%85%E7%9A%84-confappini",target:"_blank",rel:"noopener noreferrer"},sA=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>webhook<span class="token punctuation">]</span>
ALLOWED_HOST_LIST <span class="token operator">=</span> *

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),jA={id:"创建共享密钥给drone-rpc-secret",tabindex:"-1"},mA=A("a",{class:"header-anchor",href:"#创建共享密钥给drone-rpc-secret","aria-hidden":"true"},"#",-1),ZA={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#%E5%88%9B%E5%BB%BA%E5%85%B1%E4%BA%AB%E5%AF%86%E9%92%A5%E7%BB%99drone_rpc_secret",target:"_blank",rel:"noopener noreferrer"},lA=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl rand <span class="token parameter variable">-hex</span> <span class="token number">16</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),HA={id:"drone-yml测试",tabindex:"-1"},xA=A("a",{class:"header-anchor",href:"#drone-yml测试","aria-hidden":"true"},"#",-1),pA={href:"https://lyx926.gitee.io/posts/docker-gitea+drone/#droneyml%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"},yA=E(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kind: pipeline
name: default
steps:
  - name: Hello World
    image: centos
    commands:
      - <span class="token builtin class-name">echo</span> Hello World

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function WA(NA,VA){const I=v("ExternalLinkIcon");return n(),e("div",null,[t,r,A("h2",P,[b,i(),A("a",d,[R(I)]),i("什么是Gitea？")]),u,A("ul",null,[A("li",null,[A("a",X,[i("官方文档"),R(I)])])]),A("h2",c,[O,i(),A("a",a,[R(I)]),i("什么是Drone？")]),s,A("ul",null,[A("li",null,[A("a",j,[i("官方文档"),R(I)])])]),A("h3",m,[Z,i(),A("a",l,[R(I)]),i("开始配置")]),A("h4",H,[x,i(),A("a",p,[R(I)]),i("准备Ubuntu一台配置docker compose具体可以看Docker-compose指南篇章")]),y,A("h4",W,[N,i(),A("a",V,[R(I)]),i("先上图")]),k,A("h4",L,[T,i(),A("a",q,[R(I)]),i("启动")]),G,A("h4",J,[w,i(),A("a",h,[R(I)]),i("ip:3000配置gitea")]),M,A("h4",S,[Y,i(),A("a",D,[R(I)]),i("配置OAuth2生成")]),o,C,A("h4",K,[U,i(),A("a",B,[R(I)]),i("配置.evn文件")]),g,F,Q,A("h4",_,[$,i(),A("a",AA,[R(I)]),i("ip:3080配置drone")]),iA,A("h4",IA,[RA,i(),A("a",EA,[R(I)]),i("创建test仓库配置webhook测试")]),fA,A("h3",vA,[nA,i(),A("a",eA,[R(I)]),i("通过Docker Compose快速搭建Gitea+Drone")]),A("h4",zA,[tA,i(),A("a",rA,[R(I)]),i(".env变量配置文件")]),PA,A("h4",bA,[dA,i(),A("a",uA,[R(I)]),i("docker-compose.yml")]),XA,A("h4",cA,[OA,i(),A("a",aA,[R(I)]),i("修改 Gitea 容器内的 conf/app.ini")]),sA,A("h4",jA,[mA,i(),A("a",ZA,[R(I)]),i("创建共享密钥给DRONE_RPC_SECRET")]),lA,A("h4",HA,[xA,i(),A("a",pA,[R(I)]),i(".drone.yml测试")]),yA])}const TA=f(z,[["render",WA],["__file","docker-gitea-drone.html.vue"]]);export{TA as default};