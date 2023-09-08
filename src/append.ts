import { CSSObject, CSSRule, CSSStyles, jsToCss } from './jsToCss';
import { generateClasses } from './makeClasses';
import { appendToHead, removeFromHead } from './head';

export const appendStyles = (
  js: CSSObject,
  // eslint-disable-next-line @typescript-eslint/default-param-last
  rootSelector = '',
  prefix: string,
): { key: string; remove: () => void; classes: { [key in string]: string } } => {
  const { css, classes } = generateClasses(js, rootSelector, prefix);
  const key = Object.values(classes)[0];
  const likeKey = key.split('-').reduce((prev, item, index, array) => {
    return array.length - 1 > index ? `${prev}-${item}` : prev;
  }, '');
  removeFromHead(likeKey);
  appendToHead(css, 0, key);
  return { key, remove: () => removeFromHead(key), classes };
};

export const appendStylesSimple = (
  js: CSSRule | CSSStyles,
  // eslint-disable-next-line @typescript-eslint/default-param-last
  rootSelector = '',
  dataKey: string,
): (() => void) => {
  const css = jsToCss(js, rootSelector);
  removeFromHead(dataKey);
  appendToHead(css, 0, dataKey);
  return () => removeFromHead(dataKey);
};
