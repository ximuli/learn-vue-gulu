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
          '/components/button'
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