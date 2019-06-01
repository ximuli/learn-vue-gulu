module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/learn-vue-gulu/',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        // collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tab',
          '/components/popover',
          '/components/collapse'
        ]
      }
    ],
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ]
  }
}