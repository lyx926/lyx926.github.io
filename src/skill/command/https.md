### nginx容器

```shell
docker run -d -p 80:80 -p 443:443 \
--name n-index \
--privileged=true \
--restart=always \
-v /disk/home/index/nginx/www:/usr/share/nginx/html \
-v /disk/home/index/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /disk/home/index/nginx/logs:/var/log/nginx \
-v /disk/home/index/nginx/cert:/etc/nginx/cert \
-e TZ=Asia/Shanghai nginx:latest

```

### https的nginx.conf配置

```shell
        #80
        server {
                listen 80;
                server_name liuyixiang.xyz; #填写绑定证书的域名
                rewrite ^(.*)$ https://$host$1 permanent; #把http的域名请求转成https
        }

        #443
        server {

                #listen       80;
                #server_name  localhost;

                listen 443 ssl; #SSL 访问端口号为 443  并启用 SSL 功能
                server_name liuyixiang.xyz; #填写绑定证书的域名
                ssl_certificate /etc/nginx/cert/6459658_www.liuyixiang.xyz.pem; #证书文件名称
                ssl_certificate_key /etc/nginx/cert/6459658_www.liuyixiang.xyz.key; #私钥文件名称
                ssl_session_timeout 5m;
                ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #请按照这个协议配置
                ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; #请按照这个套件配置，配置加密套件，写法遵循 openssl 标准。
                ssl_prefer_server_ciphers on;

                #web
                location / {
                        root   /usr/share/nginx/html;
                        try_files $uri $uri/ /index.html;
                        index  index.html index.htm;
                }

                error_page   500 502 503 504  /50x.html;

                location = /50x.html {
                        root   html;
                }
        }

```

### /disk/home/index/nginx目录结构

```shell
[root@lyx-host nginx]# tree
.
├── cert
│   ├── 6459658_www.liuyixiang.xyz.key
│   ├── 6459658_www.liuyixiang.xyz.pem
│   ├── apiclient_cert.p12
│   ├── apiclient_cert.p12_bak
│   ├── apiclient_cert.pem
│   └── apiclient_key.pem
├── conf│   └── nginx.conf
├── logs
│   ├── access.log
│   └── error.log
└── www
    ├── 1557105.apk
    ├── index.html
    ├── script.js
    └── style.css

4 directories, 13 files
[root@lyx-host nginx]#

```