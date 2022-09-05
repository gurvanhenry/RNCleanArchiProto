import {createSlice} from '@reduxjs/toolkit';

import {getRandomColor} from '~/data/color/colorService';
import {AppDispatch, RootState} from '~/domain/store';

export interface ColorState {
  color: string;
  loading: boolean;
}

const initialState: ColorState = {
  color: '',
  loading: false,
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const selectColor = (state: RootState) => state.color.color;
export const selectLoading = (state: RootState) => state.color.loading;

export const colorReducer = colorSlice.reducer;

export const fetchAndSetColor = () => async (dispatch: AppDispatch) => {
  dispatch(colorSlice.actions.setLoading(true));
  const color = await getRandomColor();
  dispatch(colorSlice.actions.setColor(color));
  dispatch(colorSlice.actions.setLoading(false));
};

// loading and error could be done with createAsyncThunk
// https://redux-toolkit.js.org/api/createAsyncThunk
