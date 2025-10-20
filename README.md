# 美团招聘北斗计划项目

这是一个基于React构建的美团招聘北斗计划网站前端项目，用于展示和提供北斗计划相关的招聘信息和申请功能。

## 可用脚本

在项目目录中，您可以运行以下命令：

### `npm start`

使用craco启动开发服务器。
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看项目。

当您修改代码时，页面会自动重新加载。
控制台中会显示任何lint错误。

### `npm test`

使用craco启动交互式测试运行器。

### `npm run build`

使用craco构建生产版本的应用程序到 `build` 文件夹。

构建会正确打包React生产版本并优化性能。
所有文件都会被压缩，文件名会包含哈希值。
应用程序已经准备好部署！

## 技术栈

- React 19
- React Router 7
- Sass
- Craco（Create React App Configuration Override）

## 项目结构

```
src/
├── assets/        # 静态资源文件
├── components/    # 可复用组件
├── containers/    # 容器组件
├── hooks/         # 自定义钩子
├── pages/         # 页面组件
├── routes/        # 路由配置
├── styles/        # 全局样式
├── utils/         # 工具函数
└── index.js       # 应用入口
```

## 安装和启动

1. 确保已安装 Node.js 环境
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm start`

## 关于北斗计划

北斗计划是美团面向高校毕业生的人才培养计划，旨在为公司储备和培养未来的技术和管理人才。本网站提供北斗计划的详细介绍、申请指南以及其他相关信息。
