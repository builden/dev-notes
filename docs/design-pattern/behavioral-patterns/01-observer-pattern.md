# 观察者模式(Observe Pattern)

- 又称`发布订阅模式(Publish-Subscribe Design Pattern)`
- 是一种一对多的关系
- 是将`观察者(Observe)`和`被观察者(Observable)`代码解耦

## 应用场景

### Node.js 中的 EventEmitter

- 是一种同步阻塞的方式

```ts
const defaultMaxListeners = 0; // 默认最大监听数，为了防止内存泄露
class EventEmitter {
  _events = Object.create(null); // 空对象
  _count = defaultMaxListeners;
  on(type, callback) {
    if (this._events[type]) {
      this._events[type].push(callback);
    } else {
      this._events[type] = [callback];
    }
    if (this._events.length > this._count) {
      console.error('MaxListenersExceededWarning');
    }
  }
  once(type, callback) {
    let wrap = (...args) => {
      callback(...args);
      this.removeListener(type, wrap);
    };
    wrap.realCallback = callback;
    this.on(type, wrap);
  }
  removeListener(type, callback) {
    if (this._events[type]) {
      this._events[type] = this._events[type].filter((fn) => {
        return fn !== callback && fn !== callback.realCallback;
      });
    }
  }
  removeAllListeners(type) {
    if (type) {
      this._events[type] = [];
    } else {
      this._events = Object.create(null);
    }
  }
  emit(type, ...args) {
    if (this._events[type]) {
      this._events[type].forEach((fn) => fn.call(this, ...args));
    }
  }
}
```

### 商城系统中的注册逻辑

在很多商城系统中，经常有这样的逻辑，用户注册成功后，会送一些体验金、优惠券等。如果把这些逻辑都直接登录逻辑里面，违法了单一职责原则，不利于扩展和修改

### 其它应用场景

1. 邮件订阅
2. RSS Feeds
3. 中间件消息队列(Kafka, ActiveMQ 等)

## 类型

1. 同步阻塞的实现方式：(经典)主要为了代码解耦
2. 异步非阻塞的实现方式：除了能实现代码解耦，还能提高代码的执行效率
3. 进程内的实现方式
4. 跨进程的实现方式：一般是基于消息队列来实现
