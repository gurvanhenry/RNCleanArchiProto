import {fetchAndSetColor, selectColor, selectLoading} from '~/domain/color';
import {store} from '~/domain/store';

describe('color', () => {
  it('initial color', () => {
    const color = selectColor(store.getState());
    expect(color).toBe('');
  });

  it('initial laoding', () => {
    const loading = selectLoading(store.getState());
    expect(loading).toBe(false);
  });

  it('get new color', async () => {
    await store.dispatch(fetchAndSetColor());
    const color = selectColor(store.getState());
    expect(typeof color).toBe('string');
    expect(color !== '').toBe(true);
    expect(color.startsWith('#')).toBe(true);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('loading is true during the fetch', async () => {
    // how to do that 🐵
  });
});
