# 是否允许文本复制

## CSS

```css
.disable-select {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
```

## user-select 取值说明

- none: 文本不能被选择
- text: (默认值) 文本可以被选择
- all: 当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素
- element: 可以选择文本，但选择范围受元素边界的约束
