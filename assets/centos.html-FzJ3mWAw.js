import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-1ciKOjqT.js";const i={},l=e(`<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>待补充
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vi方向和退格失灵-etc-vim-vimrc-tiny" tabindex="-1"><a class="header-anchor" href="#vi方向和退格失灵-etc-vim-vimrc-tiny" aria-hidden="true">#</a> vi方向和退格失灵（/etc/vim/vimrc.tiny）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#打开配置文件</span>
<span class="token function">vi</span> /etc/vim/vimrc.tiny
<span class="token builtin class-name">set</span> nocompatible
<span class="token builtin class-name">set</span> <span class="token assign-left variable">backspace</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通用户sudo失败-etc-sudoers" tabindex="-1"><a class="header-anchor" href="#普通用户sudo失败-etc-sudoers" aria-hidden="true">#</a> 普通用户sudo失败（/etc/sudoers）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#切换到root用户下</span>
<span class="token function">chmod</span> u+w /etc/sudoers
<span class="token function">vi</span> /etc/sudoers
<span class="token comment">#找到这行 root ALL=(ALL) ALL,在他下面添加xxx ALL=(ALL) ALL (这里的xxx是你的用户名)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置网卡-etc-network-interface" tabindex="-1"><a class="header-anchor" href="#配置网卡-etc-network-interface" aria-hidden="true">#</a> 配置网卡（/etc/network/interface）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改网卡配置文件</span>
<span class="token function">vi</span> /etc/network/interface
<span class="token comment">#配置网卡eth0的IP地址</span>
<span class="token comment">#表示网卡随系统自动请</span>
auto eth0

<span class="token comment">#static  手工配置ip地址   dhcp是自动获取ip地址</span>
iface eth0 inet static  <span class="token comment">#表示网卡为静态ip地址</span>
address <span class="token number">192.168</span>.2.147   <span class="token comment">#表示设置ip地址</span>
netmask <span class="token number">255.255</span>.255.0   <span class="token comment">#表示子网掩码</span>
gateway <span class="token number">192.168</span>.2.1     <span class="token comment">#表示网关，不为了上网，可以不填，只用于局域网通信</span>

<span class="token comment">#配置dns</span>
<span class="token function">vi</span> /etc/resolv.conf
nameserver <span class="token number">8.8</span>.8.8
<span class="token comment">#重启网卡</span>
systemctl restart networking
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置apt源-etc-apt-sources-list" tabindex="-1"><a class="header-anchor" href="#配置apt源-etc-apt-sources-list" aria-hidden="true">#</a> 配置apt源（/etc/apt/sources.list）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置网络源</span>
<span class="token function">cat</span> /etc/issue
<span class="token comment">#查看系统版本</span>
<span class="token function">cat</span> /etc/issue
<span class="token comment">#备份</span>
<span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
<span class="token comment">#查找此版本的deb</span>
<span class="token comment">#赋值到配置文件中</span>
<span class="token function">nano</span> /etc/apt/sources.list

<span class="token comment">#配置本地源</span>
<span class="token comment">#1删除配置文件所有内容</span>
<span class="token comment">#2添加两个光驱，指定镜像文件</span>
<span class="token comment">#3重启</span>
<span class="token comment">#4apt-cdrom add</span>

<span class="token comment">#安装vim软件</span>
<span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>

<span class="token comment">#清除当前apt缓存</span>
<span class="token function">apt</span> clean
<span class="token comment">#加载当前配置文件到缓存</span>
<span class="token function">apt</span> update
<span class="token comment">#更新现有软件</span>
<span class="token function">apt</span> dist-upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装ssh服务-etc-ssh-sshd-config" tabindex="-1"><a class="header-anchor" href="#安装ssh服务-etc-ssh-sshd-config" aria-hidden="true">#</a> 安装ssh服务（/etc/ssh/sshd_config）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装ssh</span>
<span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">ssh</span>
<span class="token comment">#修改配置文件</span>
<span class="token function">vim</span> /etc/ssh/sshd_config
PermitRootLogin <span class="token function">yes</span>
<span class="token comment">#通过ssh远程软件远程登陆</span>
AllowUsers xxx@0.0.0.0/0 设置ssh限制用户登录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="免密登录例子" tabindex="-1"><a class="header-anchor" href="#免密登录例子" aria-hidden="true">#</a> 免密登录例子</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装SSH</span>
<span class="token comment">#仅允许client客户端进行ssh访问，其余所有主机的请求都应该拒绝</span>
<span class="token comment">#配置client只能在Chinaskill20用户环境下可以免秘钥登录，端口号为2222，并且拥有root控制权限</span>
<span class="token comment">#1.安装</span>
<span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">ssh</span>
<span class="token comment">#2.</span>
<span class="token function">vim</span> /etc/hosts.allow
 sshd:192.168.1.110:allow <span class="token comment">#只允许某一地址登陆</span>
