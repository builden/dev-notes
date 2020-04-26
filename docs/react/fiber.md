# Fiber

- 也称协程、或者纤程
- Fiber 在 v16 版本中默认还没有开启
- 现有的 React，更新过程是同步的，这可能引发性能问题
- 当 React 决定要加载或更新组件树时，会做很多事情，比如调用各个组件的生命周期函数，计算和对比 Virtual DOM，最后更新 DOM 树，整个过程是同步的

## Fiber

- 分片：把更新组件的过程拆成更小粒度的任务，每个小片的运行时间很短
- 更新的过程分成了三个阶段(Phase)

### 阶段 1: Reconciliation Phase (协调阶段)

- 这个阶段是可以被打断的，下面的函数有可能在一次渲染周期里调用多次
- 打断后会重头再来
- componentWillMount (弃用) - getDerivedStateFromProps: 通过 props 派生出 state
- componentWillReceiveProps (弃用) - getDerivedStateFromProps
- shouldComponentUpdate

### 阶段 2: Pre-Commit Phase (预提交阶段)

- componentWillUpdate (弃用) - getSnapshotBeforeUpdate: 返回的值为 componentDidUpdate 的第三个参数，用于获取之间的组件状态

### 阶段 2: Commit Phase (提交阶段)

- 一鼓作气把 DOM 更新完，绝不会被打断
- componentDidMount
- componentDidUpdate
- componentWillUnmount

## 为什么叫 Fiber

- 在计算机科学里有个概念叫 Fiber(纤维)，意指比线程还要更细的线，也就是比线程控制得更加精细的并发处理机制
