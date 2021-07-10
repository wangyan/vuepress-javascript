#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成本地静态文件
yarn docs:build

# 初始化 Git
git config user.name WangYan
git config user.email no-reply@wangyan.org

# 克隆远程仓库
rm -rf gh-pages/
git clone git@github.com:wangyan/javascript-tutorial.git gh-pages
cd gh-pages/
git checkout gh-pages
git reset --hard ed08fcb

# Git 提交
mv ../docs/.vuepress/dist/* .
echo "js.pages.wangyan.org" > CNAME
git add -A
git commit -m "Last update: $(date '+%Y-%m-%d %H:%M:%S')"

# 如果发布到 https://<USERNAME>.github.io
# git push --force git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push --force git@github.com:wangyan/javascript-tutorial.git gh-pages:gh-pages

# 如果使用 travis 持续集成
# git push --force https://${username}:${access_token}@github.com/wangyan/javascript-tutorial.git gh-pages:gh-pages

# 清理
cd - 
rm -rf gh-pages/
rmdir docs/.vuepress/dist/