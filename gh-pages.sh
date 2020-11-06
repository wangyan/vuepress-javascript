#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成本地静态文件
yarn docs:build

# 克隆远程仓库
rm -rf gh-pages/
git clone git@github.com:wangyan/javascript-tutorial.git gh-pages
cd gh-pages/
git checkout gh-pages
git reset --hard 0d7b08

# 初始化 Git
git config user.name WangYan
git config user.email no-reply@wangyan.org

# Git 提交
mv ../docs/.vuepress/dist/* .
git add -A
git commit -m 'Deploy Code'

# 如果发布到 https://<USERNAME>.github.io
# git push --force git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push --force git@github.com:wangyan/javascript-tutorial.git gh-pages:gh-pages

# 如果使用 travis 持续集成
# git push --force https://${username}:${access_token}@github.com/wangyan/javascript-tutorial.git gh-pages:gh-pages

cd - 