import {configureStore} from '@reduxjs/toolkit';

import authenticationReducer from './authentication/authenticationSlice';
import emojiReducer from './emoji/emojiSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    emoji: emojiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
