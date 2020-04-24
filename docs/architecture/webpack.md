# webpack

- webpack 是一个`模块打包工具`
- 最核心的功能是：`解决模块之间的依赖`，把各个模块按照特定的规则和顺序组织在一起，最终合并成一个或多个 js 文件

## CommonJS 与 ES6 Module 的区别

### 本质区别

1. CommonJS 对模块的依赖是`动态的`，模块依赖关系的建立发生在代码运行阶段
2. ES6 Module 对模块的依赖是`静态的`，模块依赖关系的建立发生在代码编译阶段
   1. 死代码检测和排除。能更好的支持模块依赖分析
   2. 模块变量类型检查

### 值拷贝和动态映射

1. CommonJS 导出的变量是值拷贝，在外层修改导出的变量，不会影响到模块内部的值

```js
// calculator.js
let count = 0;
function add(a, b) {
  count = a + b;
}
module.exports = { count, add };

// index.js
const { count, add } = require('./calculator.js');
console.log(count); // 0, 做了一次值拷贝
add(2, 3);
console.log(count); // 0, 模块内的值虽然改变了，但不会影响到外部
count++;
console.log(count); // 1, 拷贝的值可以修改，但不会修改到模块内部
```

2. ES6 Module 导出的变量是对原有值的动态映射

```js
// calculator.js
export { count, add };

// index.js
import { count, add } from './calculator.js';
console.log(count); // 0, 是对calculator内部变量的映射
add(2, 3);
console.log(count); // 5, 会实时反映模块内部值的变化
count++; // 不可更改，会抛出SyntaxError: "count" is read-only
```

## 预处理器 loader

### 一切皆模块

所有类型的资源，在 webpack 看来都是模块

## 术语

- entry: 入口文件
- chunk: 代码块
- bundle: 包，打包产物，和 chunk 是一个对应关系
- vendor: 供应商，在 webpack 中一般指的是工程所使用的库、框架等第三方模块集中打包而产生的 bundle

## 公共模块提取

- Webpack4 之前是 CommonsChunkPlugin, 之后是 SplitChunks

### SplitChunks 给异步 import 的 chunk 文件命名，默认是数字

```js
// 通过注释的方式给chunk命名
const bar = await import(/* webpackChunkName: 'bar' */ './bar');
```

```js
// webpack.config.js
// 提取公共模块
// initial: 只对入口的chunk生效
// async: (默认) 只对异步import生效
// all: 两者都生效
// 默认js chunk体积大于30KB，CSS chunk体积大于50KB，在all的情况下会自动提取到公用模块中
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      chunks: 'all', // async || initial || all
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial', // 只打包初始时依赖的第三方
        },
        elementUI: {
          name: 'chunk-elementUI', // 单独将 elementUI 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
        },
      },
    },
  },
};

// create-react-app的默认配置是
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
};

// craco.config.js中修改默认配置
module.exports = ({ env }) => {
  const conf = {
    webpack: {
      configure: (webpackConfig, context) => {
        // webpackConfig是原始的配置
        // context中包含env, paths信息
        // 注意：name设为true之后，有新增异步加载的文件之后，会导致vendor文件发生变化
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          name: true,
        };
        return webpackConfig;
      },
    },
  };
  return env;
};
```

## 防止文件突然超限

- 安装`yarn add boundsize -D`库
- 在 package.json 中配置目标文件的尺寸限制

## HMR (热更新 Hot Module Replace)实现原理

- 修改了一个或多个文件。
- 文件系统接收更改并通知 Webpack。
- Webpack 重新编译构建一个或多个模块，并通知 HMR 服务器进行了更新。
- HMR Server 使用 websocket 通知 HMR Runtime 需要更新。（HMR 运行时通过 HTTP 请求这些更新。）
- HMR 运行时再替换更新中的模块。如果确定这些模块无法更新，则触发整个页面刷新
