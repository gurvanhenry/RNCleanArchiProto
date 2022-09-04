// le mock de emoji generator peut surement être remplacé par une DI du service

import * as emojiGenerator from '~/data/emoji/emojiGenerator';
import {selectEmoji, setRamdomEmoji} from '~/domain/emoji';
import {store} from '~/domain/store';

describe('emoji', () => {
  it('get a emoji', () => {
    // arrange
    const spy = jest.spyOn(emojiGenerator, 'getEmoji');
    spy.mockReturnValue('👍');
    // act
    store.dispatch(setRamdomEmoji());
    const emoji = selectEmoji(store.getState());
    // assert
    expect(emoji).toBe('👍');
  });
});
