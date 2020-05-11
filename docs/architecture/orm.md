# ORM(Object-Relational Mapping)

- 对象关系映射
- 作用是在关系型数据库和对象之间做一个映射，这样在具体操作数据库的时候，就不需要和复杂的 SQL 打交道
- 将面向对象语言程序中的对象自动持久化到关系数据库中

## 映射关系

- 数据库的表(Table) => 类(Class)
- 记录(Record) => 对象(Object)
- 字段(Field) => 属性(Attribute)

## TypeORM

- Node.js 里最好用的 ORM 库
- 支持 mysql, mariadb, postgres, sqlite, mssql or oracle 等关系型数据库

```ts
// ./entity/Photo.ts
// Modal定义
import { Table, Column, PrimaryGeneratedColumn } from 'typeorm';

@Table()
export class Photo {
  // 自增主键
  // <=> @PrimaryColumn("int", { generated: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  fileName: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
```
