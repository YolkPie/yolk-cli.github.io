module.exports = {
  title: 'yolk-cli',
  description: '前端项目脚手架',
  theme: '@vuepress/theme-vue',
  base: '/yolk-cli/',
  themeConfig: {
    nav: [{ text: '指南', link: '/guide/introduction/' }],
    sidebar: {
      '/guide/': [
        {
          title: '介绍',
          collapsable: false,
          path: '/guide/introduction/',
          children: [
            '/guide/introduction/vue-spa-template',
            '/guide/introduction/vue-mpa-template'
          ]
        },
        '/guide/installation',
        '/guide/usage',
        {
          title: '开发',
          collapsable: false,
          path: '/guide/develop/',
          children: [
            '/guide/develop/vue-spa-template',
            '/guide/develop/vue-mpa-template'
          ]
        },
        '/guide/contribution'
      ]
    }
  }
}
