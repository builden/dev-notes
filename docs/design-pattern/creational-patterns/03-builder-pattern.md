# 建造者模式(Builder Pattern)

## 应用场景

1. 对象有很多需要配置的参数，

## 极简示例

```ts
class ResourcePoolConfig {
  constructor(builder) {
    this.name = builder.name;
    this.maxTotal = builder.maxTotal;
    this.maxIdle = builder.maxIdle;
    this.minIdle = builder.minIdle;
  }
}

class Builder {
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
}

const builder = new Builder()
  .setName('db')
  .setMaxTotal(15)
  // ...
  .build();
const config = new ResourcePoolConfig(builder);
// 也可以考虑把Builder改造成ResourcePoolConfig的静态方法
```
