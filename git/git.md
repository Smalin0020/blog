# git使用随笔

## git 修改远程仓库地址

- 添加

``` bash
git remote add origin [url]
```

- 修改

``` bash
git remote set-url origin [url]
```

- 删除

``` bash
git remote rm origin
```


## 工作日常git使用

1. 使用 `git add [修改的文件]` 命令来添加修改过的内容 .代表全部文件

2. 使用 `git commit -m 'message'` 命令来提交到暂存区

3. 使用 `git status` 命令来查看文件状况

4. 使用 `git pull --rebase` 命令来拉取git上的其他人的代码

5. 使用 `git push origin [你需要提交到的分支]` 命令来推送到git服务器上

## 如何克隆分支项目

- 如果还没有 clone，那么就指定分支 clone：

`git clone -b xxxx URL`

- 如果已经 clone 了，使用 git checkout 来切换分支。

``` bash
git clone  # 项目地址
git checkout zy 
git pull origin zy
```

## 简单配置

- 配置使用Git仓库的人员姓名

`git config --global user.name "丁林" `

- 配置使用Git仓库的人员email，填写自己的公司邮箱

`git config --global user.email "support@jiagouyun.com"`

- 克隆项目，在本地生成同名目录，并且目录中会有所有的项目文件

`git clone git@iZbp1h7fx16gkr9u4gk8v3Z:root/test.git`


## 上传文件

- 进入到项目目录

`cd test/ `

- 创建需要上传到GitLab中的目标文件

`echo “test” >  /root/test.sh`

- 将目标文件或者目录拷贝到项目目录下

`cp /root/test.sh ./  `

- 将test.sh文件加入到索引中

`git add test.sh `

- 将test.sh提交到本地仓库

`git commit -m “test.sh”`

- 将文件同步到GitLab服务器上

`git push -u origin master `

- 在网页中查看上传的test.sh文件已经同步到GitLab中


``` bash
# 初始化一个git 
git init 

# 添加一个文件，文件名为 README.md
git add README.md 

# 提交一个文件到暂存区，'这里是提交的注释'
git commit -m 'first commit' 

git remote add origin hppts://github.com/Smalin0020/dinglin.git

# 推送到远程仓库
git push -u origin master 
```

## 使用git一键部署vuepress到github pages

``` bash
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'smalin.cn' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/Smalin0020/blog.git
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Smalin0020/Smalin0020.github.io.git master
git push -f origin master
#  origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

### package.json

``` js{0}
{
    "scripts": {
        "dev": "vuepress dev",
        "deploy": "bash deploy.sh"
      }
}
```

## git遇到的问题

- failed： to push some refs to

`git add -A`

`git commit -m 'xiugai'`

`git push`

- 之后，提示 error: failed to push some refs to 'url'

上网搜索，有的说是 本地之前的代码有部分提交了，使用强制提交覆盖

 git push -f

 

试了，不行；

还有说 先使用git fetch 到本地 之后在merge ,然后在push

$ git fetch

$ git merge

试了，依然不行

偶然用百度的方法

把当前分支代码上传到指定分支上

$ git push -u origin develop

结果是可以的。

### Git 提示fatal: remote origin already exists 错误解决办法

- 1、先删除远程 Git 仓库

`$ git remote rm origin`

- 2、再添加远程 Git 仓库

`$ git remote add origin git@github.com:FBing/java-code-generator`

- 如果执行 git remote rm origin 报错的话，我们可以手动修改gitconfig文件的内容
