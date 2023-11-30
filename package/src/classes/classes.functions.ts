import { Defer, makeSubscribe } from 'library-react-hooks';

import { appendClasses } from '../append';

import { TClasses, TUseClasses, TOptions, TTheme, TClassesKeys, TProps, TStyleFn, TStyle } from './classes.types';

const defaultClasses = <C extends TClassesKeys>(style: TStyle<C>): TClasses<C> =>
  Object.fromEntries(
    (Object.keys(style) as Array<keyof typeof style>).map<[keyof typeof style, undefined]>((key) => [key, undefined]),
  ) as TClasses<C>;

const fakeUseTheme = <T = unknown>(listener: (state: {}) => T): T => listener({});

// const useClasses = <T extends TTheme, C extends TClassesKeys, P extends TProps>(
//   useTheme: ReturnType<typeof makeSubscribe<T>>,
//   style: TStyleFn<C, P & { theme: T }>,
//   props: P,
//   options?: Partial<TOptions>,
// ): TClasses<C> => {
//   const theme = useTheme<T>((state) => state);
//   // TODO: проверить, что лишний раз не меняются стили
//   const styleObj = Defer.useMemo<TStyle<C>>(
//     () => (typeof style === 'function' ? style({ ...props, theme }) : style),
//     [style, props, JSON.stringify(theme)],
//     doAppend,
//   );
//   const [styleClasses, setStyleClasses] = Defer.useState<TClasses<C>>(defaultClasses<C>(styleObj), doAppend);
//
//   Defer.useEffect(
//     () => {
//       const [classes, remove] = appendClasses<C>(styleObj, options?.rootSelector, options?.prefix);
//       setStyleClasses(classes);
//       return () => remove();
//     },
//     [styleObj, setStyleClasses],
//     doAppend,
//   );
//   return styleClasses;
// };

// TODO: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#function-overloads
// export const makeThemeClasses =
//   <T extends TTheme>(useTheme: ReturnType<typeof makeSubscribe<T>>) =>
//   <C extends TClassesKeys, P extends TProps = undefined>(
//     style: TStyleFn<C, P & { theme: T }>,
//     options?: Partial<TOptions>,
//   ): TUseClasses<C, P> => {
//     return (props: P): TClasses<C> => useClasses<T, C, P>(useTheme, style, props, options);
//   };

export const makeThemeClasses =
  <T extends TTheme>(useTheme: ReturnType<typeof makeSubscribe<T>>) =>
  <C extends TClassesKeys, P extends TProps = null>(
    style: TStyleFn<C, P & { theme: T }>,
    options?: Partial<TOptions>,
  ): TUseClasses<C, P> => {
    return (props: P, doAppend = true): TClasses<C> => {
      const theme = useTheme<T>((state) => state);
      // TODO: проверить, что лишний раз не меняются стили
      const styleObj = Defer.useMemo<TStyle<C>>(
        () => (typeof style === 'function' ? style({ ...props, theme }) : style),
        [JSON.stringify(props), JSON.stringify(theme)],
        doAppend,
      );

      const [styleClasses, setStyleClasses] = Defer.useState<TClasses<C>>(() => defaultClasses<C>(styleObj), doAppend);

      Defer.useEffect(
        () => {
          const [classes, remove] = appendClasses<C>(styleObj, options?.rootSelector, options?.prefix);
          setStyleClasses(classes);
          return () => remove();
        },
        [styleObj],
        doAppend,
      );
      return styleClasses;
    };
  };

const makeClasses = makeThemeClasses<{}>(fakeUseTheme);

export default makeClasses;
