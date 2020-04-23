# 格式化上下文(Formatting Context)

- 一个决定如何渲染文档的容器

## BFC (Block Formatting Context)

- 只有 Block-Level 的 Box 参与，如 block, list-item, table

### BFC 的布局规则

1. 内部的 Box 会在垂直方向，一个接一个的放置
2. Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
3. 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
4. BFC 的区域不会与 float box 重叠
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
6. 计算 BFC 的高度时，浮动元素也参与计算

### 哪些元素会生成 BFC

1. 根元素
2. float 属性不为 none
3. position 为 absolute 或 fixed
4. display 为 inline-block, table-cell, table-caption, flex, inline-flex
5. overflow 不为 visible

### BFC 的作用及原理

#### 1. 使用 float 生成自适应两栏布局

#### 2. 清除内部浮动

#### 3. 防止垂直 margin 重叠

## IFC (Inline Formatting Context)

- 只有 Inline-Level 的 Box 参与，如 inline, inline-block, inline-table
