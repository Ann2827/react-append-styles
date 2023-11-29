import { CSSRule } from '../utils/jsToCss';

export type TOptions = {
  rootSelector: string;
  prefix: string;
};

// extends
export type TTheme = Record<string, any>;
export type TClassesKeys = string;
export type TClassesValues = string | undefined;
export type TProps = Record<string, any> | undefined;

export type TStyle<C extends TClassesKeys> = Record<C, CSSRule>;
export type TStyleFn<C extends TClassesKeys, P extends TProps> = ((props: P) => TStyle<C>) | TStyle<C>;

export type TClasses<C extends TClassesKeys> = Record<C, TClassesValues>;
export type TUseClasses<C extends string, P> = (props: P) => TClasses<C>;
export type TMakeClasses<T extends TTheme> = <C extends TClassesKeys, P extends TProps = undefined>(
  style: TStyleFn<C, P & { theme: T }>,
  options?: Partial<TOptions>,
) => TUseClasses<C, P>;
