import { CSSObject, jsToCss } from './jsToCss';

export const nameCounter: { _data: { key: string; value: number }[]; getNumber(name: string): number; reset(): void } =
  {
    _data: [],
    getNumber(name: string): number {
      let number = 1;
      const index = this._data.findIndex(({ key }: { key: string }) => key === name);
      if (index === -1) {
        this._data.push({ key: name, value: 1 });
      } else {
        const newNumber = this._data[index].value + 1;
        this._data[index].value = newNumber;
        number = newNumber;
      }
      return number;
    },
    reset(): void {
      this._data = [];
    },
  };

export const generateClasses = (
  obj: CSSObject,
  rootSelector = '',
  prefix = '',
): { classes: { [key in keyof typeof obj]: string }; css: string } => {
  const classes: { [key in keyof typeof obj]: string } = {};
  const css = Object.entries(obj).reduce((prev, [key, value]) => {
    const hash = nameCounter.getNumber(key).toString();
    const classPrefix = prefix ? `${prefix}-` : '';
    const className = `${classPrefix}${key}-${hash}`;
    classes[key] = className;
    return prev + jsToCss(value, `${rootSelector}.${className}`);
  }, '');
  return { classes, css };
};
