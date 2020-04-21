# 原生错误

## 1. RangeError (越界错误)

```ts
// 超过数组可以增长到的大小
const arr = [];
arr.length = 99 ** 99;
// Uncaught RangeError: Invalid array length

// 栈溢出
function foo() {
  foo();
}
foo();
// Uncaught RangeError: Maximum call stack exceeded
```

## 2. ReferenceError (引用错误)

当变量不存在时抛出

```ts
console.log(dog);
// Uncaught ReferenceError: dog is not defined
```

## 3. SyntaxError (语法错误)

```ts
let cat dog = "cat";
// Uncaught SyntaxError: Unexpected identifier
```

## 4. TypeError (类型错误)

```ts
const num = 123;
num.toUpperCase();
// Uncaught TypeError: num.toUpperCase is not a function
```

## 5. URIError (资源定位符错误)

```ts
decodeURI('%');
// Uncaught URIError: URI malformed at decodeURI
```
