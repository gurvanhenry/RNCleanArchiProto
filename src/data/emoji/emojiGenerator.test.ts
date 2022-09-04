import {getEmoji} from './emojiGenerator';

describe('emojiGenerator', () => {
  it('return random emoji', () => {
    const emoji = getEmoji();
    expect(typeof emoji).toBe('string');
  });
});