<span class="token function">vim</span> /etc/hosts.deny
 sshd:ALL                  <span class="token comment">#开启白名单</span>
<span class="token function">vi</span> /etc/ssh/sshd_config 
    port                  <span class="token comment">#修改端口号</span>
    listenaddress         <span class="token comment">#设置需要监听的ip</span>
    pubkeyauthentication  <span class="token comment">#启用公钥认证，默认为yes</span>

<span class="token comment">#另一台计算机操作</span>
<span class="token comment">#3.用户操作</span>
 <span class="token comment">#创建用户</span>
 <span class="token function">groupadd</span> Chinaskill20
    <span class="token function">useradd</span> <span class="token parameter variable">-m</span> Chinaskill20 <span class="token parameter variable">-g</span> Chinaskill20 <span class="token parameter variable">-s</span> /bin/bash <span class="token parameter variable">-d</span> /home/Chinaskill20
    <span class="token function">passwd</span> Chinaskill20

<span class="token comment">#4.生成密钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa

ssh-copy-id root@192.168.1.107 <span class="token parameter variable">-p</span> <span class="token number">2222</span>
<span class="token comment">#5.以用户名免密钥登陆</span>
<span class="token function">ssh</span> root@192.168.1.107 <span class="token parameter variable">-p</span> <span class="token number">2222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gnome图形界面" tabindex="-1"><a class="header-anchor" href="#gnome图形界面" aria-hidden="true">#</a> GNOME图形界面</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1、安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> gnome <span class="token parameter variable">-y</span>
<span class="token comment">#设置成图形模式</span>
systemctl set-default graphical.target

<span class="token comment">#2、命令行页面切换</span>
<span class="token comment">#从桌面切换到命令行</span>
Ctrl+Alt+F6  /   Alt+F6
<span class="token comment">#从命令行切换到桌面</span>
init <span class="token number">5</span>

<span class="token comment">#3、root用户不能登陆问题</span>
<span class="token comment">#修改配置文件</span>
<span class="token function">vi</span> /etc/gdm3/daemon.conf
<span class="token comment">#在[security]下</span>
AllowRoot <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">#修改配置文件</span>
<span class="token function">vi</span> /etc/pam.d/gdm-password
<span class="token comment">#注释掉</span>
auth required pam_succeed_if.so user <span class="token operator">!=</span> root quiet_success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ntp时钟同步" tabindex="-1"><a class="header-anchor" href="#ntp时钟同步" aria-hidden="true">#</a> ntp时钟同步</h3><blockquote><p>需求 chrony为全网提供时间同步服务器； Server01、Server02、Server04、Client和Rserver应定期与其校正时间； 每隔1分钟自动校正一次时间。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> chrony

<span class="token comment">#修改配置</span>
<span class="token function">cp</span> /etc/chrony/chrony.conf /etc/chrony/chrony.conf.bak
<span class="token function">vim</span> /etc/chrony/chrony.conf
    server <span class="token number">192.168</span>.174.55    <span class="token comment">#服务器ip</span>
    allow <span class="token number">0.0</span>.0.0/0            <span class="token comment">#允许连接的ip</span>
    <span class="token builtin class-name">local</span> stratum <span class="token number">10</span>        <span class="token comment">#连接不到服务器ip使用本地时间同步</span>

 <span class="token comment">#开启ntp同步</span>
 timedatectl set-ntp <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装chrony和ntpdate</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> chrony  ntpdate

<span class="token comment">#修改配置</span>
<span class="token function">vim</span> /etc/chrony/chrony.conf
 <span class="token comment">#注释pool 2.debian.pool.ntp.org iburst</span>
 <span class="token comment">#添加chrony服务器ip</span>
 server  <span class="token number">192.168</span>.174.55 iburst

<span class="token comment">#开启ntp同步</span>
timedatectl set-ntp <span class="token function">yes</span>

<span class="token comment">#重启chrony服务器</span>
systemctl restart chrony

