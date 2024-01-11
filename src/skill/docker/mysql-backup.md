---
title: docker mysql 备份
icon: file
---
> [(98条消息) docker版mysql:5.7.34 免密码使用mysqldump备份_mysqldump免密_昜羊的博客-CSDN博客](https://blog.csdn.net/zyy247796143/article/details/124355917)

### 备份脚本

```shell
docker exec -it [容器名] mysql_config_editor set --login-path=root_login --user=root --password
```

```shell
docker exec -it [容器名] ls -la /root/.mylogin.cnf
```

```shell
docker exec -it [容器名] mysqldump --login-path=root_login [数据库] > /backup/[数据库]_$(date +%Y%m%d).sql
```

```shell
echo '00 02 * * * root find /backup -maxdepth 1 -type f -mtime +30 -name "*.sql" | xargs rm -rf' >> /etc/crontab
```

```shell
echo '00 03 * * * root /usr/bin/docker exec [容器名] mysqldump --login-path=root_login [数据库] > /backup/[数据库]_$(date +\%Y\%m\%d).sql' >> /etc/crontab
```
