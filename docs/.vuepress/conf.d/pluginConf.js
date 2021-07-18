module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "缓存已更新，请点击刷新！",
      buttonText: "刷新缓存",
      popupComponent: 'MySWUpdatePopup',
    }
  },
  '@vuepress/clean-urls': {
    normalSuffix: '',
    indexSuffix: '/',
    notFoundPath: '/404.html',
  },
  '@vuepress/medium-zoom': {
    selector: '.theme-default-content img',
    options: {
      margin: 24,
      background: '#000',
      scrollOffset: 0,
    }
  },
  '@vuepress/active-header-links': true,
  '@vuepress/back-to-top': true,
  '@vuepress/nprogress': true,
  '@snowdog/vuepress-plugin-pdf-export':true
};