# 实现水平垂直居中布局

## flex 大法

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

```html
<div class="container">
  <div>item</div>
</div>
```

## 绝对定位方式且已知宽高

```css
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -3em;
  margin-left: -7em;
  width: 14em;
  height: 6em;
}
```

## 绝对定位 + 未知宽高 + translate

```css
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

## 水平居中

```css
.middle {
  margin: 0 auto;
}
```
