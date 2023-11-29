import { jsToCss } from './jsToCss';

describe('jsToCss fn:', () => {
  test('1', () => {
    const input = {
      'button[class*=button]': {
        borderRadius: '26px',
      },
    };
    const expectedOutput = 'button[class*=button]{border-radius:26px}';
    expect(jsToCss(input)).toBe(expectedOutput);
  });

  test('2', () => {
    const input = {
      borderRadius: 'var(--ui-ki-rad)',
      padding: '26px',
    };
    const expectedOutput = '{border-radius:var(--ui-ki-rad);padding:26px}';
    expect(jsToCss(input)).toBe(expectedOutput);
  });

  test('3', () => {
    const input = {
      right: '0',
      '&:hover > *': {
        color: 'red',
      },
    };
    const expectedOutput = '.className{right:0}.className:hover > *{color:red}';
    expect(jsToCss(input, '.className')).toBe(expectedOutput);
  });

  test('4', () => {
    const input = {
      '@media all and (max-width: 600px)': {
        backgroundSize: 'contain',
      },
    };
    const expectedOutput = '@media all and (max-width: 600px){background-size:contain}';
    expect(jsToCss(input)).toBe(expectedOutput);
  });

  // test('5', () => {
  //   const input = {
  //     '@media all and (max-width: 600px)': {
  //       className: {
  //         backgroundSize: 'contain',
  //       },
  //     },
  //   };
  //   const expectedOutput = '@media all and (max-width: 600px){.className{background-size:contain}}';
  //   expect(jsToCss(input)).toBe(expectedOutput);
  // });

  // TODO: починить
  // test('5', () => {
  //   const input = {
  //     '@media all and (max-width: 600px)': {
  //       '.className': {
  //         backgroundSize: 'contain',
  //       },
  //     },
  //   };
  //   const expectedOutput = '@media all and (max-width: 600px){.className{background-size:contain}}';
  //   expect(jsToCss(input)).toBe(expectedOutput);
  // });

  test('6', () => {
    const input = {
      '--kc-custom-size-headerPadding': '14px 110px',
    };
    const expectedOutput = '{--kc-custom-size-headerPadding:14px 110px}';
    expect(jsToCss(input)).toBe(expectedOutput);
  });

  test('7', () => {
    const input = {
      ':root': {
        '--kc-custom-size-fromWidth': '460px',
      },
    };
    const expectedOutput = ':root{--kc-custom-size-fromWidth:460px}';
    expect(jsToCss(input)).toBe(expectedOutput);
  });

  test('8', () => {
    const input = {
      width: 'calc(100% - 20px)',
    };
    const expectedOutput = '.static-class{width:calc(100% - 20px)}';
    expect(jsToCss(input, '.static-class')).toBe(expectedOutput);
  });
});
