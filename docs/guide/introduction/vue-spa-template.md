# vue 单页应用模板
::: tip Node 版本要求
Yolk CLI 需要 [Node.js](https://nodejs.org/) 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

`vue-spa-template` 是基于 [@vue/cli](https://cli.vuejs.org/zh/) 搭建的 `vue.js` 单页应用快速开发的完整系统，提供：
- [@vue/cli](https://cli.vuejs.org/zh/)：基于 `@vue/cli` 搭建该模板。
- [Vue](https://cn.vuejs.org/index.html)：基于 `vue.js`。
- [VueX](https://vuex.vuejs.org/zh/)：集成 `VueX`，用于状态管理。
- [Vue Router](https://router.vuejs.org/zh/)：集成 `Vue Router`，用于路由管理。
- [axios](https://www.kancloud.cn/yunye/axios/234845)：集成 `axios`，用于网络请求，支持：
  - 基于 `@yolkpie/utils/axios-jsonp`，支持发起 `jsonp` 请求。
  - 基于 `axios-retry`，自动重新发送请求。
- [mode](https://cli.vuejs.org/zh/guide/mode-and-env.html)：使用环境标量与模式，区分线上、预发、测试与开发环境。
- [Workbox](https://webpack.docschina.org/guides/progressive-web-application/)：基于 `Workbox`，进行离线存储。
- [better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)：集成 `better-scroll`，处理移动端滚动。
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)：基于 `postcss-pxtorem`，自动将px转成rem，计算规则为： 750px设计稿 -----> 7.5rem。
- [Prettier](https://prettier.io/)：基于 `Prettier`，进行代码格式化，保持团队的项目风格统一。
- [standard.js](https://github.com/standard/standard)：基于 `standard.js` + `husky`，进行代码格式规格，统一团队代码风格，不符合规范㞏提交代码。
- [Commitizen](https://juejin.im/post/5bd2debfe51d457abc710b57)：基于 `Commitizen` + `husky`，规范 commit message，不符合规范无法提交代码。
- [骨架屏](https://www.jb51.net/article/146109.htm)：抽取骨架屏效果到html，降低首屏空白时间。
- 1px：伪元素 + transform 解决Retina屏1像素问题。
- [@yolkpie/utils](https://www.npmjs.com/package/@yolkpie/utils)：前端工具类库。
