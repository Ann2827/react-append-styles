import { generateClasses, nameCounter } from './makeClasses';

describe('makeClasses fn:', () => {
  beforeEach(() => {
    nameCounter.reset();
  });

  test('1', () => {
    const input = {
      className: {
        'button[class*=button]': {
          borderRadius: '26px',
        },
      },
    };
    const expectedOutput = '.className-1 button[class*=button]{border-radius:26px}';
    expect(generateClasses(input).css).toBe(expectedOutput);
    expect(generateClasses(input).classes).toEqual({ className: 'className-2' });
  });

  test('2', () => {
    const input = {
      className: {
        borderRadius: 'var(--ui-ki-rad)',
      },
    };
    const expectedOutput = '.className-1{border-radius:var(--ui-ki-rad)}';
    expect(generateClasses(input).css).toBe(expectedOutput);
  });

  test('3', () => {
    const input = {
      className1: {
        borderRadius: '26px',
      },
      className2: {
        borderRadius: '36px',
      },
    };
    const expectedOutput = '.rootClass.className1-1{border-radius:26px}.rootClass.className2-1{border-radius:36px}';
    expect(generateClasses(input, '.rootClass').css).toBe(expectedOutput);
    expect(generateClasses(input).classes).toEqual({ className1: 'className1-2', className2: 'className2-2' });
  });

  test('4', () => {
    const input = {
      className: {
        right: '0',
        '&:hover > *': {
          color: 'red',
        },
      },
    };
    const expectedOutput = '.className-1{right:0}.className-1:hover > *{color:red}';
    expect(generateClasses(input).css).toBe(expectedOutput);
  });

  test('5', () => {
    const input = {
      className: {
        alignItems: 'flex-start',
        '@media all and (max-width: 600px)': {
          backgroundSize: 'contain',
        },
      },
    };
    const expectedOutput =
      '.className-1{align-items:flex-start}@media all and (max-width: 600px){.className-1{background-size:contain}}';
    expect(generateClasses(input).css).toBe(expectedOutput);
  });

  test('6', () => {
    const input = {
      className: {
        '--kc-custom-size-headerPadding': '14px 110px',
      },
    };
    const expectedOutput = '.className-1{--kc-custom-size-headerPadding:14px 110px}';
    expect(generateClasses(input).css).toBe(expectedOutput);
  });
});
