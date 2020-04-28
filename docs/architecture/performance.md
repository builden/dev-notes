# 性能

## 提升性能的方法

从宏观角度来看，提升性能的方法无非两种

### 1. 增加资源 (用更多的计算能力来缩减执行任务的时间，还有就是用空间换时间的算法)

1. 在进程中增加线程
2. 在单机上使用更多的 CPU 和内存
3. 在分布式环境增加更多的机器

### 2. 缩小范围 (针对任务本身)

1. 去掉冗余的流程
2. 尽量不做重复性的工作

## 框架性测试，参考 js-framework-benchmark

### 测试指标

- 以商城为例

1. 初始化: 从进入页面开始到完成 40 个商品的渲染
2. 创建: 页面 load 后创建 40 个商品
3. 增加: 往已创建了 40 个商品的列表中每次增加 20 个商品
4. 部分更新: 在 400 个商品中更新每第 10 个商品
5. 交换: 在 400 个商品中交换其中两个商品的位置
6. 选中: 点击商品图片，改变商品名称的字体颜色

## 参考

- [1][送你一张图，搞懂性能优化，再也不怕面试官拷问](https://juejin.im/post/5e7723636fb9a07cc321675d)
- [2][深入浅出](https://github.com/ljianshu/Blog)
- [3][js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)
- [4][taro-benchmark](https://github.com/NervJS/taro-benchmark)
