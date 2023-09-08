import { arrToStr, toLowercase } from './string';

describe('arrToStr fn:', () => {
  test('Преобразование массива строк в строку с разделителем по умолчанию', () => {
    const input = ['apple', 'banana', 'cherry'];
    const expectedOutput = 'apple, banana, cherry';
    expect(arrToStr(input)).toBe(expectedOutput);
  });

  test('Преобразование массива строк в строку с пользовательским разделителем', () => {
    const input = ['apple', 'banana', 'cherry'];
    const expectedOutput = 'apple-banana-cherry';
    expect(arrToStr(input, '-')).toBe(expectedOutput);
  });

  test('Передан', () => {
    expect(arrToStr(['apple', '', 'banana', ''])).toBe('apple, banana');
  });

  test('Пустая строка', () => {
    expect(arrToStr('')).toBe('');
  });

  test('Пустой массив', () => {
    expect(arrToStr([])).toBe('');
  });

  test('Передана строка', () => {
    const text = 'Hello, World!';
    expect(arrToStr(text)).toBe(text);
  });
});

describe('toLowerCase fn:', () => {
  test('Преобразование строки в нижний регистр без разделителя', () => {
    const input = 'HelloWorld';
    const expectedOutput = 'helloworld';
    expect(toLowercase(input, '')).toBe(expectedOutput);
  });

  test('Преобразование строки в нижний регистр с разделителем', () => {
    const input = 'HelloWorld';
    const expectedOutput = 'hello-world';
    expect(toLowercase(input)).toBe(expectedOutput);
  });

  test('Строка уже в нижнем регистре', () => {
    const text = 'helloworld';
    expect(toLowercase(text)).toBe(text);
  });

  test('Пустая строка', () => {
    expect(toLowercase('')).toBe('');
  });
});
