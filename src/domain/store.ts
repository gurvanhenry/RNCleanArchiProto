import {configureStore} from '@reduxjs/toolkit';

import {authenticationReducer} from '~/domain/authentication';
import {emojiReducer} from '~/domain/emoji';
import {wordReducer} from '~/domain/word';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    emoji: emojiReducer,
    word: wordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
