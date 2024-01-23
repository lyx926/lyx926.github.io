import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as t,b as n,d as s,e as a,a as i}from"./app-3TYQz3YH.js";const d={},r=n("h1",{id:"docker-compose指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose指南","aria-hidden":"true"},"#"),s(" Docker-compose指南")],-1),m=n("p",null,"本文是Docker Compose的一个快速指南。",-1),p={id:"什么是compose",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#什么是compose","aria-hidden":"true"},"#",-1),u={href:"https://lyx926.gitee.io/posts/docker-compose/#%E4%BB%80%E4%B9%88%E6%98%AFcompose",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。",-1),k={id:"compose-使用的三个步骤",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#compose-使用的三个步骤","aria-hidden":"true"},"#",-1),_={href:"https://lyx926.gitee.io/posts/docker-compose/#compose-%E4%BD%BF%E7%94%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4",target:"_blank",rel:"noopener noreferrer"},g=n("blockquote",null,[n("p",null,"使用 Dockerfile 定义应用程序的环境。")],-1),f=n("blockquote",null,[n("p",null,"使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行。")],-1),E=n("blockquote",null,[n("p",null,"最后，执行 docker-compose up 命令来启动并运行整个应用程序。")],-1),y={id:"portainer-ce-例子",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#portainer-ce-例子","aria-hidden":"true"},"#",-1),q={href:"https://lyx926.gitee.io/posts/docker-compose/#portainer-ce-%E4%BE%8B%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://documentation.portainer.io/",target:"_blank",rel:"noopener noreferrer"},B={id:"demo",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#",-1),C={href:"https://lyx926.gitee.io/posts/docker-compose/#demo",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,"您可以先试用公共演示实例:http://demo.portainer.io/",-1),N=n("ul",null,[n("li",null,"username: admin"),n("li",null,"password: tryportainer")],-1),M={id:"创建docker-compose-yml",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#创建docker-compose-yml","aria-hidden":"true"},"#",-1),L={href:"https://lyx926.gitee.io/posts/docker-compose/#%E5%88%9B%E5%BB%BAdocker-composeyml",target:"_blank",rel:"noopener noreferrer"},P=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3.7&#39;</span>
services:
  portainer:
    image: portainer/portainer-ce:alpine
    container_name: portainer
    command: <span class="token parameter variable">-H</span> unix:///var/run/docker.sock
    ports:
      - <span class="token string">&quot;9000:9000&quot;</span>
    volumes:
      - <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span>
      - <span class="token string">&quot;./portainer_data:/data&quot;</span>
    restart: always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={id:"用docker-compose进行部署",tabindex:"-1"},H=n("a",{class:"header-anchor",href:"#用docker-compose进行部署","aria-hidden":"true"},"#",-1),O={href:"https://lyx926.gitee.io/posts/docker-compose/#%E7%94%A8docker-compose%E8%BF%9B%E8%A1%8C%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},T=i(`<p>部署此设置时，web界面将在端口9000上可用 (e.g. http://localhost:9000).</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
Starting portainer <span class="token punctuation">..</span>. <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),R={id:"期的结果",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#期的结果","aria-hidden":"true"},"#",-1),G={href:"https://lyx926.gitee.io/posts/docker-compose/#%E6%9C%9F%E7%9A%84%E7%BB%93%E6%9E%9C",target:"_blank",rel:"noopener noreferrer"},z={id:"检查容器是否运行",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#检查容器是否运行","aria-hidden":"true"},"#",-1),$={href:"https://lyx926.gitee.io/posts/docker-compose/#%E6%A3%80%E6%9F%A5%E5%AE%B9%E5%99%A8%E6%98%AF%E5%90%A6%E8%BF%90%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"},K=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE                           COMMAND                  CREATED          STATUS                          PORTS                                                                                  NAMES
860311c00e62   portainer/portainer-ce:alpine   <span class="token string">&quot;/portainer -H unix:…&quot;</span>   <span class="token number">54</span> seconds ago   Up <span class="token number">53</span> seconds                   <span class="token number">8000</span>/tcp, <span class="token number">0.0</span>.0.0:9000-<span class="token operator">&gt;</span><span class="token number">9000</span>/tcp, :::9000-<span class="token operator">&gt;</span><span class="token number">9000</span>/tcp                                    portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在您的网络浏览器中导航到“http://localhost:9000”以访问portainer web界面并创建一个帐户。</p>`,2),Y={id:"用以下工具将容器停住",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#用以下工具将容器停住","aria-hidden":"true"},"#",-1),X={href:"https://lyx926.gitee.io/posts/docker-compose/#%E7%94%A8%E4%BB%A5%E4%B8%8B%E5%B7%A5%E5%85%B7%E5%B0%86%E5%AE%B9%E5%99%A8%E5%81%9C%E4%BD%8F",target:"_blank",rel:"noopener noreferrer"},J=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> compose down
<span class="token comment"># 删除所有数据运行的步骤:</span>
$ <span class="token function">docker</span> compose down <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q={id:"参考资料",tabindex:"-1"},W=n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#",-1),Z={href:"https://lyx926.gitee.io/posts/docker-compose/#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://docs.docker.com/compose/reference/overview/",target:"_blank",rel:"noopener noreferrer"},sn={id:"docker-compose-yml的详细解释与说明",tabindex:"-1"},en=n("a",{class:"header-anchor",href:"#docker-compose-yml的详细解释与说明","aria-hidden":"true"},"#",-1),an={href:"https://lyx926.gitee.io/posts/docker-compose/#docker-composeyml%E7%9A%84%E8%AF%A6%E7%BB%86%E8%A7%A3%E9%87%8A%E4%B8%8E%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},ln={id:"_1主要配制",tabindex:"-1"},on=n("a",{class:"header-anchor",href:"#_1主要配制","aria-hidden":"true"},"#",-1),cn={href:"https://lyx926.gitee.io/posts/docker-compose/#1%E4%B8%BB%E8%A6%81%E9%85%8D%E5%88%B6",target:"_blank",rel:"noopener noreferrer"},tn=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version <span class="token comment">#定义了版本信息，这个定义关乎与docker的兼容性，Compose 文件格式有3个版本,分别为1, 2.x 和 3.x,目前主流的为 3.x 其支持 docker 1.13.0 及其以上的版本</span>

services <span class="token comment">#定义了服务的配置信息，包含应用于该服务启动的每个容器的配置</span>

networks <span class="token comment">#定义了网络信息，提供给 services 中的 具体容器使用，类似于命令行的 docker network create</span>

volumes <span class="token comment">#定义了卷信息，提供给 services 中的 具体容器使用，类似于命令行的 docker volume create</span>

ports <span class="token comment">#建立宿主机和容器之间的端口映射关系,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),dn={id:"_2所有配制详解",tabindex:"-1"},rn=n("a",{class:"header-anchor",href:"#_2所有配制详解","aria-hidden":"true"},"#",-1),mn={href:"https://lyx926.gitee.io/posts/docker-compose/#2%E6%89%80%E6%9C%89%E9%85%8D%E5%88%B6%E8%AF%A6%E8%A7%A3",target:"_blank",rel:"noopener noreferrer"},pn=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version           <span class="token comment"># 指定 compose 文件的版本</span>
    services          <span class="token comment"># 定义所有的 service 信息, services 下面的第一级别的 key 既是一个 service 的名称</span>

        build                 <span class="token comment"># 指定包含构建上下文的路径, 或作为一个对象，该对象具有 context 和指定的 dockerfile 文件以及 args 参数值</span>
            context               <span class="token comment"># context: 指定 Dockerfile 文件所在的路径</span>
            dockerfile            <span class="token comment"># dockerfile: 指定 context 指定的目录下面的 Dockerfile 的名称(默认为 Dockerfile)</span>
            args                  <span class="token comment"># args: Dockerfile 在 build 过程中需要的参数 (等同于 docker container build --build-arg 的作用)</span>
            cache_from            <span class="token comment"># v3.2中新增的参数, 指定缓存的镜像列表 (等同于 docker container build --cache_from 的作用)</span>
            labels                <span class="token comment"># v3.3中新增的参数, 设置镜像的元数据 (等同于 docker container build --labels 的作用)</span>
            shm_size              <span class="token comment"># v3.5中新增的参数, 设置容器 /dev/shm 分区的大小 (等同于 docker container build --shm-size 的作用)</span>

        <span class="token builtin class-name">command</span>               <span class="token comment"># 覆盖容器启动后默认执行的命令, 支持 shell 格式和 [] 格式</span>

        configs               <span class="token comment"># 不知道怎么用</span>

        cgroup_parent         <span class="token comment"># 不知道怎么用</span>

        container_name        <span class="token comment"># 指定容器的名称 (等同于 docker run --name 的作用)</span>

        credential_spec       <span class="token comment"># 不知道怎么用</span>

        deploy                <span class="token comment"># v3 版本以上, 指定与部署和运行服务相关的配置, deploy 部分是 docker stack 使用的, docker stack 依赖 docker swarm</span>
            endpoint_mode         <span class="token comment"># v3.3 版本中新增的功能, 指定服务暴露的方式</span>
                vip                   <span class="token comment"># Docker 为该服务分配了一个虚拟 IP(VIP), 作为客户端的访问服务的地址</span>
                dnsrr                 <span class="token comment"># DNS轮询, Docker 为该服务设置 DNS 条目, 使得服务名称的 DNS 查询返回一个 IP 地址列表, 客户端直接访问其中的一个地址</span>
            labels                <span class="token comment"># 指定服务的标签，这些标签仅在服务上设置</span>
            mode                  <span class="token comment"># 指定 deploy 的模式</span>
                global                <span class="token comment"># 每个集群节点都只有一个容器</span>
                replicated            <span class="token comment"># 用户可以指定集群中容器的数量(默认)</span>
            placement             <span class="token comment"># 不知道怎么用</span>
            replicas              <span class="token comment"># deploy 的 mode 为 replicated 时, 指定容器副本的数量</span>
            resources             <span class="token comment"># 资源限制</span>
                limits                <span class="token comment"># 设置容器的资源限制</span>
                    cpus: <span class="token string">&quot;0.5&quot;</span>           <span class="token comment"># 设置该容器最多只能使用 50% 的 CPU </span>
                    memory: 50M           <span class="token comment"># 设置该容器最多只能使用 50M 的内存空间 </span>
                reservations          <span class="token comment"># 设置为容器预留的系统资源(随时可用)</span>
                    cpus: <span class="token string">&quot;0.2&quot;</span>           <span class="token comment"># 为该容器保留 20% 的 CPU</span>
                    memory: 20M           <span class="token comment"># 为该容器保留 20M 的内存空间</span>
            restart_policy        <span class="token comment"># 定义容器重启策略, 用于代替 restart 参数</span>
                condition             <span class="token comment"># 定义容器重启策略(接受三个参数)</span>
                    none                  <span class="token comment"># 不尝试重启</span>
                    on-failure            <span class="token comment"># 只有当容器内部应用程序出现问题才会重启</span>
                    any                   <span class="token comment"># 无论如何都会尝试重启(默认)</span>
                delay                 <span class="token comment"># 尝试重启的间隔时间(默认为 0s)</span>
                max_attempts          <span class="token comment"># 尝试重启次数(默认一直尝试重启)</span>
                window                <span class="token comment"># 检查重启是否成功之前的等待时间(即如果容器启动了, 隔多少秒之后去检测容器是否正常, 默认 0s)</span>
            update_config         <span class="token comment"># 用于配置滚动更新配置</span>
                parallelism           <span class="token comment"># 一次性更新的容器数量</span>
                delay                 <span class="token comment"># 更新一组容器之间的间隔时间</span>
                failure_action        <span class="token comment"># 定义更新失败的策略</span>
                    <span class="token builtin class-name">continue</span>              <span class="token comment"># 继续更新</span>
                    rollback              <span class="token comment"># 回滚更新</span>
                    pause                 <span class="token comment"># 暂停更新(默认)</span>
                monitor               <span class="token comment"># 每次更新后的持续时间以监视更新是否失败(单位: ns|us|ms|s|m|h) (默认为0)</span>
                max_failure_ratio     <span class="token comment"># 回滚期间容忍的失败率(默认值为0)</span>
                order                 <span class="token comment"># v3.4 版本中新增的参数, 回滚期间的操作顺序</span>
                    stop-first            <span class="token comment">#旧任务在启动新任务之前停止(默认)</span>
                    start-first           <span class="token comment">#首先启动新任务, 并且正在运行的任务暂时重叠</span>
            rollback_config       <span class="token comment"># v3.7 版本中新增的参数, 用于定义在 update_config 更新失败的回滚策略</span>
                parallelism           <span class="token comment"># 一次回滚的容器数, 如果设置为0, 则所有容器同时回滚</span>
                delay                 <span class="token comment"># 每个组回滚之间的时间间隔(默认为0)</span>
                failure_action        <span class="token comment"># 定义回滚失败的策略</span>
                    <span class="token builtin class-name">continue</span>              <span class="token comment"># 继续回滚</span>
                    pause                 <span class="token comment"># 暂停回滚</span>
                monitor               <span class="token comment"># 每次回滚任务后的持续时间以监视失败(单位: ns|us|ms|s|m|h) (默认为0)</span>
                max_failure_ratio     <span class="token comment"># 回滚期间容忍的失败率(默认值0)</span>
                order                 <span class="token comment"># 回滚期间的操作顺序</span>
                    stop-first            <span class="token comment"># 旧任务在启动新任务之前停止(默认)</span>
                    start-first           <span class="token comment"># 首先启动新任务, 并且正在运行的任务暂时重叠</span>

            注意：
                支持 <span class="token function">docker-compose</span> up 和 <span class="token function">docker-compose</span> run 但不支持 <span class="token function">docker</span> stack deploy 的子选项
                security_opt  container_name  devices  tmpfs  stop_signal  links    cgroup_parent
                network_mode  external_links  restart  build  userns_mode  sysctls

        devices               <span class="token comment"># 指定设备映射列表 (等同于 docker run --device 的作用)</span>

        depends_on            <span class="token comment"># 定义容器启动顺序 (此选项解决了容器之间的依赖关系， 此选项在 v3 版本中 使用 swarm 部署时将忽略该选项)</span>
            示例：
                <span class="token function">docker-compose</span> up 以依赖顺序启动服务，下面例子中 redis 和 db 服务在 web 启动前启动
                默认情况下使用 <span class="token function">docker-compose</span> up web 这样的方式启动 web 服务时，也会启动 redis 和 db 两个服务，因为在配置文件中定义了依赖关系

                version: <span class="token string">&#39;3&#39;</span>
                services:
                    web:
                        build: <span class="token builtin class-name">.</span>
                        depends_on:
                            - db      
                            - redis  
                    redis:
                        image: redis
                    db:
                        image: postgres                             

        dns                   <span class="token comment"># 设置 DNS 地址(等同于 docker run --dns 的作用)</span>

        dns_search            <span class="token comment"># 设置 DNS 搜索域(等同于 docker run --dns-search 的作用)</span>

        tmpfs                 <span class="token comment"># v2 版本以上, 挂载目录到容器中, 作为容器的临时文件系统(等同于 docker run --tmpfs 的作用, 在使用 swarm 部署时将忽略该选项)</span>

        entrypoint            <span class="token comment"># 覆盖容器的默认 entrypoint 指令 (等同于 docker run --entrypoint 的作用)</span>

        env_file              <span class="token comment"># 从指定文件中读取变量设置为容器中的环境变量, 可以是单个值或者一个文件列表, 如果多个文件中的变量重名则后面的变量覆盖前面的变量, environment 的值覆盖 env_file 的值</span>
            文件格式：
                <span class="token assign-left variable">RACK_ENV</span><span class="token operator">=</span>development 

        environment           <span class="token comment"># 设置环境变量， environment 的值可以覆盖 env_file 的值 (等同于 docker run --env 的作用)</span>

        expose                <span class="token comment"># 暴露端口, 但是不能和宿主机建立映射关系, 类似于 Dockerfile 的 EXPOSE 指令</span>

        external_links        <span class="token comment"># 连接不在 docker-compose.yml 中定义的容器或者不在 compose 管理的容器(docker run 启动的容器, 在 v3 版本中使用 swarm 部署时将忽略该选项)</span>

        extra_hosts           <span class="token comment"># 添加 host 记录到容器中的 /etc/hosts 中 (等同于 docker run --add-host 的作用)</span>

        healthcheck           <span class="token comment"># v2.1 以上版本, 定义容器健康状态检查, 类似于 Dockerfile 的 HEALTHCHECK 指令</span>
            <span class="token builtin class-name">test</span>                  <span class="token comment"># 检查容器检查状态的命令, 该选项必须是一个字符串或者列表, 第一项必须是 NONE, CMD 或 CMD-SHELL, 如果其是一个字符串则相当于 CMD-SHELL 加该字符串</span>
                NONE                  <span class="token comment"># 禁用容器的健康状态检测</span>
                CMD                   <span class="token comment"># test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]</span>
                CMD-<span class="token environment constant">SHELL</span>             <span class="token comment"># test: [&quot;CMD-SHELL&quot;, &quot;curl -f http://localhost || exit 1&quot;] 或者　test: curl -f https://localhost || exit 1</span>
            interval: 1m30s       <span class="token comment"># 每次检查之间的间隔时间</span>
            timeout: 10s          <span class="token comment"># 运行命令的超时时间</span>
            retries: <span class="token number">3</span>            <span class="token comment"># 重试次数</span>
            start_period: 40s     <span class="token comment"># v3.4 以上新增的选项, 定义容器启动时间间隔</span>
            disable: <span class="token boolean">true</span>         <span class="token comment"># true 或 false, 表示是否禁用健康状态检测和　test: NONE 相同</span>

        image                 <span class="token comment"># 指定 docker 镜像, 可以是远程仓库镜像、本地镜像</span>

        init                  <span class="token comment"># v3.7 中新增的参数, true 或 false 表示是否在容器中运行一个 init, 它接收信号并传递给进程</span>

        isolation             <span class="token comment"># 隔离容器技术, 在 Linux 中仅支持 default 值</span>

        labels                <span class="token comment"># 使用 Docker 标签将元数据添加到容器, 与 Dockerfile 中的 LABELS 类似</span>

        links                 <span class="token comment"># 链接到其它服务中的容器, 该选项是 docker 历史遗留的选项, 目前已被用户自定义网络名称空间取代, 最终有可能被废弃 (在使用 swarm 部署时将忽略该选项)</span>

        logging               <span class="token comment"># 设置容器日志服务</span>
            driver                <span class="token comment"># 指定日志记录驱动程序, 默认 json-file (等同于 docker run --log-driver 的作用)</span>
            options               <span class="token comment"># 指定日志的相关参数 (等同于 docker run --log-opt 的作用)</span>
                max-size              <span class="token comment"># 设置单个日志文件的大小, 当到达这个值后会进行日志滚动操作</span>
                max-file              <span class="token comment"># 日志文件保留的数量</span>

        network_mode          <span class="token comment"># 指定网络模式 (等同于 docker run --net 的作用, 在使用 swarm 部署时将忽略该选项)         </span>

        networks              <span class="token comment"># 将容器加入指定网络 (等同于 docker network connect 的作用), networks 可以位于 compose 文件顶级键和 services 键的二级键</span>
            aliases               <span class="token comment"># 同一网络上的容器可以使用服务名称或别名连接到其中一个服务的容器</span>
            ipv4_address      <span class="token comment"># IP V4 格式</span>
            ipv6_address      <span class="token comment"># IP V6 格式</span>

            示例:
                version: <span class="token string">&#39;3.7&#39;</span>
                services: 
                    test: 
                        image: nginx:1.14-alpine
                        container_name: mynginx
                        command: <span class="token function">ifconfig</span>
                        networks: 
                            app_net:                                <span class="token comment"># 调用下面 networks 定义的 app_net 网络</span>
                            ipv4_address: <span class="token number">172.16</span>.238.10
                networks:
                    app_net:
                        driver: bridge
                        ipam:
                            driver: default
                            config:
                                - subnet: <span class="token number">172.16</span>.238.0/24

        pid: <span class="token string">&#39;host&#39;</span>           <span class="token comment"># 共享宿主机的 进程空间(PID)</span>

        ports                 <span class="token comment"># 建立宿主机和容器之间的端口映射关系, ports 支持两种语法格式</span>
            SHORT 语法格式示例:
                - <span class="token string">&quot;3000&quot;</span>                            <span class="token comment"># 暴露容器的 3000 端口, 宿主机的端口由 docker 随机映射一个没有被占用的端口</span>
                - <span class="token string">&quot;3000-3005&quot;</span>                       <span class="token comment"># 暴露容器的 3000 到 3005 端口, 宿主机的端口由 docker 随机映射没有被占用的端口</span>
                - <span class="token string">&quot;8000:8000&quot;</span>                       <span class="token comment"># 容器的 8000 端口和宿主机的 8000 端口建立映射关系</span>
                - <span class="token string">&quot;9090-9091:8080-8081&quot;</span>
                - <span class="token string">&quot;127.0.0.1:8001:8001&quot;</span>             <span class="token comment"># 指定映射宿主机的指定地址的</span>
                - <span class="token string">&quot;127.0.0.1:5000-5010:5000-5010&quot;</span>   
                - <span class="token string">&quot;6060:6060/udp&quot;</span>                   <span class="token comment"># 指定协议</span>

            LONG 语法格式示例:<span class="token punctuation">(</span>v3.2 新增的语法格式<span class="token punctuation">)</span>
                ports:
                    - target: <span class="token number">80</span>                    <span class="token comment"># 容器端口</span>
                      published: <span class="token number">8080</span>               <span class="token comment"># 宿主机端口</span>
                      protocol: tcp                 <span class="token comment"># 协议类型</span>
                      mode: <span class="token function">host</span>                    <span class="token comment"># host 在每个节点上发布主机端口,  ingress 对于群模式端口进行负载均衡</span>

        secrets               <span class="token comment"># 不知道怎么用</span>

        security_opt          <span class="token comment"># 为每个容器覆盖默认的标签 (在使用 swarm 部署时将忽略该选项)</span>

        stop_grace_period     <span class="token comment"># 指定在发送了 SIGTERM 信号之后, 容器等待多少秒之后退出(默认 10s)</span>

        stop_signal           <span class="token comment"># 指定停止容器发送的信号 (默认为 SIGTERM 相当于 kill PID; SIGKILL 相当于 kill -9 PID; 在使用 swarm 部署时将忽略该选项)</span>

        sysctls               <span class="token comment"># 设置容器中的内核参数 (在使用 swarm 部署时将忽略该选项)</span>

        ulimits               <span class="token comment"># 设置容器的 limit</span>

        userns_mode           <span class="token comment"># 如果Docker守护程序配置了用户名称空间, 则禁用此服务的用户名称空间 (在使用 swarm 部署时将忽略该选项)</span>

        volumes               <span class="token comment"># 定义容器和宿主机的卷映射关系, 其和 networks 一样可以位于 services 键的二级键和 compose 顶级键, 如果需要跨服务间使用则在顶级键定义, 在 services 中引用</span>
            SHORT 语法格式示例:
                volumes:
                    - /var/lib/mysql                <span class="token comment"># 映射容器内的 /var/lib/mysql 到宿主机的一个随机目录中</span>
                    - /opt/data:/var/lib/mysql      <span class="token comment"># 映射容器内的 /var/lib/mysql 到宿主机的 /opt/data</span>
                    - ./cache:/tmp/cache            <span class="token comment"># 映射容器内的 /var/lib/mysql 到宿主机 compose 文件所在的位置</span>
                    - ~/configs:/etc/configs/:ro    <span class="token comment"># 映射容器宿主机的目录到容器中去, 权限只读</span>
                    - datavolume:/var/lib/mysql     <span class="token comment"># datavolume 为 volumes 顶级键定义的目录, 在此处直接调用</span>

            LONG 语法格式示例:<span class="token punctuation">(</span>v3.2 新增的语法格式<span class="token punctuation">)</span>
                version: <span class="token string">&quot;3.2&quot;</span>
                services:
                    web:
                        image: nginx:alpine
                        ports:
                            - <span class="token string">&quot;80:80&quot;</span>
                        volumes:
                            - type: volume                  <span class="token comment"># mount 的类型, 必须是 bind、volume 或 tmpfs</span>
                                source: mydata              <span class="token comment"># 宿主机目录</span>
                                target: /data               <span class="token comment"># 容器目录</span>
                                volume:                     <span class="token comment"># 配置额外的选项, 其 key 必须和 type 的值相同</span>
                                    nocopy: <span class="token boolean">true</span>                <span class="token comment"># volume 额外的选项, 在创建卷时禁用从容器复制数据</span>
                            - type: <span class="token builtin class-name">bind</span>                    <span class="token comment"># volume 模式只指定容器路径即可, 宿主机路径随机生成; bind 需要指定容器和数据机的映射路径</span>
                                source: ./static
                                target: /opt/app/static
                                read_only: <span class="token boolean">true</span>             <span class="token comment"># 设置文件系统为只读文件系统</span>
                volumes:
                    mydata:                                 <span class="token comment"># 定义在 volume, 可在所有服务中调用</span>

        restart               <span class="token comment"># 定义容器重启策略(在使用 swarm 部署时将忽略该选项, 在 swarm 使用 restart_policy 代替 restart)</span>
            no                    <span class="token comment"># 禁止自动重启容器(默认)</span>
            always                <span class="token comment"># 无论如何容器都会重启</span>
            on-failure            <span class="token comment"># 当出现 on-failure 报错时, 容器重新启动</span>

        其他选项：
            domainname, hostname, ipc, mac_address, privileged, read_only, shm_size, stdin_open, tty, user, working_dir
            上面这些选项都只接受单个值和 <span class="token function">docker</span> run 的对应参数类似

        对于值为时间的可接受的值：
            <span class="token number">2</span>.5s
            10s
            1m30s
            2h32m
            5h34m56s
            时间单位: us, ms, s, m， h
        对于值为大小的可接受的值：
            2b
            1024kb
            2048k
            300m
            1gb
            单位: b, k, m, g 或者 kb, mb, gb
    networks          <span class="token comment"># 定义 networks 信息</span>
        driver                <span class="token comment"># 指定网络模式, 大多数情况下, 它 bridge 于单个主机和 overlay Swarm 上</span>
            bridge                <span class="token comment"># Docker 默认使用 bridge 连接单个主机上的网络</span>
            overlay               <span class="token comment"># overlay 驱动程序创建一个跨多个节点命名的网络</span>
            <span class="token function">host</span>                  <span class="token comment"># 共享主机网络名称空间(等同于 docker run --net=host)</span>
            none                  <span class="token comment"># 等同于 docker run --net=none</span>
        driver_opts           <span class="token comment"># v3.2以上版本, 传递给驱动程序的参数, 这些参数取决于驱动程序</span>
        attachable            <span class="token comment"># driver 为 overlay 时使用, 如果设置为 true 则除了服务之外，独立容器也可以附加到该网络; 如果独立容器连接到该网络，则它可以与其他 Docker 守护进程连接到的该网络的服务和独立容器进行通信</span>
        ipam                  <span class="token comment"># 自定义 IPAM 配置. 这是一个具有多个属性的对象, 每个属性都是可选的</span>
            driver                <span class="token comment"># IPAM 驱动程序, bridge 或者 default</span>
            config                <span class="token comment"># 配置项</span>
                subnet                <span class="token comment"># CIDR格式的子网，表示该网络的网段</span>
        external              <span class="token comment"># 外部网络, 如果设置为 true 则 docker-compose up 不会尝试创建它, 如果它不存在则引发错误</span>
        name                  <span class="token comment"># v3.5 以上版本, 为此网络设置名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function vn(un,bn){const e=o("ExternalLinkIcon");return c(),t("div",null,[r,m,n("h2",p,[v,s(),n("a",u,[a(e)]),s("什么是Compose？")]),b,n("h2",k,[h,s(),n("a",_,[a(e)]),s("Compose 使用的三个步骤")]),g,f,E,n("h2",y,[x,s(),n("a",q,[a(e)]),s("Portainer (CE) 例子")]),n("p",null,[s("此示例提供了使用的基本设置 "),n("a",A,[s("Portainer"),a(e)]),s(". 关于如何自定义安装和合成文件的更多详细信息，请参见 "),n("a",w,[s("portainer documentation"),a(e)]),s(".")]),n("h3",B,[D,s(),n("a",C,[a(e)]),s("Demo")]),S,N,n("h3",M,[I,s(),n("a",L,[a(e)]),s("创建docker-compose.yml")]),P,n("h3",F,[H,s(),n("a",O,[a(e)]),s("用docker compose进行部署")]),T,n("h3",R,[V,s(),n("a",G,[a(e)]),s("期的结果")]),n("h4",z,[U,s(),n("a",$,[a(e)]),s("检查容器是否运行:")]),K,n("h4",Y,[j,s(),n("a",X,[a(e)]),s("用以下工具将容器停住")]),J,n("h3",Q,[W,s(),n("a",Z,[a(e)]),s("参考资料")]),n("ul",null,[n("li",null,[n("a",nn,[s("官方文档"),a(e)])])]),n("h3",sn,[en,s(),n("a",an,[a(e)]),s("docker-compose.yml的详细解释与说明")]),n("h4",ln,[on,s(),n("a",cn,[a(e)]),s("1主要配制")]),tn,n("h4",dn,[rn,s(),n("a",mn,[a(e)]),s("2所有配制详解")]),pn])}const _n=l(d,[["render",vn],["__file","docker-compose.html.vue"]]);export{_n as default};
