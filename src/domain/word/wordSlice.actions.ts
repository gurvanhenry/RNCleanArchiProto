import {getRandomWord} from '~/data/word/apiWord';
import {AppDispatch} from '~/domain/store';

import {wordSlice} from './wordSlice';

export const fetchAndSetWord = () => async (dispatch: AppDispatch) => {
  const word = await getRandomWord();
  dispatch(wordSlice.actions.setWord(word));
};
