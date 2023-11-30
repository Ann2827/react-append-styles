import { appendToHead, removeFromHead } from './head';
import '../../__mocks__/document';

/**
 * @jest-environment jsdom
 */
describe('appendToHead fn:', () => {
  test('1', () => {
    const input = '.className{right:0}';
    appendToHead(input, 'testKey');

    const el: CSSStyleSheet = document.styleSheets[0];
    expect(el.cssRules[0].cssText).toEqual('.className {right: 0;}');

    removeFromHead('testKey');
    expect(document.styleSheets[0]).toBeUndefined();
  });
});
