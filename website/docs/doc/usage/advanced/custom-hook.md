---
sidebar_position: 2
---

# Custom hook

```typescript jsx
import React from 'react';
import { appendStyles } from 'react-append-styles';

const useColors = (config: Record<string, string>): void => {
  const refColors = React.useRef<typeof config>(config);
  React.useEffect(() => {
    if (Object.keys(refColors.current).length === 0) return;

    const remove = appendStyles({ 'div[data-theme]': refColors.current });
    return () => remove();
  }, []);
};

const MyComponent: React.FC = ({ color = 'blue' }) => {
  useColors({ '--my-app-primaryColor': color });

  return (<div data-theme>My Component</div>);
};

```

:::info
See appendStyles [API](../../../api/advanced#appendstyles)
:::
