import React from 'react';
import { createContext, makeSetState, IContext } from 'library-react-hooks';

import { makeThemeClasses } from '../classes/classes.functions';

import { IThemeContext } from './theme.types';

// const makeSwitchTheme = <T extends Record<string, any>>(
//   BaseContext: IContext<T>,
//   initialTheme: keyof typeof themes,
//   themes: Record<string, T>,
// ) => {
//   const setState = makeSetState<T>(BaseContext);
//   return (themeName: keyof typeof themes): void => {
//     const [currentTheme, setCurrentTheme] = React.useState<keyof typeof themes>(initialTheme);
//     if (themeName !== currentTheme) {
//       setCurrentTheme(themeName);
//       setState(themes[themeName]);
//     }
//   };
// };
const makeSwitchTheme = <T extends Record<string, any>>(
  BaseContext: IContext<T>,
  initialTheme: keyof typeof themes,
  themes: Record<string, T>,
) => {
  const setState = makeSetState<T>(BaseContext);
  return (themeName: keyof typeof themes): void => {
    if (themes[themeName]) {
      setState(themes[themeName]);
    }
  };
};

// https://digitrain.ru/articles/27135/
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

const makeTheme = <T extends Record<string, any>>(
  themeName: keyof typeof themes,
  themes: Record<string, T>,
  logger = false,
): IThemeContext<T, keyof typeof themes> => {
  const BaseContext = createContext<T>(themes[themeName], {
    logger,
    hookName: 'theme',
    cleanKeys: false,
    merge: false,
  });
  // const useTheme = makeSubscribe<T>(BaseContext);
  const useTheme = <D = unknown>(listener: (state: T) => D): D => {
    const refListener = React.useRef(listener);
    const [state, setNewState] = React.useState<D>(refListener.current(BaseContext.state));
    React.useEffect(() => {
      const clean = BaseContext.on((prev, next) => {
        const nextState = refListener.current(next);
        if (JSON.stringify(refListener.current(prev)) !== JSON.stringify(nextState)) {
          setNewState(nextState);
        }
      });
      return () => {
        clean();
      };
    }, []);
    return state;
  };

  return {
    makeClasses: makeThemeClasses<T>(useTheme),
    useTheme,
    switchTheme: makeSwitchTheme<T>(BaseContext, themeName, themes),
    reset: BaseContext.reset,
  };
};

export default makeTheme;
