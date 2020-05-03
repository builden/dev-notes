# 状态模式 (State Pattern)

## 有限状态机，简称状态机 (Finite State Machine, FSM)

- 状态(State)
- 事件(Event): 事件触发状态的迁移及动作的执行，动作不是必须的，又称转移条件(Transition Condition)
- 动作(Action)

## 应用场景

1. 像游戏这种比较复杂的状态机，包含的状态比较多，优先推荐使用查表法，状态模式会引入非常多的状态类，导致代码难以维护
2. 像电商下单、外卖下单这种类型的状态，状态并不多，状态迁移也比较简单，但事件触发执行的动作包含的业务逻辑可能会比较复杂，推荐用状态模式来实现

## 示例：马里奥

### 状态

1. 小马里奥 - Small Mario
2. 超级马里奥 - Super Mario
3. 火焰马里奥 - Fire Mario
4. 斗篷马里奥 - Cape Mario

### 事件

1. 吃了蘑菇
2. 获得斗篷
3. 获得火焰
4. 遇到怪物

### 动作

- 增减积分

## 分支逻辑法

```ts
// 按照状态图直接翻译，适合简单的状态机
// 代码中充斥条件分支判断，可读性和可维护性都很差
const STATE = {
  SMALL: 0,
  SUPER: 1,
  FIRE: 2,
  CAPE: 3,
};
class MarioStateMachine {
  score = 0;
  currState = STATE.SMALL;
  // 获得模块
  obtainMushRoom() {
    if (this.currState === STATE.SMALL) {
      this.currState = STATE.SUPER;
      this.score += 100;
    }
  }
  // 获得斗篷
  obtainCape() {
    if ([STATE.SMALL || STATE.SUPER].includes(this.currState)) {
      this.currState = STATE.CAP;
      this.score += 200;
    }
  }
  // 获得火焰
  obtainFireFlower() {
    if ([STATE.SMALL || STATE.SUPER].include(this.currState)) {
      this.currState = STATE.FIRE;
      this.score += 300;
    }
  }
  // 遇到怪物
  meetMonster() {
    if (this.currState === STATE.SUPER) {
      this.currState = STATE.SMALL;
      this.score -= 100;
    } else if (this.currState === STATE.CAP) {
      this.currState = STATE.SMALL;
      this.score -= 200;
    } else if (this.currState === STATE.FIRE) {
      this.currState = STATE.SMALL;
      this.score -= 300;
    }
  }
}
```

## 查表法

|       | ObtainMushRoom | ObtainCap | ObtainFireFlower | MeetMonster |
| ----- | -------------- | --------- | ---------------- | ----------- |
| Small | Super/+100     | Cape/+200 | Fire/+300        | /           |
| Super | /              | Cape/+200 | Fire/+300        | Small/-100  |
| Cape  | /              | /         | /                | Small/-200  |
| Fire  | /              | /         | /                | Small/-300  |

```ts
// 用二维表表示状态
// 适合状态比较多，动作简单的状态机，如游戏
const EVENT = {
  GOT_MUSH_ROOM: 0,
  GOT_CAPE: 1,
  GOT_FIRE: 2,
  MET_MONSTER: 3,
};
const transitionTable = [
  [SUPER, CAPE, FIRE, SMALL],
  [SUPER, CAPE, FIRE, SMALL],
  [CAPE, CAPE, CAPE, SMALL],
  [FIRE, FIRE, FIRE, SMALL],
];
const actionTable = [
  [+100, +200, +300, +0],
  [+0, +200, +300, -100],
  [+0, +0, +0, -200],
  [+0, +0, +0, -300],
];

class MarioStateMachine {
  score = 0;
  currState = STATE.SMALL;
  obtainMushRoom() {
    this.executeEvent(EVENT.GOT_MUSH_ROOM);
  }
  obtainCape() {
    this.executeEvent(EVENT.GOT_CAPE);
  }
  obtainFireFlower() {
    this.executeEvent(EVENT.GOT_FIRE);
  }
  meetMonster() {
    this.executeEvent(EVENT.MET_MONSTER);
  }
  executeEvent(event) {
    this.currState = transitionTable[this.currState][event];
    this.score = actionTable[this.currState][event];
  }
}
```

## 状态模式

```ts
// 适合状态比较少，状态转移也比较简单，但事件触发触发执行的动作包含的业务逻辑可能比较复杂
// 状态类不用处理所有的事件，可以引入抽象类实现默认实现，状态类只实现需要的事件
interface IMario {
  obtainMushRoom(stateMachine);
  obtainCape(stateMachine);
  obtainFireFlower(stateMachine);
  meetMonster(stateMachine);
}
class SmallMario implements IMario {
  static instance = new SmallMario();
  static getInstance() {
    return SmallMario.instance;
  }
  obtainMushRoom(stateMachine) {
    stateMachine.setCurrState(SuperMario.getInstance());
    stateMachine.setScore(stateMachine.getScore() + 100);
  }
  obtainCape(stateMachine) {
    stateMachine.setCurrState(CapeMario.getInstance());
    stateMachine.setScore(stateMachine.getScore() + 200);
  }
  obtainFireFlower(stateMachine) {
    stateMachine.setCurrState(FireMario.getInstance());
    stateMachine.setScore(stateMachine.getScore() + 300);
  }
  meetMonster(stateMachine) {
    // do nothing
  }
}
// 省略 SuperMario, CapeMario, FireMario
class MarioStateMachine {
  score = 0;
  currState = SmallMario.getInstance();
  obtainMushRoom() {
    this.currState.obtainMushRoom(this);
  }
  obtainCape() {
    this.currState.obtainCape(this);
  }
  obtainFireFlower() {
    this.currState.obtainFireFlower(this);
  }
  meetMonster() {
    this.currState.meetMonster(this);
  }
  setScore(score) {
    this.score = score;
  }
  setCurrState(currState) {
    this.currState = currState;
  }
}
```

## [xstate](https://github.com/davidkpiano/xstate)

### 有限状态机(Finite State Machine)

### 分层状态机(Hierarchical/Nested State Machine)

### 并行状态机(Parallel State Machine)

### 历史状态(History State)
