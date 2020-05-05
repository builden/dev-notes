# 工厂模式(Factory Pattern)

## 1. 简单工厂(用的最多)

- 在 GoF 的《设计模式》书中，将简单工厂看作是工厂方法模式的一种特例
- 又叫静态工厂方法模式，因为创建对象的方法是静态的

```ts
// 如果对象是无状态的，可以用下面这种方式，提前创建好对象
// 如果对象是有状态的，则需要动态创建一个新对象
// 如果为了节约内存，还可以改成`懒汉式`创建方式，延迟加载
class RuleConfigParserFactory {
  static cacheParsers = {
    json: new JsonRuleConfigParser(),
    xml: new XmlRuleConfigParser(),
    yaml: new YamlRuleConfigParser(),
  };
  static createParser(configFormat) {
    return RuleConfigParserFactory.cacheParsers[configFormat];
  }
}
```

## 2. 工厂方法

```ts
interface IRuleConfigParserFactory {
  createParser();
}
class JsonRuleConfigParserFactory implements IRuleConfigParserFactory {
  createParser() {
    return new JsonRuleConfigParser();
  }
}
// XmlRuleConfigParser, YamlRuleConfigParser
// 当新增一种parser时，只需要新增一个实现了IRuleConfigParserFactory接口类
```

## 3. 抽象工厂

```ts
interface IConfigParserFactory {
  createRuleParser();
  createSystemParser();
}
class JsonConfigParserFactory implements IConfigParserFactory {
  createRuleParser() {
    return new JsonRuleConfigParser();
  }
  createSystemParser() {
    return new JsonSystemConfigParser();
  }
}
// XmlRuleConfigParser, YamlRuleConfigParser
// 当新增一种parser时，只需要新增一个实现了IRuleConfigParserFactory接口类
```

## 依赖注入框架(DI 容器 Dependency Injection Container)

### 工厂模式 VS DI 容器

- DI 容器底层最基本的设计思路就是基于工厂模式的
- DI 容器相当于一个大的工厂类，负责在程序启动时，根据配置(要创建哪些类对象，每个类对象的创建需要依赖哪些其他类对象)事先创建好对象
- 当应用程序需要使用某个类对象的时候，直接从容器中获取，因为它持有一堆对象，所以这个框架才被成为容器

### 核心功能

1. 配置解析
2. 对象创建
3. 对象生命周期管理
