# 门面模式(Facade Pattern)

- 也叫外观模式，解决的是接口粒度的问题
- 为子系统提供一组统一的接口，定义一组高层接口让子系统更易用
- 有点类似迪米特法则(最小知识原则)和接口隔离原则

## 解决的问题

1. 为了保证接口的可复用性(或者叫通用性)，我们需要将接口接口尽量设计得细粒度一点，职责单一一点。但是，如果接口的粒度过小，在接口的使用者开发一个业务功能时，就会导致需要调用 n 多细粒度的接口才能完成。调用者肯定会抱怨接口不好用
2. 如果接口粒度设计得太大，一个接口返回 n 多数据，要做 n 多事情，就会导致接口不够通用，可复用性不好。接口不可复用，针对不同的调用者的业务需求，就需要开发不同的接口来满足，就会导致系统的接口无限膨胀

## 应用场景

- 主要在接口设计方面使用

### 1. 解决易用性问题

两个有交互的系统，只暴露有限的必要的接口

### 2. 解决性能问题

通过将多个接口调用替换成一个门面接口调用，减少网络通信成本，如 GraphQL

### 3. 解决分布式事务问题

在一个金融系统中，有两个业务领域模型，用户和钱包，这两个业务领域模型都对外暴露了一系列接口，比如用户、钱包的增删改查接口。假设有这样一个业务场景：在用户注册的时候，我们不仅会创建用户(在数据库 User 表中)，还会给用户创建一个钱包(在数据库的 Wallet 表中)

创建用户和钱包的两个操作，要么都成功，要么都失败。设计一个包裹这两个操作的新接口，让新接口在一个事务中执行两个 SQL 操作