# react 单页应用模板
::: tip Node 版本要求
1. 推荐使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
2. 推荐使用 [nrm](https://github.com/Pana/nrm) 管理不同npm源，加快npm安装速度
:::
### 模板目录结构
```
├── deploy                         # 打包后生成的文件
├── node_modules                   # 安装的依赖
├── public                         # 静态资源文件夹
└── src
    ├── App.jsx || App.ts          # 整体应用
    ├── App.scss                   # 全局样式
    ├── index.ts || index.js       # 应用入口文件
    ├── api                        # 接口
    ├── assets                     # 项目依赖的一些静态资源
    ├── components                 # 公共组件
    ├── router                     # vue-router
    ├── styles                     # 公共样式
    ├── pages                      # 页面视图组件
      ├── pageA                    # 页面A
        ├── components             # 页面A中使用的组件
        ├── api.js                 # 页面A中使用的api接口
        ├── components             # 页面A中使用的组件
        ├── mock.js                # 页面A中使用mock数据
├── .babelrc                       # babelh转码配置文件
├── .browserslistrc                # 在不同的前端工具间共享目标浏览器
├── .editorconfig                  # 统一编辑器代码风格
├── .eslintrc.js                   # 代码检查配置文件
├── .gitignore                     # git忽略文件
├── package.json                   # npm包描述文件
├── package-lock.json              # 记录当前状态下实际安装的各个npm package的具体来源和版本号
├── yarn.lock                      # 使用yarn时记录当前状态下实际安装的各个npm package的具体来源和版本号
├── postcss.config.js              # css转换规则
├── tsconfig.json                  # TypeScript配置规则文件
├── README.md                      # 项目说明
```

### 相关指令
```bash
$ npm install            # 安装依赖 或者 yarn install
$ npm run serve          # 运行项目(本地开发) 或者 npm start
$ npm run build:prod     # 生产环境打包
$ npm run build:dev      # 预发环境打包
```

### 本地开发

- 1. `npm install`(安装package.json下项目依赖)；
- 2. `npm run serve`(安装成功后启动项目)；
- 3. 项目在本地`localhost:8008`端口运行， 默认运行在`8008`端口，你也可以在`config/webpack.config.dev.js/devServer`中修改运行的端口；
- 4. 编译打包：
  - npm run build:dev：预发环境打包
  - npm run build:prod：生产环境打包

### 跨域问题
- 配置host：127.0.0.1 dev.*.com
- 配置devServer的proxy，配置路径为：`config/webpack.config.dev.js -> devServer -> proxy`

### 开发PC端页面
本模板主要针对移动端开发，采用rem作为尺寸单位，为此使用postcss插件，自动将px转换成rem，同时根据屏幕宽度自动计算根字体大小。

如果想要开发PC页面则需要将上述特性移除：

- 移除postcss的pxtorem插件，配置路径为：postcss.config.js -> postcss-pxtorem
- 移除对根字体大小的计算，配置路径为：src/index.js  去掉`import '@utils/rem'`

### commit message 规范
::: warning 警告
commit message 不符合规范将无法提交代码！规范git commit message，具体参考：https://juejin.im/post/5bd2debfe51d457abc710b57
:::

### 代码规范与格式化
代码规范标准为`react/recommended + airbnb`，可以根据团队习惯更改`.eslintrc.js`。*务必保持团队代码风格一致*。

建议使用`prettier`格式化代码，代码编辑使用`VS Code`，安装`prettier`扩展，`shift + alt + f` 格式化代码。