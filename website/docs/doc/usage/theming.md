---
sidebar_position: 2
---

# Creating themes

## Theme configuration

Create a theme/themes configuration file in the src root or in a separate folder with contexts.

Example `ThemeContext.ts`:

```typescript
import { makeTheme } from 'react-append-styles';

type TTheme = { primaryColor: string };
const themes: Record<'main' | 'dark', TTheme> = {
  main: {
    primaryColor: '#123456',
  },
  dark: {
    primaryColor: '#000',
  },
};

// Set the default theme name: main
const ThemeContext = makeTheme<TTheme>('main', themes);

export default ThemeContext;

```

## Usage ThemeContext

### `makeClasses`

Identical to using [обычных классов](classes), but with theme support.

Example:

```typescript jsx
import React from 'react';
import ThemeContext from '../ThemeContext.ts';

const useClasses = ThemeContext.makeClasses<'wrapper', { textColor: string }>(({ theme, textColor }) => ({
  wrapper: { backgroundColor: theme.primaryColor, color: textColor },
}));

const MyComponent: React.FC = () => {
  const { wrapper } = useClasses({ textColor: 'gray' });
  
  return (<div className={wrapper}>MyComponent</div>);
};
```

### `useTheme`

Returns the styles object of the selected theme.

Example:

```typescript jsx
import React from 'react';
import ThemeContext from '../ThemeContext.ts';

const MyComponent: React.FC = () => {
  const theme = ThemeContext.useTheme();
  
  return (<div style={{ backgroundColor: theme.primaryColor }}>MyComponent</div>);
};
```

### `switchTheme`

Switches the topic by name.

Example:

```typescript jsx
import React from 'react';
import ThemeContext from '../ThemeContext.ts';

const MyComponent: React.FC = () => {
  const enableDark = React.useCallback(() => {
    ThemeContext.switchTheme('dark');
  }, []);
  
  return (<button onClick={enableDark}>Enable dark</button>);
};
```
