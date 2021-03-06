module.exports = {
  title: 'Yolk CLI',
  description: '前端项目脚手架',
  theme: '@vuepress/theme-vue',
  base: '/yolk-cli/', // 部署站点的基础路径
  dest: 'dist', // 指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析。
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-include'), './')
    }
  },
  themeConfig: {
    repo: 'YolkPie/yolk-cli',
    docsRepo: 'YolkPie/yolk-cli.github.io',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: '快速上手', link: '/guide/introduction/' },
      { text: '配套设施', link: '/support/' },
      { text: '关于我们', link: 'https://yolkpie.net/about/' }
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
        {
          title: 'Yolk Utils',
          collapsable: true,
          path: '/support/utils/',
          children: [
            '/support/utils/dom',
            '/support/utils/bom',
            '/support/utils/string',
            '/support/utils/array',
            '/support/utils/math',
            '/support/utils/event',
            '/support/utils/url',
            '/support/utils/cache',
            '/support/utils/global',
            '/support/utils/tools',
            '/support/utils/functional',
            '/support/utils/formatDate',
            '/support/utils/floatCalculate',
            '/support/utils/rem',
            '/support/utils/cookies',
            '/support/utils/getType',
            '/support/utils/getDecimalLen',
            '/support/utils/replaceByMath',
            '/support/utils/axios-jsonp'
          ]
        }
      ]
    }
  }
}
