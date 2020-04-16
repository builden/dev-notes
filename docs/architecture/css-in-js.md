# CSS-in-JS 方案

## 1. 默认方式

1. 不支持伪类，伪元素，后代选择器，媒体查询等

```js
import React from 'react';
const style = {
  color: 'red',
};
export default () => <div style={style}>red color font</div>;
```

## 2. CSS Modules

- 在`create-react-app`项目中默认开启了这个选项
- 只需要在样式文件名中有 module 后缀就可以，如： `xxx.module.css`

```js
import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';
export default () => {
  // 复杂的样式可以借助 classnames 库处理
  // const cls = cx('other', styles.btn);
  // return <div className={cls}>button</div>;
  return <div className={style.btn}>button</div>;
};
```

## 3. [styled-components](https://github.com/styled-components/styled-components)

```js
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>;
```

## 4. [emotion](https://emotion.sh/docs/introduction)

- 2019 的下载量首度超过 styled-components

```bash
$ yarn add @emotion/core -D
$ yarn add babel-plugin-emotion -D
```

<code src="./Emotion.jsx" />
