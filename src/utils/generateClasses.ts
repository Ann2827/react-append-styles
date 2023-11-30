import { CSSRule, CSSStyles } from '../common.types';

import { jsToCss } from './jsToCss';
import crc32 from './hash';

const defaultClasses = <CLASSES extends string>(obj: Record<CLASSES, any>): { [K in keyof typeof obj]: undefined } =>
  Object.fromEntries<undefined>(
    (Object.keys(obj) as Array<keyof typeof obj>).map<[keyof typeof obj, undefined]>((key) => [key, undefined]),
  ) as { [K in keyof typeof obj]: undefined };

export const generateClasses = <CLASSES extends string>(
  obj: Record<CLASSES, CSSRule | CSSStyles>,
  rootSelector = '',
  prefix = '',
): { classes: { [K in keyof typeof obj]: string | undefined }; css: string } => {
  const classes: { [K in keyof typeof obj]: undefined | string } = defaultClasses<CLASSES>(obj);
  const css = (Object.entries<CSSRule | CSSStyles>(obj) as [keyof typeof obj, CSSRule | CSSStyles][]).reduce<string>(
    (prev, [key, value]) => {
      const classPrefix = prefix ? `${prefix}-` : '';
      const hash = crc32(classPrefix + key + rootSelector);
      const className = `${classPrefix}${key}-${hash}`;
      classes[key] = className;
      return prev + jsToCss(value, `${rootSelector}.${className}`);
    },
    '',
  );
  return { classes, css };
};
