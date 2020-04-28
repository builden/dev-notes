# 迭代器模式(Iterator Pattern)

- 解耦集合类(容器)和遍历操作类

## 应用场景

1. 遍历集合对象，如 Array, Map, Set, Vector, Linked List, Tree, Graph, Skip Table 等等
2. 在 JS 中 `forEach, for of`内部就是用的迭代器
3. generator 函数的返回值也是一个 iterator 对象

## JS 中实现 Iterator

```ts
function makeIterator(arr) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < arr.length
        ? { value: arr[nextIndex++], done: false }
        : { value: undefined, done: true };
    },
  };
}

// 在对象中增加Iterator
const obj = {
  name: 'builden',
  age: 30,
  job: 'developer',
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < keys.length
          ? { value: this[keys[nextIndex++]], done: false }
          : { value: undefined, done: true };
      },
    };
  },
};

for (const val of obj) {
  console.log(val); // builden, 30, developer
}
```
