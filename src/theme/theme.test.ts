import { act, renderHook } from '@testing-library/react-hooks';
import '../../__mocks__/document';

import makeTheme, { IThemeContext } from '.';

type TTheme = {
  primaryColor: string;
};
const themes: Record<'main' | 'dark', TTheme> = {
  main: {
    primaryColor: '#123456',
  },
  dark: {
    primaryColor: '#000',
  },
};

describe('makeTheme:', () => {
  let ThemeContext: IThemeContext<TTheme, keyof typeof themes>;

  beforeAll(() => {
    ThemeContext = makeTheme<TTheme>('main', {
      main: {
        primaryColor: '#123456',
      },
      dark: {
        primaryColor: '#000',
      },
    });
  });

  afterAll(() => {
    ThemeContext.reset();
  });

  test('1', () => {
    const { result, unmount } = renderHook(() => ThemeContext.useTheme((state) => state));
    expect(result.current).toEqual({ primaryColor: '#123456' });

    // @ts-ignore
    act(() => ThemeContext.switchTheme('dar'));
    expect(result.current).toEqual({ primaryColor: '#123456' });

    act(() => ThemeContext.switchTheme('dark'));
    expect(result.current).toEqual({ primaryColor: '#000' });
    unmount();
  });

  test('2', () => {
    const useClasses = ThemeContext.makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });
    const { result, unmount } = renderHook(() => useClasses());
    expect(Object.keys(result.current)).toContain('wrapper');
    expect(result.current.wrapper).toMatch('wrapper');
    unmount();
  });

  test('3', () => {
    const useClasses = ThemeContext.makeClasses<'wrapper', { color: string }>((props) => ({
      wrapper: { backgroundColor: props.theme.primaryColor, color: props.color },
    }));
    const { result, unmount } = renderHook(() => useClasses({ color: 'blue' }));
    expect(Object.keys(result.current)).toContain('wrapper');
    expect(result.current.wrapper).toMatch('wrapper');
    expect(document.styleSheets[0].cssRules[0].cssText).toContain('color: blue');
    unmount();
  });
});
