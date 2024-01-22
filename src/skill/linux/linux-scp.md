---
title: scp
icon: file
---

### 上传
```shell
#!/bin/bash

#upload
scp [本地目录] root@127.0.0.1:[远端目录]
```

### 下载

```shell
#!/bin/bash

#download
scp root@127.0.0.1:[远端目录] [本地目录]
```

### 密钥上传

```shell
scp -i [密钥文件] -P [端口] -r [本地目录] root@127.0.0.1:[远端目录]
```

### 密钥下载

```shell
scp -i [密钥文件] -P [端口] root@127.0.0.1:[远端目录] -r [本地目录]
```
