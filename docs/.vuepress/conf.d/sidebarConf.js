module.exports = {
  '/1-js/': [ 
    {
      title: '第 1 节：简介',
      path: '/1-js/01-getting-started/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['/1-js/01-getting-started/1-intro/article', '1.1. JavaScript 简介'],
        ['/1-js/01-getting-started/2-manuals-specifications/article', '1.2. 手册与规范'],
        ['/1-js/01-getting-started/3-code-editors/article', '1.3. 代码编辑器'],
        ['/1-js/01-getting-started/4-devtools/article', '1.4. 开发者控制台'],
      ]
    },
    {
      title: '第 2 节：JavaScript 基础知识',
      path: '/1-js/02-first-steps/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['/1-js/02-first-steps/01-hello-world/article', '2.1. Hello, world!'],
        ['/1-js/02-first-steps/02-structure/article', '2.2. 代码结构'],
        ['/1-js/02-first-steps/03-strict-mode/article', '2.3. 现代模式，"use strict"'],
        ['/1-js/02-first-steps/04-variables/article', '2.4. 变量'],
        ['/1-js/02-first-steps/05-types/article', '2.5. 数据类型'],
        ['/1-js/02-first-steps/06-alert-prompt-confirm/article', '2.6. 交互：alert、prompt、confirm'],
        ['/1-js/02-first-steps/07-type-conversions/article', '2.7. 类型转换'],
        ['/1-js/02-first-steps/08-operators/article', '2.8. 运算符'],
        ['/1-js/02-first-steps/09-comparison/article', '2.9. 值的比较'],
        ['/1-js/02-first-steps/10-ifelse/article', '2.10. 条件运算符：if、?'],
        ['/1-js/02-first-steps/11-logical-operators/article', '2.11. 逻辑运算符'],
        ['/1-js/02-first-steps/12-nullish-coalescing-operator/article', '2.12. 空值合并运算符"??"'],
        ['/1-js/02-first-steps/13-while-for/article', '2.13. 循环：while 和 for'],
        ['/1-js/02-first-steps/14-switch/article', '2.14. "switch" 语句'],
        ['/1-js/02-first-steps/15-function-basics/article', '2.15. 函数'],
        ['/1-js/02-first-steps/16-function-expressions/article', '2.16. 函数表达式'],
        ['/1-js/02-first-steps/17-arrow-functions-basics/article', '2.17. 箭头函数，基础知识'],
        ['/1-js/02-first-steps/18-javascript-specials/article', '2.18. JavasScript 特性'],
      ]
    },
    {
      title: '第 3 节：代码质量',
      path: '/1-js/03-code-quality/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['/1-js/03-code-quality/01-debugging-chrome/article', '3.1. 在 Chrome 中调试'],
        ['/1-js/03-code-quality/02-coding-style/article', '3.2. 代码风格'],
        ['/1-js/03-code-quality/03-comments/article', '3.3. 注释'],
        ['/1-js/03-code-quality/04-ninja-code/article', '3.4. 忍者代码'],
        ['/1-js/03-code-quality/05-testing-mocha/article', '3.5. 使用 mocha 进行自动化测试'],
        ['/1-js/03-code-quality/06-polyfills/article', '3.6. Polyfills'],
      ]
    },
  ],
};