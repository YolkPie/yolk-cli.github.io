# 单项目多应用模板
::: tip Node 版本要求
Yolk CLI 需要 [Node.js](https://nodejs.org/) 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::
### 模板目录结构
```
├── build                          # 脚本
├── config                         # 配置，webpack相关配置
├── deploy                         # 打包后生成的文件，安装文件夹区分不同的应用
├── node_modules                   # 安装的依赖
└── src
    ├── [projectName]              # 应用
        ├── css                    # 应用样式文件
        ├── images                 # 应用图片资源
        ├── pages                  # 应用相关页面
├── template                       # 应用模板
├── .browserslistrc                # 在不同的前端工具间共享目标浏览器
├── .gitignore                     # git忽略文件
├── .huskyrc                       # 阻止错误的 git 提交
├── package.json                   # npm包描述文件
├── package-lock.json              # 记录当前状态下实际安装的各个npm package的具体来源和版本号
├── prettier.config.js             # 代码格式化规则
├── README.md                      # 项目说明
```
### 相关指令
```bash
npm install                           # 安装依赖
npm run create [projectName]          # 创建应用
npm run dev [projectName]             # 本地开发
npm run build [projectName]           # 生产环境打包
npm run build:prod [projectName]      # 生产环境打包
npm run build:yufa [projectName]      # 预发环境打包
```
### 本地开发

- 1. `npm install`(安装package.json下项目依赖)；
- 2. 运行`npm run create [projectName]`指令生成新应用，运行该指令后会复制模板项目`template`到src文件夹下，并重命名为projectName：
  - 在`src/[projectName]/css`目录下生成基础样式文件
  - 在`src/[projectName]/images`目录下生成基础图片资源
  - 在`src/[projectName]/pages`目录下生成基础页面文件
- 3. `npm run dev [projectName]`(安装成功后启动项目)；
- 4. 项目在本地`localhost:8080/[projectName]/[页面名称].html`运行；
- 5. 编译打包，打包会将项目代码打包到`deploy/[projectName]`目录下，所有项目使用同一域名，不同项目以`[projectName]`链接路径加以区分
  - npm run build:prod [projectName]：生产环境打包
  - npm run build:yufa [projectName]：预发环境打包

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