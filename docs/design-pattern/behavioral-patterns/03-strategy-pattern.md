# 策略模式(Strategy Pattern)

- 主要作用是解耦策略的定义、创建和使用
- 控制代码的复杂度，让每个部分都不至于过于复杂、代码量过多
- 对于复杂代码来说，策略模式还能让其满足开闭原则，添加新策略的时候，最小化、集中化代码改动，减少引入 bug 的风险

## 应用场景

### 1. 避免冗长的 if-else 或 switch 分支判断

## 策略模式包含三个部分

### 1. 策略的定义

- 一般来说，策略类是无状态的，不包含成员变量，只是纯粹的算法实现，这样的策略对象是可以被共享使用
- 基于此可以用工厂方法先创建好各个策略对象，而不用每次使用的时候创建一个新的策略对象

```ts
interface Strategy {
  algorithmInterface();
}
class ConcreteStrategyA implements Strategy {
  algorithmInterface() {
    // 具体的算法...
  }
}
class ConcreteStrategyB implements Strategy {
  algorithmInterface() {
    // 具体的算法...
  }
}
```

### 2. 策略的创建

- 可以借助反射机制，把策略的创建配置化

```ts
// 如果是无状态的策略类，这个本质上是一种`查表法`
class StrategyFactory {
  static strategies = {
    A: new ConcreteStrategyA(),
    B: new ConcreteStrategyB(),
  };
  static getStrategy(type) {
    if (strategies[type]) throw new Error(`${type} not exist`);
    return strategies[type];
  }
}

// 如果是有状态的策略类
class StrategyFactory {
  static getStrategy(type) {
    if (type === 'A') return new ConcreteStrategyA();
    else if (type === 'B') return new ConcreteStrategyB();
    return null;
  }
}
```

### 3. 策略的使用

- 运行时动态确定使用哪种策略，比如根据配置、用户输入、计算结果等

## 如何消除 if-else

- 订单系统，根据订单类型，使用不同的折扣策略

```ts
// if - else 写法
class OrderService {
  discount(order) {
    let dis = 0;
    if (order.type === OrderType.NORMAL) {
      // 普通订单算法 ...
    } else if (order.type === OrderType.GROUPON) {
      // 团购订单算法 ...
    } else if (order.type === OrderType.PROMOTION) {
      // 促销订单算法 ...
    }
    return dis;
  }
}
```

```ts
// 策略的定义
interface DiscountStrategy {
  calcDiscount(order);
}
// 省略NormalDiscountStrategy, GrouponDiscountStrategy, PromotionDiscountStrategy

// 策略的创建
class DiscountStrategyFactory {
  static strategies = {
    [OrderType.NORMAL]: new NormalDiscountStrategy(),
    [OrderType.GROUPON]: new GrouponDiscountStrategy(),
    [OrderType.PROMOTION]: new PromotionDiscountStrategy(),
  };

  static getDiscountStrategy(type) {
    return strategies[type];
  }
}

// 策略的使用
class OrderService {
  discount(order) {
    return DiscountStrategyFactory.getDiscountStrategy(order.type).calcDiscount(
      order,
    );
  }
}
```
