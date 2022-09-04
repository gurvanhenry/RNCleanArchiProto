import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {AuthenticationState, UserInfo} from './authenticationSlice.types';

const initialState: AuthenticationState = {
  isConnected: false,
  userInfo: undefined,
};

// reducers :
// ----------------------
// ici je pense data et reducer : je reçois donc ce que je dois sauver
// (par exemple la tentative de signin à déjà eu lieu dans l'action,
// si signIn est appelé ici c'est que la connexion est valide et que j'ai un userInfo à sauver)
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserInfo>) => {
      state.isConnected = true;
      state.userInfo = action.payload;
    },
    signOut: state => {
      state.isConnected = false;
      state.userInfo = undefined;
    },
  },
});

export const authenticationReducer = authenticationSlice.reducer;
