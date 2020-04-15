# IOS 移动端缓动不流畅

在 IOS 中默认设置 overflow:hidden，滚动有卡顿，没有滑动惯性效果

## CSS 样式设置

```css
body {
  overflow: auto; /* 用于 android4+，或其他设备 */
  -webkit-overflow-scrolling: touch; /* 用于 ios5+ */
}
```

## 说明

- -webkit-overflow-scrolling: touch; 当手指从触摸屏上移开，会保持一段时间的滚动
- -webkit-overflow-scrolling: auto; 当手指从触摸屏上移开，滚动会立即停止
