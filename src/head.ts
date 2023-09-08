const metaKey = 'customStyles';
interface IEHTMLStyleElement extends HTMLStyleElement {
  styleSheet?: {
    cssText: string;
  };
}
export const appendToHead = (css: string, timeout: number, key = '') => {
  const head: HTMLElement = document.querySelectorAll('head')[0];
  const el: IEHTMLStyleElement = document.createElement('style');
  if ('styleSheet' in el && el.styleSheet?.cssText) {
    // IE
    el.styleSheet.cssText = css;
  } else {
    el.setAttribute('type', 'text/css');
    el.dataset.jss = '';
    el.dataset.meta = metaKey;
    el.dataset.name = key;
    el.append(document.createTextNode(css));
  }
  setTimeout(() => head.append(el), timeout);
};
export const removeFromHead = (key: string): void => {
  const el = document.querySelectorAll(`head style[data-meta=${metaKey}][data-name*=${key}]`)[0];
  if (el) el.remove();
};
