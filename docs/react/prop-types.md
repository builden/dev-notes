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
PropTypes.instanceOf(Message); // Message实例

PropTypes.oneOf(['foo', 'bar']);
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.instanceOf(Message),
]);

PropTypes.arrayOf(PropTypes.number); // 指定数组里的元素类型
PropTypes.objectOf(PropTypes.number); // 对象的属性类型

// required可以接在任意类型的后面
PropTypes.func.isRequired; // 字段是func，且必须传值
PropTypes.any.isRequired; // 字段是任意类型

// 自定义验证器
Custom.propTypes = {
  // 自定义验证器: customProp中必须包含match
  customProp: function (props, propName, componentName) {
    if (!/match/.test(props[propName])) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
  // 自定义数组，对象类型的验证器
  // 验证器会调用数组或者对象中的每一个值
  // customArrayProp中的每一个值都要包含match
  customArrayProp: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName,
  ) {
    if (!/match/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' +
          propFullName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  }),
};
```

## 使用示例

```ts
const Baz = (props) => <div {...props} />;

Baz.propTypes = {
  className: PropTypes.string,
};

// 默认值
Baz.propTypes = {
  className: 'foo',
};
```

## 生产环境移除 propTypes

- 配置`babel-plugin-transform-react-remove-prop-types`
- create-react-app 创建的项目中已经自动移除，无需处理
