import {configureStore} from '@reduxjs/toolkit';

import {authenticationReducer} from './authentication';
import {emojiReducer} from './emoji';
import {wordReducer} from './word';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    emoji: emojiReducer,
    word: wordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
