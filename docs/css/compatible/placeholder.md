# 控制 input 的 shadow-dom

## 修改默认占位符样式

```css
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
  text-overflow: ellipsis;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
  text-overflow: ellipsis;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
  text-overflow: ellipsis;
}

template {
  /* 部分浏览器的template会显示出来，要隐藏 */
  display: none;
}
```
