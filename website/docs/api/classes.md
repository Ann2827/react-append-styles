---
sidebar_position: 1
---

# Classes

### `makeClasses`

Returns the function-hook [useClasses](#useclasses).

```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses({ wrapper: { backgroundColor: 'red' } });
// There will be a hint of the key (class) names when calling
const useClasses = makeClasses<'wrapper' | 'logo'>({ wrapper: { backgroundColor: 'red' }, logo: { color: 'blue' } });
```

#### Example with dynamic props:
```typescript jsx
const useClasses = makeClasses((props) => ({ wrapper: { backgroundColor: props.color } }));
// With hint
const useClasses = makeClasses<'wrapper', { color: string }>((props) => ({
  wrapper: { backgroundColor: props.color },
}));
```

#### Example with selectors:
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

#### Example with `cssVars`:
```typescript jsx
const useClasses = makeClasses({
  rootClass: {
    color: 'var(--theme-color)',
    '--theme-custom-size-headerPadding': '14px 110px',
  }
});
```

#### Example with `@media`:
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

It must be called inside the React component.

```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });

const MyComponent: React.FC = () => {
  const { wrapper } = useClasses(null);
  
  return (<div className={wrapper}>MyComponent</div>);
};
```

#### Example with dynamic props:
```typescript jsx
const useClasses = makeClasses<'wrapper', { color: string }>((props) => ({
  wrapper: { backgroundColor: props.color },
}));

const MyComponent: React.FC = ({ color = 'red' }) => {
  const { wrapper } = useClasses({ color });

  return (<div className={wrapper}>MyComponent</div>);
};
```

#### Preventing styles from being mounted

In this case, the class name and css styles will be generated.
The class will be added to the element, however, the styles will not be appended in `head`. This means that styles are not applied.

It is recommended to use it if, while `MyComponent` is mounted, this instance does not require custom styles.
(This will prevent unnecessary DOM manipulation)

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

<summary>The second argument `useClasses` works according to the following principle (in react render conditions):</summary>

- if `true` is immediately received, then subsequent changes to the argument are not taken into account. Styles will be added and updated;
- if `false` is received. Styles will not be added/updated. Wrapper class = undefined;
- if `false' is received first, but it has changed to `true'. Styles will start to be added/updated and the wrapper class will change the value from undefined to string after the first change to `true`;
- **true** -> `false` -> ... or `false` -> **true** -> `false` -> ... it doesn't matter. After the first **true** styles start working and won't stop.
</details>

#### Applying and canceling styles

If while the `MyComponent` is mounted, the need of this instance for custom styles will change, then it is better to use this variant:
```typescript jsx
import React from 'react';
import { makeClasses } from 'react-append-styles';

const useClasses = makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });

const MyComponent: React.FC = ({ withCustomStyles = false }) => {
  const { wrapper } = useClasses(null);

  return (<div className={withCustomStyles ? wrapper : undefined}>MyComponent</div>);
};
```
