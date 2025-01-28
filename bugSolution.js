```javascript
import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const logRender = useCallback(() => {
    console.log('Component rendered!');
  }, []);

  useEffect(() => {
    logRender();
  }, [count, logRender]); // Only runs when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```