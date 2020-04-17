---
title: UI库
nav:
  title: UI库
  order: 10
---

在实际使用这些 UI 库的过程中遇到的问题和技巧，对官方文档的一个补充

## [zent](https://youzan.github.io/)

- 有赞开源的一个 UI 库
- 有一个微页面编辑组件，但文档太简陋

## [ant-design & ant-design-mobile](https://ant.design/)

- 阿里开源的一个 UI 库
- 阿里开源库最大的特色就是给出使用文档外，还会告诉你为什么这样设计，从中我们可以学到很多东西
- 引入 ant-design 库 js 会增加 1.7M，压缩后 420K 左右；CSS 增加 80K，压缩后 17K 左右
- ant-design-mobile 已经很久没有更新了

## [zarm](https://github.com/ZhongAnTech/zarm)

- 组件比较全的一个移动端 UI 库
- 可以作为 ant-design-mobile 的备选方案
- 引入库 js 会增加 200K，压缩后 70K 左右，css
- [不错的介绍文案](https://segmentfault.com/a/1190000022132142?utm_source=tag-newest)

## 在 dumi 中的使用问题

1. 同时安装多个库(如同时安装 zent, antd)默认会冲突，尝试安装`@umijs/plugin-sass`解决
2. 目前 zent 无法使用 babel-plugin-zent 插件，会导致无法编译
3. babel-plugin-import 没有起效果，导致压缩包变得很大
