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
  -webkit-box-orient: vertical;
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="LYppwBy" src="https://codepen.io/builden/embed/LYppwBy?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/builden/pen/LYppwBy'>LYppwBy</a> by builden
  (<a href='https://codepen.io/builden'>@builden</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
