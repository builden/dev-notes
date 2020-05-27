# 递归(Recursion)

- 递归的实质是能够把一个大问题分解成比它小点的问题，然后拿到了小问题的解，就可以用小问题的解去构造大问题的解
- 当问题小到不能再小的时候，就是零号问题(终止条件) BaseCase

## 解决递归的三个步骤

1. 终止条件: 走到最小的那个问题，能够直接给出结果
2. 拆解: 每一层的问题都要比上一层的小，不断缩小的 size，才能从大到小到终止条件
3. 组合: 得到了小问题的解，还需知道如何才能构造出大问题的解

## 示例

### 斐波那契数列

1. 终止条件: f(0)=0, f(1)=1
2. 分解: f(n-1), f(n-2)
3. 组合: f(n)=f(n-1)+f(n-2)

```js
function fib(n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + f(n - 2);
}
```

## 尾递归 (tail recursion)

- 递归这句话是整个方法的最后一句
- 有的编译器会用 iterative 的方式运行，实际消耗的空间复杂度是 O(1)

## 递归的缺陷

1. 递归很深的时候，容易导致栈溢出，空间复杂度和栈的高度也是相关的

## 递归 VS 动态规划

- 递归是从大到小、层层分解，直到终止条件分解不了了再组合返回上去
- 动态规划是从小到大、记好笔记，不断进步