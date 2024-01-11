### 命令介绍

```shell
#创建文件
touch
#显示当前目录中的文件
ll
#查找文件，maxdepth 查找深度，type 查找类型 ，mmin 分钟 mtime 天 name 查找名称
find
#给命令传递参数的一个过滤器
xargs
#删除文件
rm
```

### 删除7 天前 文件后缀是 .txt 文件

```shell
find . -maxdepth 1 -type f -mtime +7 -name "*.txt" | xargs rm -rf
```

### 删除1 小时前 文件后缀是 .txt 文件

```shell
find . -maxdepth 1 -type f -mmin +60 -name "*.txt" | xargs rm -rf
```

### 删除5 分钟前 文件后缀是 .txt 文件

```shell
find . -maxdepth 1 -type f -mmin +5 -name "*.txt" | xargs rm -rf
```

### find

```shell
find [OPTION]... [查找路径] [查找条件] [处理动作] 
```

### xargs

```shell
somecommand | xargs -item command
find | xargs command
```

> xargs 是给命令传递参数的一个过滤器，也是组合多个命令的一个工具。 xargs 可以将管道或标准输入（stdin）数据转换成命令行参数，也能够从文件的输出中读取数据。 xargs 也可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行。 xargs 默认是 echo，通过管道传递给 xargs 的输入将会包含换行和空白，换行和空白将被空格取代。 xargs 是一个强有力的命令，它能够捕获一个命令的输出，然后传递给另外一个命令。
