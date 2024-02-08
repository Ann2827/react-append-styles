---
sidebar_position: 1
---

# Классы

### `makeClasses`

Возвращает функцию-хук [useClasses](#useclasses).

```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses({ wrapper: { backgroundColor: 'red' } });
// There will be a hint of the key (class) names when calling
const useClasses = makeClasses<'wrapper' | 'logo'>({ wrapper: { backgroundColor: 'red' }, logo: { color: 'blue' } });
```

#### Пример с динамическими параметрами:
```typescript jsx
const useClasses = makeClasses((props) => ({ wrapper: { backgroundColor: props.color } }));
// With hint
const useClasses = makeClasses<'wrapper', { color: string }>((props) => ({
  wrapper: { backgroundColor: props.color },
}));
```

#### Пример с селекторами:
```typescript jsx
const useClasses = makeClasses({
  rootClass: {
    'button[class*=button]': {
      borderRadius: '26px',
    },
  },
  linkClass: {
    right: '0',
    '&:hover > *': {
      color: 'red',
    },
  }
});
```

#### Пример с `cssVars`:
```typescript jsx
const useClasses = makeClasses({
  rootClass: {
    color: 'var(--theme-color)',
    '--theme-custom-size-headerPadding': '14px 110px',
  }
});
```

#### Пример с `@media`:
```typescript jsx
const useClasses = makeClasses({
  rootClass: {
    alignItems: 'flex-start',
    '@media all and (max-width: 600px)': {
      backgroundSize: 'contain',
    },
  }
});
```

### `useClasses`

Должен вызываться внутри React-компонента.

```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });

const MyComponent: React.FC = () => {
  const { wrapper } = useClasses(null);
  
  return (<div className={wrapper}>MyComponent</div>);
};
```

#### Пример с динамическими параметрами:
```typescript jsx
const useClasses = makeClasses<'wrapper', { color: string }>((props) => ({
  wrapper: { backgroundColor: props.color },
}));

const MyComponent: React.FC = ({ color = 'red' }) => {
  const { wrapper } = useClasses({ color });

  return (<div className={wrapper}>MyComponent</div>);
};
```

#### Предотвращение монтирования стилей

В этом случае и название класса и css стили будут сгенерированы.
Класс будет добавлен к элементу, однако, стили не будут примонтированы в `head`. Это означает, что стили не применятся.

Рекомендуется использовать в том случае, если пока примонтирован `MyComponent` этому инстансу не потребуются кастомные стили.
(Это предотвратит лишние манипуляции с DOM)

```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });

const MyComponent: React.FC = ({ withCustomStyles = false }) => {
  const { wrapper } = useClasses(null, withCustomStyles);
  
  return (<div className={wrapper}>MyComponent</div>);
};
```

<details>

<summary>Второй аргумент `useClasses` работает по следующему принципу (в условиях react rerender):</summary>

- если сразу получено `true`, то последующие изменения аргумента не учитываются. Стили будут добавляться и обновляться;
- если получено `false`. Стили не будут добавляться/обновляться. Класс wrapper = undefined;
- если сначала получено `false`, но оно изменилось на `true`. Стили начнут добавляться/обновляться и класс wrapper изменит значение с undefined на string после первого изменени на `true`;
- **true** -> `false` -> ... или `false` -> **true** -> `false` -> ... ничего не дадут. После первого **true** стили начинают работать и не перестанут.
</details>

#### Применение и отмена стилей

Если пока примонтирован `MyComponent` потребность данного инстанса в кастомных стилях будет изменяться, то лучше использовать этот вариант:
```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });

const MyComponent: React.FC = ({ withCustomStyles = false }) => {
  const { wrapper } = useClasses(null);
  
  return (<div className={withCustomStyles ? wrapper : undefined}>MyComponent</div>);
};
```
