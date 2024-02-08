---
sidebar_position: 1
---

# Redefinition cssVars

If the application theme is set via cssVars and these variables need to be redefined when launching the application 1 time.

```typescript jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { appendStyles } from 'react-append-styles';

// From webpack or backend
const VARS_CONFIG = { '--my-app-headerHeight': '30px' };

if (VARS_CONFIG) {
  appendStyles({ 'div[data-theme]': VARS_CONFIG });
}

ReactDOM.render(<div data-theme>My App</div>, document.querySelector('#root'));
```

:::info
See appendStyles [API](../../../api/advanced#appendstyles)
:::
