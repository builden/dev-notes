# 备忘录模式(Memento Pattern)

- 也叫快照模式(Snapshot Pattern)
- 在`不违背封装原则`的前提下，捕获一个对象的内容状态，并在该对象之外保存这个状态，以便之后恢复对象为先前的状态

## 应用场景

1. 用来防丢失
2. 撤销、恢复

## 应用示例

```ts
class Snapshot {
  #text = '';
  constructor(text) {
    this.#text = text;
  }
  getText() {
    return this.#text;
  }
}
class SnapshotHolder {
  snapshots = [];
  popSnapshot() {
    return this.snapshots.pop();
  }
  pushSnapshot(snapshot) {
    this.snapshots.push(snapshot);
  }
}
class InputText {
  #text = '';
  getText() {
    return this.#text;
  }
  append(input) {
    this.#text += input;
  }
  createSnapshot() {
    return new Snapshot(this.#text);
  }
  restoreSnapshot(snapshot) {
    this.#text = snapshot.getText();
  }
}

const snapshotHolder = new SnapshotHolder();
const inputText = new InputText();
snapshotHolder.pushSnapshot(inputText.createSnapshot());
inputText.append('data');

// undo
const snapshot = snapshotHolder.popSnapshot();
inputText.restoreSnapshot(snapshot);
```
