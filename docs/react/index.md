---
title: React
nav:
  title: React
  order: 9
---

React 是用于构建数据会随着时间改变的大型应用

## React 核心原理

### Virtual DOM

- 直接操作 DOM 是比较昂贵的
- Virtual DOM 是一个轻量级的对 DOM 的描述，通过 diff 算法比较哪些 DOM 需要改变

### Diff 算法 O(n)

1. 同层比较，如果同一位置不一致，则直接删除
2. 同一层次的一组节点，通过 key 来区分，减少重建

### Component

1. DOM 中的节点被称为元素
2. Virtual DOM 中的节点被称为 Component
