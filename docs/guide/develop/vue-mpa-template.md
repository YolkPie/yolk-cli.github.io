# vue 多页应用模板
::: tip Node 版本要求
Yolk CLI 需要 [Node.js](https://nodejs.org/) 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::
### 模板目录结构
```
├── dist                           # 打包后生成的文件
├── node_modules                   # 安装的依赖
├── public                         # 静态资源文件夹
└── src
    ├── api                        # 接口
    ├── assets                     # 项目依赖的一些静态资源
    ├── components                 # 公共组件
        ├── pre-render-skeleton    # 页面骨架屏
        ├── pre-render-loading     # 页面loading
    ├── config                     # 公共配置
    ├── directives                 # vue指令
    ├── filters                    # vue过滤器
    ├── mixin                      # vue混入
    ├── plugins                    # 插件
    ├── request                    # 网络请求相关
    ├── router                     # vue-router
    ├── store                      # vuex
    ├── styles                     # 公共样式
    ├── pages                      # 页面容器
    ├── views                      # 页面视图组件
├── .browserslistrc                # 在不同的前端工具间共享目标浏览器
├── .editorconfig                  # 统一代码风格
├── .env                           # 环境变量，在所有的环境中被载入
├── .env.prod                      # 环境变量，在生产环境被载入
├── .env.test                      # 环境变量，在测试环境被载入
├── .env.yufa                      # 环境变量，在预发环境被载入
├── .eslintrc.js                   # 代码检查配置文件
├── .gitignore                     # git忽略文件
├── .huskyrc                       # 阻止错误的 git 提交
├── .npmrc                         # 项目npm配置
├── babel.config.js                # 代码转换规则
├── package.json                   # npm包描述文件
├── package-lock.json              # 记录当前状态下实际安装的各个npm package的具体来源和版本号
├── postcss.config.js              # css转换规则
├── prettier.config.js             # 代码格式化规则
├── README.md                      # 项目说明
├── vue.config.js                  # vue-cli配置文件
```

### 相关指令
```bash
npm install           # 安装依赖
npm run new           # 生成新页面
npm run serve         # 运行项目（本地开发）
npm run build         # 生产环境打包
npm run build:prod    # 生产环境打包
npm run build:yufa    # 预发环境打包
npm run build:test    # 测试环境打包
npm run dist          # 本地预览打包文件
npm run lint          # 修复不符合规范的代码
```
### 本地开发

- 1. `npm install`(安装package.json下项目依赖)；
- 2. 运行`npm run new`指令生成新页面（会要求你输入页面名称，例如：home），运行该指令会生成新页面所必须的文件：
  - 在`src/pages`目录下生成页面容器
  - 在`src/views`目录下生成页面视图
  - 在`src/router`目录下生成页面路由
  - 在`src/store`目录下生成页面状态
- 3. `npm run serve`(安装成功后启动项目)；
- 4. 项目在本地`localhost:80/[页面名称].html`运行， 默认运行在`80`端口，你也可以在`vue.config.js/devServer`中修改运行的端口；
- 5. 编译打包：
  - npm run build:prod：生产环境打包
  - npm run build:yufa：预发环境打包
  - npm run build:test：测试环境打包

### 关键目录
关键目录及文件均可通过指令生成
- 页面容器：
***`src/pages/[页面名称]`***

该目录用于组织页面容器相关文件，主要包括`页面模板`、`页面入口`以及`页面根vue实例`。
- 页面视图：
***`src/views/[页面名称]`***

该目录用于组织页面级视图组件相关文件，主要包括`页面视图模板`、`页面视图入口`以及`页面视图样式`。

- 页面路由：
***`src/router/[页面名称].js`***

该文件用于组织页面路由相关逻辑。

- 页面状态：
***`src/store/[页面名称].js`***

该文件用于组织页面全局状态。

### 跨域问题
- 配置host：127.0.0.1 dev.*.com
- 配置devServer的proxy，配置路径为：vue.config.js -> devServer -> proxy

### 骨架屏
使用`npm run new`初始新页面时，会自动生成一个新页面的骨架屏文件，本模板支持自动注入骨架屏，我们只需首页骨架屏的页面及样式，模板会基于 `vue-server-renderer`，自动将骨架屏的 css 和 html 注入到 打包的 html 中。

`src/pages/[新页面]/skeleton` 就是基于 vue-server-renderer 服务端渲染，抽取手写骨架屏的 css 和 html 注入到打包的 html 中。

`src/pages/[新页面]/skeleton/skeleton.vue` 文件就是需要手写的骨架屏组件。

### 环境变量与模式
https://cli.vuejs.org/zh/guide/mode-and-env.html

本模板主要包括四种模式，通常一种模式会对应多个环境变量。通常情况下后端的API会有多个指向不同环境的域名（测试、预发、线上）
>* 开发模式：本地开发，通过修改 `.env` 文件中的 `REQUEST_URL` 变量来请求不同后端环境API
>* 测试模式：对应后端测试环境API域名
>* 预发模式：对应后端预发环境API域名
>* 生产模式：对应后端线上环境API域名

例如以 vue-cli-service build --mode prod 命令进行打包，会在prod模式下加载可能存在的 .env、.env.prod 和 .env.prod.local 文件然后构建出生产环境应用。

可以替换项目根目录中的下列文件来指定环境变量：
```
.env         # 在所有环境中被载入
.env.test    # 在测试环境中被载入
.env.yufa    # 在预发环境中被载入
.env.prod    # 在生产环境中被载入
```
以.env.prod文件为例：
```
# 左边是变量名(一般大写，下划线分割单词)，右边是变量值
NODE_ENV = "production"
REQUEST_URL = "//api.m.jd.com"
```
只有以 `VUE_APP_` 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。可以在应用的代码中这样访问它们：
```javascript
console.log(process.env.VUE_APP_SECRET)
```
非 `VUE_APP_` 开头的变量需要手动嵌入到客户端侧的包中
```javascript
config.plugin('define')
    .tap(args => {
        args[0]['process.env'].REQUEST_URL = JSON.stringify(process.env.REQUEST_URL)
        return args
    })
```
除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：
>* NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
>* BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。

### 开发PC端页面
本模板主要针对移动端开发，采用rem作为尺寸单位，为此使用postcss插件，自动将px转换成rem，同时根据屏幕宽度自动计算根字体大小。

如果想要开发PC页面则需要将上述特性移除：

- 移除postcss的pxtorem插件，配置路径为：postcss.config.js -> postcss-pxtorem
- 移除对根字体大小的计算，配置路径为：main.js -> rem

### commit message 规范
::: warning 警告
commit message 不符合规范将无法提交代码！
:::
全局安装commitzen提交代码，规范git commit message，具体参考：https://juejin.im/post/5bd2debfe51d457abc710b57

### 代码规范与格式化
代码规范标准为`standard`，建议使用`prettier`格式化代码，代码编辑使用`VS Code`，安装`prettier`扩展，`shift + alt + f` 格式化代码。也可以运行 `npm run lint`修复不符合规范的代码。

::: warning 警告
书写的代码不符合规范将无法提交代码！
:::