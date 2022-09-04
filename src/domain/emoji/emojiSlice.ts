// exemple simple qui j'ai entièrement mis dans un sclide redux
// il exporte pour la vue : 1 action / 1 selector

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
      // si c'est simple ok ou se forcer de faire des action séparées ?
      const newEmoji = getEmoji();
      state.emoji = newEmoji;
    },
  },
});

export const {setRamdomEmoji} = emojiSlice.actions;

export const selectEmoji = (state: RootState) => state.emoji.emoji;

export const emojiReducer = emojiSlice.reducer;
