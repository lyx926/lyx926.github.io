---
title: mysql
icon: 'book'
---

```sql
DROP TABLE IF EXISTS 模块_业务;
create table if not exists 模块_业务
(
    业务_id     bigint auto_increment comment '主键ID' primary key,

    关联_id     bigint                      null comment '关联id',
    数字        int(4)                      null comment '数字',
    时间        datetime                    null comment '时间',
    字典        char(10)       default '0'  null comment '字典',
    字符        varchar(64)    default ''   null comment '字符',
    价格        decimal(10, 2) default 0.00 null comment '价格',

    sort        int(4)                      null comment '排序',
    del_flag    char(10)       default '0'  null comment '删除标志（0代表存在 2代表删除）',
    create_by   varchar(64)    default ''   null comment '创建者',
    create_time datetime                    null comment '创建时间',
    update_by   varchar(64)    default ''   null comment '更新者',
    update_time datetime                    null comment '更新时间',
    remark      varchar(64)    default ''   null comment '备注'
) comment '模块_业务表';

```
