# 解释器模式(Interpreter Pattern)

- 为某个语言定义它的语法表示，并定义一个解释器用来处理这个语法

## 应用场景

1. 编译器
2. 规则引擎
3. 正则表达式

## 实战举例

### 自定义接口告警规则功能

比方说一段文本来表示告警规则`api_error_per_minute > 100 || api_count_per_minute > 10000`
