import {getRandomColor} from './colorService';

describe('random color', () => {
  it('give me a color', async () => {
    const color = await getRandomColor();
    expect(typeof color).toBe('string');
  });
});
