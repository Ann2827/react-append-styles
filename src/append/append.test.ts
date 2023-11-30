import { appendStyles, appendClasses } from './append';
import '../../__mocks__/document';

const utils = {
  timeout(ms: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => setTimeout(() => resolve(true), ms));
  },
};

describe('appendStylesSimple fn:', () => {
  test('1', async () => {
    const input = {
      'button[class*=button]': {
        borderRadius: '26px',
      },
    };
    const remove = appendStyles(input, '');
    await utils.timeout(3000);
    const el: CSSStyleSheet = document.styleSheets[0];
    expect(el.cssRules[0].cssText).toEqual('button[class*=button] {border-radius: 26px;}');
    remove();
  });
});

describe('appendClassesSimple fn:', () => {
  test('1', async () => {
    const input = {
      myClass: {
        borderRadius: '26px',
      },
    };
    const [, remove] = appendClasses(input, '');
    await utils.timeout(3000);
    const el: CSSStyleSheet = document.styleSheets[0];
    expect(el.cssRules[0].cssText).toContain('{border-radius: 26px;}');
    expect(el.cssRules[0].cssText).toContain('.myClass');
    remove();
  });
});