<span class="token comment">#添加定时任务  1分钟同步一次时间</span>
<span class="token function">vim</span> /etc/crontab 
 */1 * * * * root ntpdate <span class="token number">192.168</span>.174.55

<span class="token comment">#重启系统</span>
    rebootet-ntp <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#服务端</span>
root@debian:/var/www/html<span class="token comment"># chronyc clients</span>
Hostname                      NTP   Drop Int IntL Last     Cmd   Drop Int  Last
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token number">192.168</span>.174.55                 <span class="token number">11</span>      <span class="token number">0</span>   <span class="token number">6</span>   -    <span class="token number">40</span>       <span class="token number">0</span>      <span class="token number">0</span>   -     -
<span class="token number">192.168</span>.174.56                  <span class="token number">6</span>      <span class="token number">0</span>   <span class="token number">5</span>   -    <span class="token number">63</span>       <span class="token number">0</span>      <span class="token number">0</span>   -     -


<span class="token comment">#客户端</span>
root@debian:~<span class="token comment"># chronyc sources -V</span>
<span class="token number">210</span> Number of sources <span class="token operator">=</span> <span class="token number">1</span>
MS Name/IP address         Stratum Poll Reach LastRx Last sample               
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
^* <span class="token number">192.168</span>.174.55               <span class="token number">11</span>   <span class="token number">6</span>   <span class="token number">177</span>    <span class="token number">57</span>    -12us<span class="token punctuation">[</span>  -51us<span class="token punctuation">]</span> +/-   11ms   rebootet-ntp <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#客户端查看时间</span>
root@debian:~<span class="token comment"># date</span>
Tue 02 Mar <span class="token number">2021</span> 09:53:19 AM EST

<span class="token comment">#服务端修改时间</span>
root@debian:/var/www/html<span class="token comment"># date -s 12</span>
Tue 02 Mar <span class="token number">2021</span> <span class="token number">12</span>:00:00 PM EST

<span class="token comment">#客户端查看时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ftp文件服务器" tabindex="-1"><a class="header-anchor" href="#ftp文件服务器" aria-hidden="true">#</a> ftp文件服务器</h3><blockquote><p>需求 使用ftp服务上传网页代码。 使用vsftpd服务； ftp的上传文件根目录即为web服务器的网站根目录； ftp登录的用户为ftpuser；</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> vsftpd

<span class="token comment">#备份配置文件</span>
<span class="token function">cp</span> /etc/vsftpd.conf /etc/vsftpd.conf.bak
<span class="token comment">#写入配置文件</span>
<span class="token function">vim</span> /etc/vsftpd.conf
 <span class="token assign-left variable">write_enable</span><span class="token operator">=</span>YES  <span class="token comment">#允许执行写操作</span>
 <span class="token assign-left variable">chroot_local_user</span><span class="token operator">=</span>YES  <span class="token comment"># 所有用户被限制在ftp目录内，不能跨出该目录，除非有例外情况；</span>
 <span class="token assign-left variable">allow_writeable_chroot</span><span class="token operator">=</span>YES    <span class="token comment">#允许写入跟路径，这条不加容易出现 500</span>
 <span class="token assign-left variable">local_root</span><span class="token operator">=</span>/data/share/htdocs/skills <span class="token comment">## 设置ftp文件主目录（登陆ftp后显示的目录）</span>

<span class="token comment">#重启服务</span>
systemctl restart vsftpd

<span class="token comment">#创建根目录</span>
<span class="token function">mkdir</span> /data/share/htdocs/skills <span class="token parameter variable">-p</span>

<span class="token comment">#修改权限</span>
<span class="token function">chmod</span> <span class="token number">777</span> /data/share/htdocs/skills

<span class="token comment">#创建用户</span>
<span class="token function">useradd</span> <span class="token parameter variable">-m</span> ftpuser <span class="token parameter variable">-d</span> /home/ftpuser

<span class="token comment">#修改用户密码</span>
<span class="token function">passwd</span> ftpuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#客户机安装ftp</span>
<span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">ftp</span>

<span class="token comment">#登陆</span>
<span class="token function">ftp</span> <span class="token number">192.168</span>.174.55

<span class="token comment">#输入账号密码</span>
Name <span class="token punctuation">(</span><span class="token number">192.168</span>.174.55:root<span class="token punctuation">)</span>: ftpuser
<span class="token number">331</span> Please specify the password.
Password:
<span class="token number">230</span> Login successful

<span class="token comment">#新建文件测试</span>
 <span class="token function">mkdir</span> <span class="token number">1</span>


