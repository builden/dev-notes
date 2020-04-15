---
title: 动效
nav:
  title: 动效案例
  order: 5
---

## 常用 React 动画库

- [motion](https://www.framer.com/motion/)
- [ant-motion](https://github.com/ant-design/ant-motion) - 官网很强大，除了有案例，还会讲清楚动效设计原则
- [react-spring](https://github.com/react-spring/react-spring)

## 常用 JS 动画库

- [anime](https://github.com/juliangarnier/anime) - 有很好的案例展示页面
- [lottie](https://github.com/airbnb/lottie-web) - Airbnb 出品，可以通过 Adobe Effects 导出动画
- [mojs](https://github.com/mojs/mojs)

## CSS 基础动画库

- [animate.css](https://github.com/daneden/animate.css)

## 常用术语

- animation: 动画，一般指的是动画片里那种一帧一帧的动画
- keyframe: 关键帧
- spring: 弹簧，弹力
- ease: v. 缓动(缓慢的动)
- transition: 过渡，转变
- transform: 转换
- motion: 运动，移动，动作
- tween: 之间
- keyframe: 关键帧
- duration: 持续时长
- stagger: 摇晃，摇摆，震惊
- reverse: 反转

## CSS 中动画相关属性

### animation

> animation: name duration timing-function delay iteration-count direction;

1. animation-name: 需绑定到选择器的 `@keyframe` 名称
2. animation-duration: 规定完成动画所花费的时间，以秒或毫秒计，默认值是 0 不播放
3. animation-timing-function: 规定动画的速度曲线。实际是使用`三次贝塞尔曲线函数`
   1. linear: 线性动画，从头到尾的速度是一样的 `cubic-bezier(0,0,1,1)`
   2. ease: (默认) 动画以低速开始，然后加快，在结束前变慢 `cubic-bezier(0.25,0.1,0.25,1)`
   3. ease-in: 动画以低速开始 `cubic-bezier(0.42,0,1,1)`
   4. ease-out: 动画以低速结束 `cubic-bezier(0,0,0.58,1)`
   5. ease-in-out: 动画以低速开始和结束 `cubic-bezier(0.42,0,0.58,1)`
   6. cubic-bezier(n,n,n,n)
4. animation-delay: 规定动画开始之前的延迟，如果是负数，动画会从中间开始播
5. animation-iteration-count: 规定动画应该播放的次数，默认值是 1，`n | infinite`
6. animation-direction: 规定是否应该轮流反向播放动画

### 三次贝塞尔曲线 cubic-bezier

### transition

> transition: property duration timing-function delay;

1. transition-property: 规定设置过渡效果的 CSS 属性的名称
   1. none:
   2. all: 只要是可过渡的属性，都会有过渡效果
   3. property: 如 transform, opacity, color, left, right
2. transition-duration: 规定完成过渡效果需要多少秒或毫秒
3. transition-timing-function: 规定速度效果的速度曲线
4. transition-delay: 定义过渡效果何时开始

### transform

> transform: none|transform-functions;

1. matrix(n,n,n,n,n,n): 2d 转换
2. matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n): 3d 转换
3. translate(x,y): 移动
4. scale(x,y): 缩放
5. rotate(angle): 选择
6. skew(x-angle,y-angle): 扭曲，倾斜转换
7. perspective(n): 为 3D 转换元素定义透视视图

> transform-origin: x-axis y-axis z-axis;

1. x-axis: left | center | right | length | %
2. y-axis: top | center | bottom | length | %

## 贝塞尔曲线

- [Tween 演示](https://www.zhangxinxu.com/study/201612/how-to-use-tween-js.html)
- Chrome Dev Tools 中，就可以看到 ease 各个函数的效果，查看 transition 的属性
- [贝塞尔曲线图形化工具](https://cubic-bezier.com/)
- [d3-ease 动画图形化工具](https://observablehq.com/@d3/easing-animations?collection=@d3/d3-ease)
- [d3-ease 曲线图形化工具](https://observablehq.com/@d3/easing?collection=@d3/d3-ease)
- [贝塞尔曲线与 CSS3 动画、SVG 和 canvas 的基情](https://www.zhangxinxu.com/wordpress/2013/08/%e8%b4%9d%e5%a1%9e%e5%b0%94%e6%9b%b2%e7%ba%bf-cubic-bezier-css3%e5%8a%a8%e7%94%bb-svg-canvas/)
