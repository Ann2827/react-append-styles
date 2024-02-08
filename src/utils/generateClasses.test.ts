import { generateClasses } from './generateClasses';
import crc32 from './hash';

describe('generateClasses fn:', () => {
  const defaultClass = 'className';
  let defaultHash: string;

  beforeAll(() => {
    defaultHash = `${defaultClass}-${crc32(defaultClass)}`;
  });

  test('1', () => {
    const input = {
      [defaultClass]: {
        'button[class*=button]': {
          borderRadius: '26px',
        },
      },
    };
    const expectedOutput = `.${defaultHash} button[class*=button]{border-radius:26px}`;
    expect(generateClasses(input).css).toBe(expectedOutput);
    expect(generateClasses(input).classes).toEqual({ [defaultClass]: defaultHash });
  });

  test('2', () => {
    const input = {
      [defaultClass]: {
        borderRadius: 'var(--ui-rad)',
      },
    };
    const expectedOutput = `.${defaultHash}{border-radius:var(--ui-rad)}`;
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
    const hash1 = `className1-${crc32('className1' + '.rootClass')}`;
    const hash2 = `className2-${crc32('className2' + '.rootClass')}`;
    const expectedOutput = `.rootClass.${hash1}{border-radius:26px}.rootClass.${hash2}{border-radius:36px}`;
    expect(generateClasses(input, '.rootClass').css).toBe(expectedOutput);
    expect(generateClasses(input, '.rootClass').classes).toEqual({ className1: hash1, className2: hash2 });
  });

  test('4', () => {
    const input = {
      [defaultClass]: {
        right: '0',
        '&:hover > *': {
          color: 'red',
        },
      },
    };
    const expectedOutput = `.${defaultHash}{right:0}.${defaultHash}:hover > *{color:red}`;
    expect(generateClasses(input).css).toBe(expectedOutput);
  });

  test('5', () => {
    const input = {
      [defaultClass]: {
        alignItems: 'flex-start',
        '@media all and (max-width: 600px)': {
          backgroundSize: 'contain',
        },
      },
    };
    const expectedOutput = `.${defaultHash}{align-items:flex-start}@media all and (max-width: 600px){.${defaultHash}{background-size:contain}}`;
    expect(generateClasses(input).css).toBe(expectedOutput);
  });

  test('6', () => {
    const input = {
      [defaultClass]: {
        '--kc-custom-size-headerPadding': '14px 110px',
      },
    };
    const expectedOutput = `.${defaultHash}{--kc-custom-size-headerPadding:14px 110px}`;
    expect(generateClasses(input).css).toBe(expectedOutput);
  });
});
