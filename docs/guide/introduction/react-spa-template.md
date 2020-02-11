# react 单页应用模板
::: tip 提示
1. 推荐使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
2. 推荐使用 [nrm](https://github.com/Pana/nrm) 管理不同npm源，加快npm安装速度
:::

`react-spa-template` 是基于 [webpack](https://webpack.js.org/) 搭建的 `react.js` 单页应用快速开发的完整系统，提供：
- [React](https://reactjs.org/)：基于`react.js`
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)：集成`React Router`，用于路由管理
- [Redux](https://redux.js.org/)：配置支持，可直接安装使用。默认未安装
- [ReduxSaga](https://redux-saga.js.org/)：配置支持，可直接安装使用。默认未安装
- [axios](https://www.kancloud.cn/yunye/axios/234845)：集成 `axios`，用于网络请求
  - 基于 `axios-retry`，自动重新发送请求。
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)：基于 `postcss-pxtorem`，自动将px转成rem，计算规则为： 750px设计稿 -----> 7.5rem。
- [Eslint](http://eslint.org/)：基于 `eslint` + `husky`，进行代码格式规格，统一团队代码风格，不符合规范㞏提交代码。
- 基于 `lint-stage` + `husky`，规范 commit message，不符合规范无法提交代码。
- TypeScript支持，`ts`文件可直接引入使用
