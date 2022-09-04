// le mock de emoji generator peut surement être remplacé par une DI du service

import * as emojiGenerator from '~/data/emoji/emojiGenerator';
import {selectEmoji, setRamdomEmoji} from '~/domain/emoji';
import {store} from '~/domain/store';

const EMOJI_TEST_VALUE = '👍';

describe('emoji', () => {
  it('get a emoji', async () => {
    mockEmojiGenerator();
    await store.dispatch(setRamdomEmoji());
    const emoji = selectEmoji(store.getState());
    expect(emoji).toBe(EMOJI_TEST_VALUE);
  });
});

function mockEmojiGenerator() {
  const spy = jest.spyOn(emojiGenerator, 'getEmoji');
  spy.mockReturnValue(EMOJI_TEST_VALUE);
}
