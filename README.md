<p align="center">
    <a>
        <img width="200" src="./assets/logo.png">
    </a>
</p>

# tmx-ui

> 该项目为 ThingsMatrix 的前端业务组件库，旨在统一组件的 UI 样式，以及减少冗余的组件代码。该项目是基于 iView 4.0+版本进行二次开发。

# Features

- 抽离自项目中常用的业务组件
- 独立的字体库和 iconfont 库


# Install

Using npm:

```bash
npm install tmx-ui --save
```

or yarn:

```bash
yarn add tmx-ui -D
```

# Usage

Global use:

```javascript
import Vue from 'vue'
import TmxUI from 'tmx-ui'
Vue.use(TmxUI)
```

or lazy-load:

```javascript
import { TmxCard } from 'tmx-ui'
export default {
  components: {
    TmxCard,
  },
}
```

# Expamle

```html
<template>
  <TmxCard />
</template>
```

# Develop & Build

## docs

该项目配置相关的组件说明文档，你可以在这里（/docs）编写你的文档，同时还可以作为开发环境，实时查看你的组件。文档相关部署如下：

```bash
# 文档本地启动
yarn docs:dev

# 文档打包
yarn docs:build

# 文档部署
yarn deploy:build
```

如果你不喜欢这种实时文档的开发模式，该项目还支持传统的开发模式，你可以在这里（/example）引用你的组件进行调试。

```bash
yarn dev
```

## build

你可以通过以下命令对组件库进行打包：

```bash
yarn build:prod
```

或样式构建：

```bash
yarn build:style
```

同时，你也可以单独打包样式和组件：

```bash
yarn build:component
```

如果你觉得以上命令太麻烦、太复杂，你也可以选择一键部署：

```bash
yarn build
```

## License
[MIT](http://opensource.org/licenses/MIT)