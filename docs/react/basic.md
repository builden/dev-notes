# 基础

## setState 是同步还是异步的

## PureComponent 和 Component 的区别

- PureComponent 实现了默认的 shouldComponentUpdate
- 当 props 和 state 有改变时，对 props 和 state 做浅比较，如果返回 false 不会重新渲染
- Component 默认只要 props 和 state 有变化就进行重新渲染
