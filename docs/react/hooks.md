# Hooks

- 允许你在不写 class 的情况下操作 state 和 react 的其它特性
- 自定义 hook 可以把公共的逻辑提取出来，让逻辑在多个组件之前共享

## 原理

- 组件内部维护了一个类 hooks 数组，每次调用一次 hooks 方法会把 [state, setState] 添加到数组中
- 获取 state 状态是根据调用顺序获取的，所以 hooks 方法不能条件语句中

## 优点

### 1. 更容易复用代码

### 2. 清爽的代码风格

### 3. 代码量更少

### 4. 更容易发现无用的状态和函数

### 5. 更容易拆分组件

## 缺点

### 1. 部分代码从主动式变成响应式

- useEffect 和 useCallback 的触发时机有点让人难以理解，很容易出错
- useEffect 的依赖项可能会很多，不好维护

### 2. 状态不同步

- 闭包的原因，异步回调引用的 state 变量是之前的，需要通过 useRef 的方式解决

```ts
import React, { useState, useRef, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const onAlertButtonClick = () => {
    setTimeout(() => {
      alert('Value: ' + counterRef.current); // 获取最新的count值
    }, 3000);
  };
  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 3 seconds
      </button>
    </div>
  );
}
export default Counter;
```
