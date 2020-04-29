# 文档工具

目前 github 上有不少优秀的开源文档工具，可综合考虑选择适合自己项目的工具

## gatsby

### 优点

1. 可支持各种数据类型，包括动态数据源

### 缺点

1. 可配置的项太多，上手成本高

## dumi

- 阿里出品

### 优点

1. 支持在 markdown 文件中直接嵌入 react 代码，并实际展示，适合做组件库的文档
2. 在配置上比 storybook 更简洁

### 缺点

1. 偏小众
2. 目前为止与`create-react-app`创建的项目不兼容 `v1.0.20`

### 安装

```bash
# 在工程项目下
$ yarn add dumi -D
```

### 常用配置

```ts
// .umirc.ts
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi',
  mode: 'site', // site | doc
});
```
