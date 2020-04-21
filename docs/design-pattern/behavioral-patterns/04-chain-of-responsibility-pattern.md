# 职责链模式(Chain of Responsibility Pattern)

- 将请求的发送和接收解耦，让多个接收对象都有机会处理这个请求
- 将这些接收对象串成一个条链，并沿着这条链
- 链条上每个处理器各自承担各自的处理职责

## 应用场景

### HTTP 过滤器 Filter

- 实现对 HTTP 请求的过滤，比如鉴权，限流，记录日志，验证参数等
- 支持双向拦截，既能拦截客户端发来的请求，也能拦截发送给客户端的响应

### HTTP 拦截器 Interceptor

- 在 Spring Servlet 中，Interceptor 和 Filter 非常类似，都是拦截 HTTP 的请求和响应
- 请求流程是处理完 Filter 之后再处理 Interceptor，最后进入业务逻辑
- 和 Filter 的区别在于把请求和响应的拦截拆成了两个函数
- 是面向切面编程中的一种应用

### 敏感词过滤

- 对于 UGC(User Generated Content 用户生产内容)的应用(比如论坛)来说，用户生成的内容，可能会包含一些敏感词。
- 处理方式 1：直接禁止发布，一旦某个处理器能处理这个请求，就不继续了
- 处理方式 2：给敏感词打马赛克，请求不会中途终止传递，而是被每一个处理器都处理一遍

## 极简示例

```ts
// 结合模板模式
abstract class Handler {
  successor = null;
  setSuccessor(successor) {
    this.successor = successor;
  }
  handle() {
    const handled = doHandle();
    if (this.successor && !handled) {
      this.successor.handle();
    }
  }
  abstract doHandle();
}
class HandlerA extends Handler {
  doHandle() {
    let handled = false;
    // ...
    return handled;
  }
}
class HandlerB extends Handler {
  doHandle() {
    let handled = false;
    // ...
    return handled;
  }
}
// 链表的方式，也可以使用数组的方式
class HandlerChain {
  head = null;
  tail = null;
  addHandler(handler) {
    handler.setSuccessor(null);
    if (!this.head) {
      this.head = this.tail = handler;
      return;
    }
    this.tail.setSuccessor(handler);
    this.tail = handler;
  }

  handle() {
    if (!this.head) {
      this.head.handle();
    }
  }
}

const chain = new HandlerChain();
```

## koa 的洋葱模型其实也是一种职责链

```ts
function compose(middleware) {
  // middleware必须是数组，里面元素必须是函数
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!');
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!');
  }

  return function (context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

// 测试用例
const mw = [];
mw.push(async (context, next) => {
  context.arr.push(1);
  await wait(1);
  await next();
  await wait(1);
  context.arr.push(6);
});

mw.push(async (context, next) => {
  context.arr.push(2);
  await wait(1);
  await next();
  await wait(1);
  context.arr.push(5);
});

mw.push(async (context, next) => {
  context.arr.push(3);
  await wait(1);
  await next();
  await wait(1);
  context.arr.push(4);
});

const fn = compose(mw);
const ctx = { arr: [] };
const result = await fn(ctx);
// result: [1, 2, 3, 4, 5, 6]
```
