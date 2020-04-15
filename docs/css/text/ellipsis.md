# 文本末尾添加省略号

## 宽度固定，适合单行显示...

```css
.single-line-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## 宽度不固定，适合多行以及移动端显示

```css
.multi-lines-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-origen: vertical;
}
```
