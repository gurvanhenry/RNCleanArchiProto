import {ApiWord} from '~/data/word/ApiWord';
import {AppDispatch} from '~/domain/store';

import {wordSlice} from './wordSlice';

export const fetchAndSetWord = () => async (dispatch: AppDispatch) => {
  const word = await ApiWord.getRandomWord();
  dispatch(wordSlice.actions.setWord(word));
};
