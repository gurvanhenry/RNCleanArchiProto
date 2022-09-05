import {AnyAction, ThunkAction, configureStore} from '@reduxjs/toolkit';

import {ApiWord} from '~/data/word/ApiWord';
import {authenticationReducer} from '~/domain/authentication';
import {colorReducer} from '~/domain/color';
import {emojiReducer} from '~/domain/emoji';
import {wordReducer} from '~/domain/word';

export type ThunksExtraArgument = {
  ApiWord: typeof ApiWord;
};

const extraArgument = {
  ApiWord,
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunksExtraArgument,
  AnyAction
>;

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    emoji: emojiReducer,
    word: wordReducer,
    color: colorReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// je n'ai pas utilisé createAsyncThunk (https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk)
// pour avoir 3 états : pending, fulfilled, and rejected
// bon exemple : redux-clean-example/examples/counter/src/app/use-cases/counter.ts
