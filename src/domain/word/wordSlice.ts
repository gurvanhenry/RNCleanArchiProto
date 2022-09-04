import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {AppDispatch, RootState} from '~/domain/store';

export interface WordState {
  word: string;
}

const initialState: WordState = {
  word: '',
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<string>) => {
      state.word = action.payload;
    },
  },
});

export const fetchAndSetWord = () => (dispatch: AppDispatch) => {
  dispatch(wordSlice.actions.setWord('TODO'));
};

export const selectWord = (state: RootState) => state.word.word;

export const wordReducer = wordSlice.reducer;
