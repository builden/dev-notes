# create-react-app

## 创建新项目

```bash
$ npx create-react-app react-demo
```

## craco

### 安装依赖

```bash
$ yarn add @craco/craco -D
```

### 配置 craco 配置

```js
// ./craco.config.js
module.exports = function ({ env, paths }) {
  const conf = {};
  return conf;
};
```

### 修改启动脚本

```json
// package.json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```
