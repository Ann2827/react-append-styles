interface IEHTMLStyleElement extends HTMLStyleElement {
  styleSheet?: {
    cssText: string;
  };
}

export const metaKey = 'customStyles';

export const appendToHead = (css: string, key = ''): void => {
  const head: HTMLElement = document.querySelectorAll('head')[0];
  const el: IEHTMLStyleElement | HTMLStyleElement = document.createElement('style');
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
  head.append(el);
};

export const removeFromHead = (key: string): void => {
  const els = document.querySelectorAll(`head style[data-meta=${metaKey}][data-name*=${key}]`);
  els.forEach((item) => item.remove());
};
