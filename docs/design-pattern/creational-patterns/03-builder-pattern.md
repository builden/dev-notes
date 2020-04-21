# 建造者模式(Builder Pattern)

## 应用场景

1. 对象有很多需要配置的参数，构造函数的参数列表会变得很长，代码在可读性和易用性上都会变差。很容易搞错参数的顺序，传递进错误的参数值，导致非常隐蔽的 bug
2. 使用 set 的方式给成员变量赋值，替代冗长的构造函数，没法设置必填项，如果必填项都放在构造函数，又会出现 1 中的问题
3. 我们希望类对象是不可变对象，对象在创建之后就不能再修改内部的属性值，这样我们就不能暴露 set 方法

## 极简示例

```ts
class ResourcePoolConfig {
  constructor(builder) {
    this.name = builder.name;
    this.maxTotal = builder.maxTotal;
    this.maxIdle = builder.maxIdle;
    this.minIdle = builder.minIdle;
  }

  static ResourcePoolConfigBuilder = class {
    name = '';
    maxTotal = DEFAULT_MAX_TOTAL;
    maxIdle = DEFAULT_MAX_IDLE;
    minIdle = DEFAULT_MIN_IDLE;

    build() {
      if (!this.name) throw new Error('...');
      if (this.maxIdle > this.maxTotal) throw new Error('...');
      if (this.minIdle > this.maxTotal || this.minIdle > this.maxIdle)
        throw new Error('...');
      return new ResourcePoolConfig(this);
    }
    setName(name) {
      if (!name) throw new Error('...');
      this.name = name;
      return this;
    }
    setMaxTotal(maxTotal) {
      if (maxTotal <= 0) throw new Error('...');
      this.maxTotal = maxTotal;
      return this;
    }
    // ...
  };
}

const config = new ResourcePoolConfig.Builder()
  .setName('db')
  .setMaxTotal(15)
  // ...
  .build();
```

## 建造者模式 VS 工厂模式

- 工厂模式是创建不同但是相关类型的对象(继承同一父类或者接口的一组子类)，由给定的参数决定创建哪种类型的对象
- 建造者模式是用来创建一种类型的复杂对象，通过设置不同的可选参数，“定制化”地创建不同的对象
