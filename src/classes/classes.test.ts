import { renderHook } from '@testing-library/react-hooks';
import '../../__mocks__/document';

import makeClasses from './classes.functions';

describe('makeClasses:', () => {
  test('1', () => {
    const useClasses = makeClasses<'wrapper'>({ wrapper: { backgroundColor: 'red' } });
    const { result, unmount } = renderHook(() => useClasses());
    expect(Object.keys(result.current)).toContain('wrapper');
    expect(result.current.wrapper).toMatch('wrapper');
    unmount();
  });

  test('2', () => {
    const useClasses = makeClasses<'wrapper', { color: string }>((props) => ({
      wrapper: { backgroundColor: props.color },
    }));
    let props = { color: 'blue' };

    const { result, unmount, rerender } = renderHook(() => useClasses(props));
    expect(Object.keys(result.current)).toContain('wrapper');
    expect(result.current.wrapper).toMatch('wrapper');
    expect(document.styleSheets[0].cssRules[0].cssText).toContain('background-color: blue');

    props = { color: 'green' };
    rerender();
    expect(document.styleSheets[0].cssRules[0].cssText).toContain('background-color: green');

    unmount();
  });
});