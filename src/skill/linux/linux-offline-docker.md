### 下载离线包

>https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/
>containerd.io_1.6.9-1_amd64.deb
>docker-ce_20.10.23~3-0~ubuntu-jammy_amd64.deb
>docker-ce-cli_20.10.23~3-0~ubuntu-jammy_amd64.deb

### 安装步骤

```shell
#/bin/bash

#docker-run
sudo dpkg -i *.deb && apt-get -f install
#5s
sleep 5s
#enable-docker
sudo systemctl enable docker
#restart-docker
sudo systemctl restart docker
#set user in group
sudo groupadd docker
sudo gpasswd -a ${USER} docker
newgrp docker
```