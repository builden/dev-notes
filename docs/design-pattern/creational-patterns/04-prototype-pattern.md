# 原型模式(Prototype Pattern)

JS 就是一种基于原型的面向对象语言

## 应用场景

1. 如果对象的创建成本比较大，而同一个类的不同对象之间差别不大，我们可以利用已有对象(原型)进行复制的方式来创建新对象，以达到节省创建时间的目的
2. clone，包含深拷贝和浅拷贝

## 为什么“对象的创建成本比较大”？

1. 创建对象包含申请内存，给成员变量赋值这一过程，本身这一过程并不会花费多长时间
2. 如果对象中的数据需要经过复杂的计算才能得到(比如排序、计算哈希值)，或者需要从 RPC、网络、数据库、文件系统等非常慢的 IO 中读取

##
