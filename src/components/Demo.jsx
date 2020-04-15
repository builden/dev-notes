import React, { useState } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>count: {count}</div>
      <div onClick={() => setCount(1)}>inc</div>
    </div>
  );
}
