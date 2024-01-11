### Git Commit（提交）

```shell
#提交
git commit
```

### Git branch（分支）

```shell
#创建分支
git branch <your-branch-name>
#切换到新的分支上
git checkout <your-branch-name>
#创建一个新的分支同时切换到新创建的分支
git checkout -b <your-branch-name>
```

### git merge（合并）

```shell
#意思：我要把这两个父节点本身及它们所有的祖先都包含进来
#创建新分支
git branch <your-branch-name>
#命令切换到该分支
git checkout <your-branch-name>
#提交一次（提交分支代码）
git commit
# 切换回 main
git checkout main
#再提交一次（提交主干代码）
git commit
#把 <your-branch-name> 合并到 main（在主干下执行；把分支拿过来）
git merge 
```