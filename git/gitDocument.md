# git 学习记录

## git 简单配置

```
$ git config --global user.name 'your_name'
$ git config --global user.email 'your_email@domain.com'
```

### config 的三个作用域

#### 缺省等于 local

```
$ git config --local # 只对某个仓库有效
$ git config --global # 对当前用户所有仓库有效
$ git config --system # 对系统所有登录的用户有效
```
#### 显示 config 的配置

```
$ git config --list [--local | --global | --system]
```

## git 新建仓库

### 1. 把已有的项目代码纳入 git 管理

```
$ cd 项目代码所在文件夹
$ git init
```

### 2. 新建的项目直接用 git 管理

```
$ cd 某个文件夹
$ git init your_project # 会在当前路径下创建和项目名称同名的文件夹
$ cd your_project
```

## git 本地目录 => 暂存区 => 历史记录

`git add [files]`: 将本地目录文件添加至暂存区

`git add -u`: 将当前已被 git 管理的文件并且已经修改的文件进行添加至暂存区

`git status`: 查看当前文件下的状态

`git commit -m 'message'`: 将暂存区文件，提交为历史记录

`git log`: 查看 git 版本历史记录

## git 修改文件命名

常规操作
```
mv readme readme.md
git rm readme
git add readme.md
```

git 操作

```
git mv readme readme.md
```

## git 分支

`git brach -v`: 查看当前本地分支

`git checkout -b [brach name] [id]`

## git log 操作

`git log --oneline`: 简洁查看历史记录，每次提交的 message

`git log -n[n]`: 查看最近几次的 log 信息，随意输入数字查看几条信息等

`git log --all`: 查看当前所有分支下的 log 记录

`git log --graph`: 图形化查看 log 记录

::: tip
以上几种用法可以互相组合使用
:::

`git help --web log`: 接口文档

## git 图形界面

`gitk`: 显示图形界面

## git 查看文件

`git cat-file -t [id]`: 查看当前文件类型

`git cat-file -p [id]`: 查看当前文件内容

## git 撤销所有未 `add` 的文件

```
git checkout head .
```