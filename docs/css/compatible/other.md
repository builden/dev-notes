# 其它兼容性问题

## Chrome 内核 fixed 防止抖动

```css
.pf {
  position: fixed;
  -webkit-transform: translateZ(0);
}
```

## 移动端可点击元素去除默认边框

```css
.tap {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

/* 去掉高亮发光 */
input:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-modify: read-write-plaintext-only;
}
```

## 去除 IOS 默认按钮样式

```css
input[type='button'],
input[type='submit'],
input[type='reset'] {
  -webkit-appearance: none;
}

textarea {
  -webkit-appearance: none;
}
```

## 编辑框默认边框会发光

```css
input:focus,
textarea:focus {
  outline: none;
}
```

## 去掉 IE10+ 文本框后面的小叉叉

```css
input::-ms-clear {
  display: none;
}
```

## chrome 出现如下异常

> Unable to preventDefault inside passive event listener due to target begin treated as passive.

```css
* {
  touch-action: pan-y;
}
```
