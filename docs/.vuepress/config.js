const navConf     = require('./conf.d/navConf.js');
const sidebarConf = require('./conf.d/sidebarConf.js');
const headConf    = require('./conf.d/headConf.js');
const pluginConf  = require('./conf.d/pluginConf.js');

module.exports = {
  base: '/javascript-tutorial/',
  title: '现代 JavaScript 教程',
  description: '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。',
  head: headConf,
  host: '127.0.0.1',
  port: 6060,
  dest: '.vuepress/dist',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    repo: 'wangyan/javascript-tutorial',
    repoLabel: '查看源码',
    docsRepo: 'wangyan/vuepress-javascript',
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑',
    smoothScroll: true,
    lastUpdated: '最后更新时间',
    nav: navConf,
    sidebar: sidebarConf,
  },
  plugins: pluginConf,
  markdown: {
    //lineNumbers: true
  },
}