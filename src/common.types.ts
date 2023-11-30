// https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/set
// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
type TypeKeys<T, D> = {
  [K in keyof T]: Required<T>[K] extends D ? K : never;
}[keyof T];
type PickData<T> = Omit<T, TypeKeys<T, Function>>;
export type CSSStyles = Partial<Omit<PickData<CSSStyleDeclaration>, 'length' | 'parentRule'>>;
export type CSSRule = Record<string, CSSStyles>;
export type CSSObject = CSSRule | Record<string, CSSRule>;

// Record<`&${string}`, CSSStyles>
// type A = { [k: string]: number } & { [K in `@${string}`]?: never }
