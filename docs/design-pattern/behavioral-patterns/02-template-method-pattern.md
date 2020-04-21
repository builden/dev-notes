# 模板方法模式(Template Method Pattern)

- 在一个方法中定义一个算法骨架，并将某些步骤推迟到子类中实现
- 模板方法模式可以让子类在不改变算法整体结构的情况下，重新定义算法中的某些步骤
- 这里的“算法”，可以理解为广义上的“业务逻辑”
- 这里的“算法骨架”就是模板

## 主要作用

### 1. 复用

- 子类都可以复用父类模板方法中定义的流程代码

### 2. 扩展

- 这里说的扩展性，不是指代码的扩展性，而是指框架的扩展性
- 模板模式常用在框架的开发中，让框架用户可以在不修改框架源码的情况下，定制化框架的功能

## 应用场景

- 常见的框架基本上都可以认为是运用的模板方法，如 React, Jest, Egg.js 等

### 极简示例

```ts
// 模板方法吧一个算法中不变的流程抽象到了父类的模板方法templateMethod()中
// 可变的部分method1(), method2()留给子类来实现
// 所有的子类都可以【复用】父类模板方法定义的流程代码
abstract class AbstractClass {
  templateMethod() {
    this.method1();
    this.method2();
  }

  abstract method1();
  abstract method2();
}

class ConcreteClass1 extends AbstractClass {
  method1() {}
  method2() {}
}

const demo = ConcreteClass1();
demo.templateMethod();
```

### koa-mini

```ts
const http = require('http');
const compose = require('koa-compose');
class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
}

class Application {
  middleware = [];
  constructor() {}
  listen(...args) {
    const server = http.createServer(async (req, res) => {
      const ctx = new Context(req, res);
      const fn = compose(this.middleware);
      await fn(ctx);
      ctx.res.end(ctx.body || 'Not Found');
    });
    server.listen(...args);
  }
  use(fn) {
    this.middleware.push(fn);
  }
}

module.exports = Application;

// app.js
const Koa = require('koa-mini');
const app = new Koa();
app.use(async (ctx, next) => {
  console.log('req beg');
  await next();
  console.log('req end');
});
app.listen(3000);
```

## 模板模式 VS 回调

- 回调和模板模式一样，也具有复用和扩展的功能
- 从应用场景看：同步回调看起来更像模板模式，异步回调看起来更像观察者模式
- 回调基于组合关系来实现，把一个对象传递给另一个对象，是一种对象之间的关系
- 模板模式基于继承关系来实现，子类重写父类的抽象方法，是一种类之间的关系