<span class="token comment">#在服务器查看是否新建成功</span>
<span class="token comment">#修改用户密码</span>
<span class="token function">passwd</span> ftpuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nfs文件共享" tabindex="-1"><a class="header-anchor" href="#nfs文件共享" aria-hidden="true">#</a> nfs文件共享</h3><blockquote><p>需求 共享/data/share目录； 用于存储server01主机的web数据； 仅允许service网段（10.1.100.与172.16.100.）访问该共享。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> nfs-common nfs-kernel-server

<span class="token comment">#创建共享文件夹</span>
<span class="token function">mkdir</span> /data/share <span class="token parameter variable">-p</span>
<span class="token comment">#修改配置文件</span>
<span class="token function">vi</span> /etc/exports 
/data/share     <span class="token number">10.1</span>.100.* <span class="token operator">||</span> <span class="token number">172.16</span>.100.*<span class="token punctuation">(</span>rw,sync,no_root_squash,insecure<span class="token punctuation">)</span>
<span class="token comment"># #共享目录信息，哪个网段可以访问，访问权限， sync同步，数据会先写入到NFS服务器内存中，no_root_squash 共享文件的所述主是远程访问的用户，允许非授权访问</span>
<span class="token comment">#重启服务</span>
systemctl restart nfs-kernel-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> nfs-common
<span class="token comment">#查看服务端共享出来的文件夹</span>
showmount <span class="token parameter variable">-e</span> <span class="token number">10.1</span>.100.128
<span class="token comment">#创建挂载目录</span>
<span class="token function">mkdir</span> /data/mynfs
<span class="token comment">#挂载</span>
<span class="token function">mount</span>  <span class="token number">10.1</span>.100.128:/data/share /data/mynfs
<span class="token comment">#开机自动挂载</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/bin/mount  192.168.31.228:/data/share /data/mynfs&quot;</span><span class="token operator">&gt;&gt;</span> /etc/rc.local <span class="token comment"># /etc/rc.local为开机自启文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="smba文件共享" tabindex="-1"><a class="header-anchor" href="#smba文件共享" aria-hidden="true">#</a> smba文件共享</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> samba  <span class="token comment">#安装samba服务</span>
<span class="token function">useradd</span> user          <span class="token comment">#新建一个用户，用于远程登录</span>
smbpasswd <span class="token parameter variable">-a</span> user     <span class="token comment">#将用户加入到samba组</span>
<span class="token function">mkdir</span> /home/share
<span class="token function">chmod</span> <span class="token number">777</span> /home/share/
<span class="token function">vi</span> /etc/samba/smb.conf 
 <span class="token punctuation">[</span>share<span class="token punctuation">]</span>
    comment <span class="token operator">=</span> share           <span class="token comment">#共享名称</span>
    <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/share          <span class="token comment">#共享路径</span>
    <span class="token assign-left variable">public</span><span class="token operator">=</span>yes                <span class="token comment">#允许用户访问</span>
    <span class="token assign-left variable">writable</span><span class="token operator">=</span>yes              <span class="token comment">#允许写入文件</span>
    directory mask <span class="token operator">=</span> 0775     <span class="token comment">#拥有创建目录权限（读写执行）</span>
    create mask <span class="token operator">=</span> 0775        <span class="token comment">#拥有创建文件权限</span>
    valid <span class="token function">users</span> <span class="token operator">=</span> user,root   <span class="token comment">#允许访问的用户</span>
    <span class="token function">write</span> list <span class="token operator">=</span> user         <span class="token comment">#允许可以写入目录的用户</span>
    browseable <span class="token operator">=</span> <span class="token function">yes</span>          <span class="token comment">#指定该共享目录可以浏览</span>
    available <span class="token operator">=</span> <span class="token function">yes</span>           <span class="token comment">#使用该共享资源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#windows配置</span>
<span class="token number">1</span>.windows关闭防火墙
<span class="token number">2</span>.windows开启所有网络发现，网络共享
<span class="token number">3</span>.在计算机管理里面新建用户
<span class="token number">3</span>.windows新建文件，右键共享，指定用户为新建用户

