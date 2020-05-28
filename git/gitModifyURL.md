# git 修改仓库

## 1. 修改命令

```
git remote set-url origin [url]
```

## 2. 删除增加

```
git remote rm origin
git remote add origin [url]
```

## 3. 直接修改 config 文件

# git 清除历史记录方法

1. Checkout

`git checkout --orphan latest_branch`

2. Add all the files

`git add -A`

3. Commit the changes

`git commit -am "commit message"`

4. Delete the branch

`git branch -D master`

5. Rename the current branch to master

`git branch -m master`

6. Finally, force update your repository

`git push -f origin master`

参考 [stackoverflow](https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github)