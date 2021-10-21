#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成本地静态文件
yarn docs:build

# 初始化 Git
git config user.name WangYan
git config user.email no-reply@wangyan.org
git config commit.gpgsign true
git config user.signingkey 70B152332E0E8722

#sudo apt-get install gnupg2 -y
curl ${GPG_PRIVATE_KEY} | gpg --import
curl ${GPG_PUBLIC_KEY} | gpg --import

# 克隆远程仓库
rm -rf gh-pages/
git clone -b gh-pages https://github.com/wangyan/javascript-tutorial.git gh-pages
cd gh-pages/
git reset --hard ed08fcb

# Git 提交
mv ../docs/.vuepress/dist/* .
echo "js.pages.wangyan.org" > CNAME
git add -A
git commit -m "Last update: $(date '+%Y-%m-%d %H:%M:%S')"

# 如果发布到 https://<USERNAME>.github.io
# git push --force git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push --force git@github.com:wangyan/javascript-tutorial.git gh-pages:gh-pages
git push --force https://${GIT_AUTHOR_NAME}:${GIT_ACCESS_TOKEN}@github.com/wangyan/javascript-tutorial.git gh-pages:gh-pages

# 清理
cd - 
rm -rf gh-pages/
rmdir docs/.vuepress/dist/