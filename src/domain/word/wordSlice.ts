import {PayloadAction, createSlice} from '@reduxjs/toolkit';

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

export const wordReducer = wordSlice.reducer;
