# 如何使用

## 安装

```
// 安装前请先确保已安装node和npm
// 需要提前在全局安装webpack和webpack-dev-server,如果已安装请忽略
npm install webpack -g
npm install webpack-dev-server -g

// 安装成功后,再安装依赖
npm install
```

## 运行

#### 开发环境

```
// 注意首次使用需要执行下面的init命令来生成入口html文件,以后不用再执行
npm run init
npm run dev
```

#### 生产环境(打包)

```
npm run build
```

#### 访问

在浏览器地址栏输入http://127.0.0.1:8080