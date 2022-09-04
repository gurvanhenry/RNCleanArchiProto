import {getRandomWord} from './apiWord';

describe('apiWord', () => {
  it('get random word', async () => {
    const word = await getRandomWord();
    expect(word).toBe('eye');
  });
});
