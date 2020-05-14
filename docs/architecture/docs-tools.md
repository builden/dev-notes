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

  // 发布到Github Pages，默认路径是
  base: '<RepoName>', // such as: /dev-notes/
  publicPath: '<RepoName>', // such as: /dev-notes/
  exportStatic: {}, // 生成所有子页面，确保页面刷新时能正常访问
});
```

#### Github Pages 配置

```bash
$ yarn add gh-pages -D
```

```yml
# .github/workflows/gh-pages.yml
# 提交到Github后，会自动执行生成最新的Pages页面
name: github pages

on:
  push:
    branches:
      - master # default branch

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run docs:build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

```json
// package.json
{
  "script": {
    "deploy": "gh-pages -d dist"
  }
}
```

#### 页面加载加速，迁移到 [码云 Gitee](https://gitee.com/)

- 授权从 github 同步代码，同步成功后可以创建`Gitee Pages`