<span class="token comment">#Linux配置</span>
<span class="token number">1</span>.安装cifs-utils
<span class="token number">2</span>.mount.cifs //windows ip地址/Share /挂载位置 <span class="token parameter variable">-o</span> <span class="token assign-left variable">user</span><span class="token operator">=</span>用户名
输入密码查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> dhcp</h3><blockquote><p>需求 为客户端分配IP范围是10.10.100.1-10.10.100.50； DNS：按照实际需求配置DNS服务器地址选项； GATEWAY：按照实际需求配置网关地址选项。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1.将ip地址改成静态地址</span>
<span class="token comment">#2.安装服务</span>
<span class="token function">apt</span> <span class="token function">install</span>  isc-dhcp-server <span class="token parameter variable">-y</span>
<span class="token comment">#3查看网卡名字</span>
<span class="token function">ip</span> addr
<span class="token comment">#4修改监听配置</span>
<span class="token function">vim</span>  /etc/default/isc-dhcp-server
 <span class="token assign-left variable">INTERFACESv4</span><span class="token operator">=</span><span class="token string">&quot;ens33&quot;</span>  <span class="token comment">#ens33网卡名，使用ipv4</span>

<span class="token comment">#5备份配置文件</span>
<span class="token function">mv</span> /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.bak
<span class="token comment">#6.写入配置</span>
<span class="token function">vim</span> /etc/dhcp/dhcpd.conf<span class="token comment">#(格式在下方)</span>
ddns-update-style none<span class="token punctuation">;</span>
subnet <span class="token number">10.10</span>.100.0 netmask <span class="token number">255.255</span>.255.0 <span class="token punctuation">{</span>
 range <span class="token number">10.10</span>.100.1 <span class="token number">10.10</span>.100.50<span class="token punctuation">;</span>
 option subnet-mask <span class="token number">255.255</span>.255.0<span class="token punctuation">;</span>
 option routers <span class="token number">10.10</span>.100.2<span class="token punctuation">;</span>
 option domain-name <span class="token string">&quot;ChinaSkills.cn&quot;</span><span class="token punctuation">;</span>
 option domain-name-servers <span class="token number">114.114</span>.114.114<span class="token punctuation">;</span>
 default-lease-time <span class="token number">3600</span><span class="token punctuation">;</span>
 max-lease-time <span class="token number">7200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#7.重启服务</span>
systemctl restart isc-dhcp-server
<span class="token comment">#8.测试</span>
关掉虚拟机的dhcp功能，重新启动一台机器，地址为动态获取。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ddns-update-style none<span class="token punctuation">;</span>
subnet <span class="token variable">\${子网<span class="token operator">:</span>10.10.100.0}</span> netmask <span class="token variable">\${子网掩码<span class="token operator">:</span>255.255.255.0}</span><span class="token punctuation">{</span>
 range <span class="token variable">\${开始IP<span class="token operator">:</span>10.10.100.1}</span> <span class="token variable">\${10.10.100.50}</span><span class="token punctuation">;</span>
 option subnet-mask <span class="token variable">\${子网掩码<span class="token operator">:</span>255.255.255.0}</span><span class="token punctuation">;</span>
 option routers <span class="token variable">\${网关地址<span class="token operator">:</span>10.10.100.2}</span><span class="token punctuation">;</span>
 option domain-name <span class="token string">&quot;<span class="token variable">\${域名：dhcp.com}</span>&quot;</span><span class="token punctuation">;</span>
 option domain-name-servers <span class="token variable">\${DNS服务器IP地址：114.114.114.114}</span><span class="token punctuation">;</span>
 default-lease-time <span class="token number">3600</span><span class="token punctuation">;</span>
 max-lease-time <span class="token number">7200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raid5与lvm" tabindex="-1"><a class="header-anchor" href="#raid5与lvm" aria-hidden="true">#</a> raid5与lvm</h3><blockquote><p>需求 在虚拟机上添加 4 个 1G 的硬盘； 创建 raid5，其中一个作为热备盘, 设备名为md0; 将 md0 设置为 LVM，设备为/dev/vg01/lv01； 格式化为 ext4 文件系统; 开机自动挂载到/data 目录。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看四块磁盘是否存在</span>
root@debian:~<span class="token comment"># fdisk -l | grep sd</span>

<span class="token comment">#安装mdadm</span>
root@debian:~<span class="token comment">#  apt-get install mdadm</span>

<span class="token comment">#创建raid5</span>
root@debian:~<span class="token comment"># mdadm --create /dev/md0 --name=Nas --level=5 --raid-devices=3 --spare-devices=1 /dev/sd[bcde]</span>
mdadm: Defaulting to version <span class="token number">1.2</span> metadata
mdadm: array /dev/md0 started.

<span class="token comment">#安装lvm</span>
<span class="token function">apt-get</span> <span class="token function">install</span> lvm2

<span class="token comment">#创建卷组</span>
root@debian:~<span class="token comment"># vgcreate vg01 /dev/md0</span>
  Physical volume <span class="token string">&quot;/dev/md0&quot;</span> successfully created.
  Volume group <span class="token string">&quot;vg01&quot;</span> successfully created

<span class="token comment">#创建逻辑卷组</span>
root@debian:~<span class="token comment"># lvcreate -L 1G -n lv01 vg01</span>
  Logical volume <span class="token string">&quot;lv01&quot;</span> created.

<span class="token comment">#将逻辑卷格式化</span>
root@debian:~<span class="token comment"># mkfs.ext4 /dev/vg01/lv01</span>

<span class="token comment">#普通挂载</span>
root@debian:~<span class="token comment"># mount /dev/vg01/lv01 /data/</span>

<span class="token comment">#开机自动挂载</span>
root@debian:~<span class="token comment"># echo /dev/vg01/lv01 /data/  defaults 0 0 &gt;&gt; /etc/fstab</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防火墙配置" tabindex="-1"><a class="header-anchor" href="#防火墙配置" aria-hidden="true">#</a> 防火墙配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>默认阻挡所有流量
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">0.0</span>.0.0/0 <span class="token parameter variable">-j</span> REJECT

<span class="token comment">#192.168.10.0/24 禁止访问 192.168.1.0/24</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.10.0/24 <span class="token parameter variable">-d</span> <span class="token number">192.168</span>.1.0/24 <span class="token parameter variable">-j</span> REJECT
<span class="token comment">#上面的命令将丢掉所有来自 所有 网络的网络包，而将只允许192.168.1.0/24网络和10.1.100.0/24网络通过端口 22 的流入流量。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看规则</span>
iptables <span class="token parameter variable">-L</span>
<span class="token comment">#清除所有规则</span>
iptables <span class="token parameter variable">-F</span>
<span class="token comment">#保存规则</span>
iptables-save <span class="token operator">&gt;</span> /etc/iptables/rules.v4
<span class="token comment">#载入保存的规则</span>
iptables-restore <span class="token operator">&lt;</span>/etc/iptables/rules.v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作" aria-hidden="true">#</a> 其他操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改欢迎信息</span>
<span class="token comment">#vi /etc/motd</span>
<span class="token comment">#修改sshd配置文件，取消上次登陆提示信息</span>
PrintLastLog <span class="token operator">=</span> no
<span class="token comment">#修改环境变量</span>
<span class="token comment">#取主机名</span>
<span class="token environment constant">$HOSTNAME</span>  
<span class="token comment">#取当前系统时间</span>
<span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span>
<span class="token comment">#查看当前系统发行版本</span>
<span class="token function">uname</span> <span class="token parameter variable">-v</span>
<span class="token builtin class-name">source</span> /etc/os-release
VERSION_ID
ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启ssh" tabindex="-1"><a class="header-anchor" href="#开启ssh" aria-hidden="true">#</a> 开启ssh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#打开配置文件</span>
<span class="token function">vim</span> /etc/ssh/sshd_config
<span class="token comment">#修改参数</span>
PermitRootLogin <span class="token function">yes</span>
PasswordAuthentication <span class="token function">yes</span>
<span class="token comment">#重启服务</span>
systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h3><h4 id="_1更新软件包索引并安装软件包以允许使用-基于-https-的存储库" tabindex="-1"><a class="header-anchor" href="#_1更新软件包索引并安装软件包以允许使用-基于-https-的存储库" aria-hidden="true">#</a> 1更新软件包索引并安装软件包以允许使用 基于 HTTPS 的存储库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg <span class="token punctuation">\\</span>
    lsb-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2添加-docker-的官方-gpg-密钥" tabindex="-1"><a class="header-anchor" href="#_2添加-docker-的官方-gpg-密钥" aria-hidden="true">#</a> 2添加 Docker 的官方 GPG 密钥</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3使用以下命令设置存储库" tabindex="-1"><a class="header-anchor" href="#_3使用以下命令设置存储库" aria-hidden="true">#</a> 3使用以下命令设置存储库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin <span class="token function">docker-compose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,58),c=[l];function t(p,o){return s(),a("div",null,c)}const m=n(i,[["render",t],["__file","centos.html.vue"]]);export{m as default};
