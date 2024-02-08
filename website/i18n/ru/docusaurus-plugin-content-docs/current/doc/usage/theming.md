---
sidebar_position: 2
---

# Темизация

## Настройка темы

Создайте файл с конфигурацией темы/тем в корне src или в отдельной папке с контекстами.

Пример `ThemeContext.ts`:

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

## Использование ThemeContext

### `makeClasses`

Идентично использованию [обычных классов](classes), но с поддержкой темизации.

Пример:

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

Возвращает объект стилей выбранной темы.

Пример:

```typescript jsx
import React from 'react';
import ThemeContext from '../ThemeContext.ts';

const MyComponent: React.FC = () => {
  const theme = ThemeContext.useTheme();
  
  return (<div style={{ backgroundColor: theme.primaryColor }}>MyComponent</div>);
};
```

### `switchTheme`

Осуществляет переключение темы по имени.

Пример:

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
