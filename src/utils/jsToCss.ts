import { arrToStr, toLowercase } from './string';

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

// const input = {
//   className: {
//     borderRadius: 'var(--ui-ki-rad)',
//     'button[class*=button]': {
//       borderRadius: '26px'
//     },
//     '&:hover > *': {
//       color: 'red',
//     },
//     '@media all and (max-width: 600px)': {
//       backgroundSize: 'contain',
//     },
//     '--kc-custom-size-headerPadding': '14px 110px',
//   }
// };

type TSort = {
  simple: CSSStyles;
  selector: CSSRule;
  media: CSSRule;
};
const jsSort = (obj: CSSRule | CSSStyles): TSort => {
  return Object.entries(obj).reduce<TSort>(
    (prev, [key, value]) => {
      const next = prev;
      const item = { [key.trim()]: value };
      if (typeof value === 'string' || typeof value === 'number') next.simple = { ...next.simple, ...item };
      if (typeof value === 'object') {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        key.trim().startsWith('@media')
          ? (next.media = { ...next.media, ...item })
          : (next.selector = { ...next.selector, ...item });
      }
      return next;
    },
    { simple: {}, selector: {}, media: {} },
  );
};
const makeSimpleCss = (simple: TSort['simple']): string => {
  return (
    Object.entries(simple).reduce((prev, [key, value], index, array) => {
      const separator = array.length - 1 !== index ? ';' : '';
      const isVar = key.trim().startsWith('--');
      const styleKey = isVar ? key.trim() : toLowercase(key.trim(), '-');
      return prev + `${styleKey}:${value}${separator}`;
    }, '{') + '}'
  );
};
const makeSelectorCss = (selector: TSort['selector'], rootSelector: string): string => {
  return Object.entries(selector)
    .reduce((prev, [key, value]) => {
      const isAnd = key.startsWith('&');
      const styleKey = isAnd ? key.slice(1) : ` ${key}`;
      return prev + rootSelector + styleKey + makeSimpleCss(value);
    }, '')
    .trim();
};
const makeMediaCss = (media: TSort['media'], rootSelector: string): string => {
  return Object.entries(media)
    .reduce((prev, [key, value]) => {
      const simple = makeSimpleCss(value);
      const withRoot = rootSelector ? `{${rootSelector}${simple}}` : simple;
      return prev + key + withRoot;
    }, '')
    .trim();
};
const makeCss = (sort: TSort, rootSelector: string): string => {
  const arr: string[] = [];
  if (Object.keys(sort.simple).length > 0) arr.push(rootSelector + makeSimpleCss(sort.simple));
  if (Object.keys(sort.selector).length > 0) arr.push(makeSelectorCss(sort.selector, rootSelector));
  if (Object.keys(sort.media).length > 0) arr.push(makeMediaCss(sort.media, rootSelector));
  return arrToStr(arr, '');
};
export const jsToCss = (obj: CSSRule | CSSStyles, rootSelector = ''): string => {
  const sort = jsSort(obj);
  return makeCss(sort, rootSelector);
};

// export const jsToCss = (obj: CSSObject, rootKey: string, type: 'main' | 'next'): { css: string; queue: string[] } => {
//   let css = '';
//   const queue: string[] = [];
//   Object.keys(obj).forEach((param) => {
//     if (typeof obj[param] === 'string' || typeof obj[param] === 'number') {
//       css = `${css + toLowercase(param, '-')}: ${obj[param]};`;
//     } else if (typeof obj[param] === 'object' && param.includes('&')) {
//       queue.push(jsToCss(obj[param] as CSSObject, `${rootKey}${param.replace('&', '')}`, 'next').css);
//     } else if (typeof obj[param] === 'object' && param.includes('@')) {
//       queue.push(jsToCss(obj[param] as CSSObject, `${param} { ${rootKey}`, 'next').css + '}');
//     } else if (typeof obj[param] === 'object') {
//       queue.push(jsToCss(obj[param] as CSSObject, `${rootKey} ${param}`, 'next').css);
//     }
//   });
//   if (css) css = `${rootKey} {${css}}`.trim();
//   if (queue.length > 0 && type === 'main') {
//     queue.forEach((item) => {
//       css += item;
//     });
//   }
//   return { css, queue };
// };
//
//
// export const jsToCssObj = (obj: CSSObject): string => {
//   let css = '';
//   Object.keys(obj).forEach((param) => {
//     if (param && obj[param]) css = `${css + toLowercase(param, '-')}: ${obj[param]};`;
//   });
//   return css;
// };
