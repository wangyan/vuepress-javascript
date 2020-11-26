import modeOptions from './modeOptions'

/**
 * 加载 modeOptions 文件中指定 mode 下的自定义属性值
 * 并将 body 标签的类设置为 light-mode 或者 dark-mode
 */
function render (mode) {
  const rootElement = document.querySelector(':root')
  const options = modeOptions[mode]
  for (const k in options) {
    rootElement.style.setProperty(k, options[k])
  }
  document.getElementsByTagName('body')[0].className = mode + '-mode'
  console.log('className: ' + document.getElementsByTagName('body')[0].className)
}

/**
 * 设置网站的配色方案
 * 如果浏览器支持 "prefers-color-scheme" 特性, 则自动选择'dark'或者'light'，否则根据当前时间判断。
 */
export default function applyMode (mode) {
  // 手动指定
  if (mode !== 'auto') {
    render(mode)
    return
  }

  // 自动选择
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches
  if (isDarkMode) render('dark')
  if (isLightMode) render('light')

  // 根据时间判断
  if (!isDarkMode && !isLightMode) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
    const hour = new Date().getHours()
    if (hour < 6 || hour >= 18) render('dark')
    else render('light')
  }
}