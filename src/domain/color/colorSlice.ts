import {createSlice} from '@reduxjs/toolkit';

import {getRandomColor} from '~/data/color/colorService';
import {AppDispatch, RootState} from '~/domain/store';

export interface ColorState {
  color: string;
}

const initialState: ColorState = {
  color: '',
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const selectColor = (state: RootState) => state.color.color;

export const colorReducer = colorSlice.reducer;

export const fetchAndSetColor = () => async (dispatch: AppDispatch) => {
  const color = await getRandomColor();
  dispatch(colorSlice.actions.setColor(color));
};
