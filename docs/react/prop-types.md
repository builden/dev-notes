# prop 类型检查

## 安装

```bash
$ yarn add prop-types
```

## 类型

```ts
import PropTypes from 'prop-types';
// 基础数据类型
PropTypes.bool; // 布尔
PropTypes.number; // 数值;
PropTypes.string; // 字符串
PropTypes.symbol; // Symbol
PropTypes.object; // 对象
PropTypes.array; // 数组
PropTypes.func; // 函数

PropTypes.node; // 指React Node,任何可被渲染的元素,包括ReactChild | ReactFragment | ReactPortal | 字符串 | 数字 | 布尔值 | null | undefined | 数组
PropTypes.element; // string | 组件实列
```

## 使用示例

```ts
const Baz = (props) => <div {...props} />;

Baz.propTypes = {
  className: PropTypes.string,
};
```

## 生产环境移除 propTypes

- 配置`babel-plugin-transform-react-remove-prop-types`
- create-react-app 创建的项目中已经自动移除，无需处理
