# 试用

## Button

```jsx
import React, { useCallback } from 'react';
import { Button } from 'zarm';
export default () => {
  const switchTheme = useCallback(() => {
    document.documentElement.style.setProperty('--theme-primary', '#108ee9');
  }, []);
  return (
    <>
      <Button>default</Button>
      <Button theme="primary">primary</Button>
      <Button theme="danger" onClick={switchTheme}>
        切换主题
      </Button>
    </>
  );
};
```
