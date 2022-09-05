// dans cet exemple ApiWord est injecté à la déclaration du store
// see https://redux.js.org/usage/writing-logic-thunks#injecting-config-values-into-thunks

import {AppDispatch, AppThunk} from '~/domain/store';

import {wordSlice} from './wordSlice';

export const fetchAndSetWord =
  (): AppThunk => async (dispatch: AppDispatch, _, extraArgument) => {
    const {ApiWord} = extraArgument;
    const word = await ApiWord.getRandomWord();
    dispatch(wordSlice.actions.setWord(word));
  };
