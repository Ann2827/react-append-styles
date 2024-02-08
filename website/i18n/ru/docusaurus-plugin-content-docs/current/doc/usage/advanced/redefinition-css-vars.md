---
sidebar_position: 1
---

# Переопределение cssVars

Если тема приложения задана через cssVars и эти переменные нужно переопределить при запуске приложения 1 раз.

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
См. appendStyles [API](../../../api/advanced#appendstyles)
:::
