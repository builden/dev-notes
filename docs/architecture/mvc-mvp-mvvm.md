# MVC MVP MVVM 软件架构

## 概念

- Modal: 模型，数据层，用来存储数据
- View: 视图，展示层，用来展示 UI 界面和响应用户交互
- Controller: 控制。监听模型数据的改变和控制视图行为、处理用户交互
- Presenter:
- ViewModal:

## MVC

- View 会直接从 Modal 中读数据
- 更关注 Modal 的不变
- View 不可避免要包含一些业务逻辑，导致 View 比较难复用

### 缺点

- 相互之间没有严格的界限，很容易就会导致代码混在一起
- jQuery 可以看成 Controller 层的库，可以直接操控 View 的 DOM 的节点
- Controller 会变得越来越沉，维护起来会越来越吃力

## MVP

- 是对 MCV 的改进，解决的什么问题？
- 和 MVC 的区别在于 Presenter 把 View 和 Modal 完全隔开，所有的交互都发生在 Presenter，承载了系统的主要逻辑
- 是一种较严格的分层结构 View > Presenter > Modal

## MVVM

- 是在 MVP 的基础上，又在解决什么问题
- 和 MVC 一样，主要目的是分离 View 和 Modal
- `数据绑定`

### 优点

- 可测试性，开发大部分的 bug 来源于逻辑处理，如果和界面绑在一起，就很难测试，ViewModal 分离了许多逻辑，可以对 ViewModal 独立测试

### 优秀框架

- WPF：微软的 WPF 是最早提出这个概念的框架
- Angular: 双向数据绑定

## Spring 中的概念

### Controller

- 负责接收数据和请求，调用 Service 层实现这个业务逻辑

### Service

- 业务处理，封装 DAO 的操作，使一个方法对外表现为实现一个功能

### Repository(DAO Data Access Object)

- 屏蔽对数据库的直接访问
- 负责与数据打交道，具体到某个表、某个实体的 CRUD

## 贫血模型

- 只包含数据，不包含业务逻辑的类，就叫作贫血模型，数据和业务被分割到不同的类中

## 充血模型

- 数据和业务逻辑被封装到同一个类中
- 把领域层放在 Service 层
