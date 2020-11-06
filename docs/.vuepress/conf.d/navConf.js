// config/navConf.js
module.exports = [
    { text: '首页', link: '/' },
    { text: '基础', items: [
      { text: 'An introduction', link: '/getting-started/' },
      { text: 'JavaScript Fundamentals', link: '/first-steps/' },
      { text: 'Code quality', link: '/code-quality/' },
      { text: 'Objects: the basics', link: '/object-basics/' },
      { text: 'Data types', link: '/data-types/' },
      { text: 'Advanced working with functions', link: '/advanced-functions/' },
      { text: 'Object properties configuration', link: '/object-properties/' },
      { text: 'Prototypes, inheritance', link: '/prototypes/' },
      { text: 'Classes', link: '/classes/' },
      { text: 'Error handling', link: '/error-handling/' },
      { text: 'Promises, async/await', link: '/async/' },
      { text: 'Generators, advanced iteration', link: '/generators-iterators/' },
      { text: 'Modules', link: '/modules/' },
      { text: 'Miscellaneous', link: '/js-misc/' },
    ]},
    { text: '进阶', items: [
      { text: 'Document', link: '/document/' },
      { text: 'Introduction to Events', link: '/events/' },
      { text: 'UI Events', link: '/event-details/' },
      { text: 'Forms, controls', link: '/forms-controls/' },
      { text: 'Document and resource loading', link: '/loading/' },
      { text: 'Miscellaneous', link: '/ui-misc/' },
    ]},
    { text: '专题', items: [
      { text: 'Frames and windows', link: '/frames-and-windows/' },
      { text: 'Binary data, files', link: '/binary/' },
      { text: 'Network requests', link: '/network/' },
      { text: 'Storing data in the browser', link: '/data-storage/' },
      { text: 'Animation', link: '/animation/' },
      { text: 'Web components', link: '/web-components/' },
      { text: 'Regular expressions', link: '/regular-expressions/' }
    ]}
]