import { IContext, IStore } from 'library-react-hooks';

import { TMakeClasses, TTheme } from '../classes';

export interface IThemeContext<T extends TTheme, K extends string> {
  makeClasses: TMakeClasses<T>;
  useTheme: IStore<T>['useSubscribe'];
  switchTheme(themeName: K): void;
  reset: IContext<T>['reset'];
}
