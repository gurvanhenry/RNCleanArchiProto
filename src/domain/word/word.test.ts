import {store} from '~/domain/store';
import {fetchAndSetWord, selectWord} from '~/domain/word';

describe('word', () => {
  it('initial word', () => {
    const word = selectWord(store.getState());
    expect(word).toBe('');
  });

  it('get a new word', async () => {
    await store.dispatch(fetchAndSetWord());
    const word = selectWord(store.getState());
    expect(word).toBe('eye');
  });
});
