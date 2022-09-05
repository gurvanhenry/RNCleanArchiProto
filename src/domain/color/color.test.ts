import {fetchAndSetColor, selectColor} from '~/domain/color';
import {store} from '~/domain/store';

describe('color', () => {
  it('initial color', () => {
    const color = selectColor(store.getState());
    expect(color).toBe('');
  });

  it('get new color', async () => {
    await store.dispatch(fetchAndSetColor());
    const color = selectColor(store.getState());
    expect(typeof color).toBe('string');
    expect(color !== '').toBe(true);
    expect(color.startsWith('#')).toBe(true);
  });
});
