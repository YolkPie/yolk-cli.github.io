module.exports = {
  title: 'Yolk CLI',
  description: '前端项目脚手架',
  theme: '@vuepress/theme-vue',
  base: '/yolk-cli/',
  themeConfig: {
    repo: 'YolkPie/yolk-cli',
    docsRepo: 'YolkPie/yolk-cli.github.io',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: '快速上手', link: '/guide/introduction/' },
      { text: '配套设施', link: '/support/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '介绍',
          collapsable: false,
          path: '/guide/introduction/',
          children: [
            '/guide/introduction/vue-spa-template',
            '/guide/introduction/vue-mpa-template',
            '/guide/introduction/react-spa-template',
            '/guide/introduction/multi-project-template'
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
            '/guide/develop/vue-mpa-template',
            '/guide/develop/react-spa-template',
            '/guide/develop/multi-project-template'
          ]
        },
        '/guide/contribution'
      ],
      '/support/': [
        '/support/utils'
      ]
    }
  }
}