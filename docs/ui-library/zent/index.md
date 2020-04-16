# 试用

## Button

```jsx
import React from 'react';
import 'zent/css/index.css';
import { Button } from 'zent';

export default () => (
  <>
    <div>
      <Button type="primary">实心按钮</Button>
      <Button type="danger">实心按钮</Button>
      <Button type="success">实心按钮</Button>
      <Button type="warning">实心按钮</Button>
    </div>
    <div style={{ marginTop: '10px' }}>
      <Button type="primary" outline>
        描边按钮
      </Button>
      <Button type="danger" outline>
        描边按钮
      </Button>
      <Button type="success" outline>
        描边按钮
      </Button>
      <Button type="warning" outline>
        描边按钮
      </Button>
      <Button>普通按钮</Button>
    </div>
  </>
);
```
