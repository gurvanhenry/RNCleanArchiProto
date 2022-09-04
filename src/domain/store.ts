import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import authenticationReducer from './authentication/authenticationSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
