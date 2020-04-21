# 命令模式(Command Pattern)

- 将请求(命令)封装为一个对象，这样可以使用不同的请求参数化其他对象(将不同请求依赖注入到其他对象)，并且能够支持请求(命令)的排队执行，记录日志、撤销等(附加控制)功能
- 最核心的实现手段，是将函数封装成对象，在很多编程语言中，函数不能作为参数传递

## 应用场景

1. 控制命令的执行，比如异步、延迟、排队执行命令、撤销重做命令、存储命令

## 应用示例

- 游戏开发，游戏本身的复杂度集中在客户端，后端基本上只负责数据(比如积分、生命值、装备)的更新和查询
- 为了提高后端性能，一般会把游戏中玩家的信息保存在内存中，在游戏进行的过程中，只更新内存中的数据
- 游戏结束之后，再将内存中的数据存档，也就是持久化到数据库中
- 一般来说，同一个游戏场景里的玩家，会被分配到同一台服务上。这样，一个玩家拉取同一个游戏场景中的其他玩家的信息，就不需要跨服务器去查找了
- 游戏客户端和服务器之间的数据交互比较频繁，为了节省网络连接建立的开销，一般采用长连接的方式通信。
- 客户端发给服务器的请求，一般都包含两部分内容：指令(事件)和数据

```ts
interface Command {
  execute();
}
class GotDiamondCommand implements Command {
  constructor(data) {}
  execute() {
    // 执行相应的逻辑
  }
}
// GotStartCommand/ HitObstacleCommand/ ArchiveCommand

class GameApplication {
  MAT_HANDLED_REQ_COUNT_PER_LOOP = 100;
  queue = [];

  mainLoop() {
    while (true) {
      const requests = [];
      for (const req of requests) {
        const event = req.event;
        let command = null;
        if (event === Event.GOT_DIAMOND) {
          command = new GotDiamondCommand(req.data);
        } else if (event === Event.GOT_START) {
          command = new GotStartCommand(req.data);
        }
        // ...
        queue.add(command);
      }

      let handledCount = 0;
      while (handledCount < MAT_HANDLED_REQ_COUNT_PER_LOOP) {
        if (!queue.length) break;
        const command = queue.shift();
        command.execute();
      }
    }
  }
}
```

## 命令模式 VS 策略模式 VS 工厂模式

1. 策略模式侧重“策略”或“算法”这个特定的应用场景，用来解决根据运行时状态从一组策略中选择不同策略的问题
2. 工厂模式侧重封装对象的创建过程，这里的对象没有任何业务场景的限制，可以是策略，也可以是其它的
3. 策略模式中，不同的策略具有相同的目的、不同的实现、相互之间可以替换，比如 BubbleSort，SelectionSort 都是为了实现排序的
4. 命令模式中，不同的命令具有不同的目的，对应不同的处理逻辑，并且相互之间不可替换
