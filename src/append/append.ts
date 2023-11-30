import { jsToCss } from '../utils/jsToCss';
import { generateClasses } from '../utils/generateClasses';
import { appendToHead, removeFromHead } from '../utils/head';
import { CSSRule, CSSStyles } from '../common.types';
import crc32 from '../utils/hash';

// TODO: вариант с проверкой перед заменой (вирутальный дом?)

export const appendStyles = (js: CSSRule | CSSStyles, rootSelector = ''): (() => void) => {
  const css = jsToCss(js, rootSelector);
  // TODO: нужно ли добавить к строке например время?
  const uniqueKey = crc32(Object.keys(js).join('') + rootSelector);
  // TODO: при перерендере при разработке сам не удаляется (вирутальный дом?)
  appendToHead(css, uniqueKey);
  return () => removeFromHead(uniqueKey);
};

export const appendClasses = <CLASSES extends string>(
  js: Record<CLASSES, CSSRule | CSSStyles>,
  rootSelector = '',
  prefix = '',
): [{ [K in keyof typeof js]: string | undefined }, () => void] => {
  const { classes, css } = generateClasses<CLASSES>(js, rootSelector, prefix);
  // TODO: нужно ли добавить к строке например время?
  const uniqueKey = crc32(Object.keys(js).join('') + prefix + rootSelector);
  // TODO: при перерендере при разработке сам не удаляется (вирутальный дом?)
  removeFromHead(uniqueKey);
  appendToHead(css, uniqueKey);
  return [classes, () => removeFromHead(uniqueKey)];
};
