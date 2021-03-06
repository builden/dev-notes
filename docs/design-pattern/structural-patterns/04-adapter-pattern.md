# 适配器模式(Adapter Pattern)

- 可以看做一种“补偿模式”，用来补救设计上的缺陷
- 将不兼容的接口转换为可兼容的接口

## 应用场景

1. 封装有缺陷的接口设计
2. 统一多个类的接口设计
3. 替换依赖的外部系统
4. 兼容老版本接口
5. 适配不同格式的数据

## 两种实现方式

### 类适配器

- 使用继承关系来实现
- 如果 Adaptee 和 ITarget 的接口定义大部分相同，推荐用这种方式，Adaptor 的代码量要少一些

```ts
interface ITarget {
  f1();
  f2();
  fc();
}
class Adaptee {
  fa() {}
  fb() {}
  fc() {}
}
class Adaptor extends Adaptee implements ITarget {
  f1() {
    super.fa();
  }
  f2() {
    super.fb();
  }
}
```

### 对象适配器

- 使用组合关系来实现
- 如果 Adaptee 和 ITarget 的接口定义大部分都不相同，组合结构相对于继承更加灵活

```ts
class Adaptor implements ITarget {
  adaptee = null;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  f1() {
    adaptee.fa(); // 委托给了Adaptee
  }
  f2() {
    adaptee.fb();
  }
  fc() {
    adaptee.fc();
  }
}
```

## 代理、桥接、装饰器、适配器 4 种模式的区别

- 它们都可以成为 Wrapper 模式，也就是通过 Wrapper 类二次封装原始类

### 代理模式

代理模式在不改变原始接口类模式的条件下，为原始类定义一个代理类，主要目的是控制访问，而非加强功能，这是它跟装饰器模式最大的不同

### 桥接模式

桥接模式的目的是将接口部分和实现部分分离，从而让它们可以较为容易、也相对独立地加以改变

### 装饰器模式

装饰器模式在不改变原始类接口的情况下，对原始类功能进行增强，并且支持多个装饰器的嵌套使用

### 适配器模式

适配器模式是一种事后的补救策略。适配器提供跟原始类不同的接口，而代理模式、装饰器模式提供的都是跟原始类相同的接口
