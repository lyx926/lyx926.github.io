---
title: docker mysql 导入导出
icon: file
---

### 创建数据

```sql
CREATE DATABASE mnetwork DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
```

### 导出

```shell
docker exec -it docker容器名 mysqld -uroot -p数据库密码 数据库名 > 备份文件名.sql;
```

### 导入

```shell
docker exec -i docker容器名 sh -c 'exec mysql -uroot -p数据库密码 数据库名' < 备份文件名.sql;
```
