
# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'smalin.cn' > CNAME