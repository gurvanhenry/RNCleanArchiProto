import {createSlice} from '@reduxjs/toolkit';

import {getEmoji} from '~/data/emoji/emojiGenerator';
import {RootState} from '~/domain/store';

export interface EmojiState {
  emoji: string;
}

const initialState: EmojiState = {
  emoji: '?',
};

export const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {
    setRamdomEmoji: state => {
      // bon ou mauvais de mettre de la logique ici ?
      // si c'est simple ok our se forcer de faire des action séparé ?
      const newEmoji = getEmoji();
      state.emoji = newEmoji;
    },
  },
});

export const {setRamdomEmoji} = emojiSlice.actions;

export const selectEmoji = (state: RootState) => state.emoji.emoji;

export default emojiSlice.reducer;
