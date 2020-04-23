# flex

## 容器 container

```css
.container {
  display: flex;
}
```

### 容器的属性

1. flex-direction: 主轴方向；
   1. row (default): 主轴为水平方向，起点在左端
   2. row-reverse: 主轴为水平方向，起点在右端
   3. column: 主轴为垂直方向，起点在上沿
   4. column-reverse
2. flex-wrap: 是否换行
   1. nowrap (default): 不换行
   2. warp: 换行，第一行在上方
   3. wrap-reverse: 第一行在下方
3. flex-flow: => flex-direction || flex-wrap
4. justify-content: 主轴(main axis) 上的对齐方式
   1. flex-start (default): 左对齐
   2. flex-end: 右对齐
   3. center: 居中
   4. space-between: 两端对齐，项目之间的间隔都相等
   5. space-around: 每个项目两端的间隔相等
5. align-items: 交叉轴(cross axis) 上的对齐方式
   1. flex-start: 交叉轴的起点对齐
   2. flex-end: 交叉轴的终点对齐
   3. center: 居中
   4. baseline: 项目的第一行文字的基线对齐
   5. stretch (default): 如果项目未设置高度或者设为 auto,将占满整个容器的高度
6. align-content: 定义了多根轴线的对齐方式，如换行了，就有多根主轴
   1. flex-start: 与交叉轴的起点对齐
   2. flex-end: 与交叉轴的终点对齐
   3. center: 与交叉轴的中点对齐
   4. space-between: 与交叉轴两端对齐，轴线之前的间隔平均分布
   5. space-around: 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
   6. stretch (default): 轴线占满整个交叉轴

## 项目 items

### 项目的属性

1. order: 定义项目的排序顺序，数值越小，排列越靠前，默认为 0
2. flex-grow: 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大
   1. 如果所有的项目都设为 1，则它们将等分剩余空间
3. flex-shrink: 定义项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小
   1. 如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。
   2. 如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小
4. flex-basis: 定义在分配多余空间之前，项目占据的主轴空间。默认值是 auto，即项目的本来大小
5. flex: => flex-grow || flex-shrink || flex-basis
   1. auto: (1 1 auto)
   2. none: (0 0 auto)
6. align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性
