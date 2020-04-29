# TailWindCSS

## 安装

```bash
$ yarn add tailwindcss -D

# 在项目目录下生成tailwind.config.js的配置
# --full表示生成完整配置，可学习有哪些配置
$ npx tailwind init --full
```

## 配置

```css
/* src/styles/tailwind.src.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```json
// package.json
// 生成tailwind.css，在js代码中引入
{
  "scripts": {
    "build:full:style": "postcss src/styles/tailwind.src.css -o src/styles/tailwind.css",
    "build:style": "postcss src/styles/tailwind.src.css -o src/styles/tailwind.min.css",
    "prebuild": "cross-env NODE_ENV=production yarn build:style"
  }
}
```

```ts
// craco.config.js
// 生产模式引入 tailwind.min.css
const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = ({ env }) => {
  const conf = {
    webpack: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(packageInfo.version),
        }),
      ],
    },
  };
  if (env === 'production') {
    if (process.env.BUNDLE_ANALYSE)
      conf.webpack.plugins.push(new BundleAnalyzerPlugin());
    conf.webpack.alias['./styles/tailwind.css'] = './styles/tailwind.min.css';
  }
  return conf;
};
```

## 配置压缩

```bash
# 安装压缩插件
yarn add @fullhuman/postcss-purgecss -D

# 如果postcss命令没有按照，需要手动安装
yarn add postcss-cli -D
```

```js
// postcss.config.js
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
```

## 工具

- [主色生成](https://adevade.github.io/color-scheme-generator/)
- [辅助色生成](https://javisperez.github.io/tailwindcolorshades/)
