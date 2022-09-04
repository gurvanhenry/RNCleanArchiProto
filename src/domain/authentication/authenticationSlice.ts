import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {AppDispatch, RootState} from '~/domain/store';

import {Authentication} from './service/Authentication';

export type UserInfo = {
  fullname: string;
  age: number;
};

export interface AuthenticationState {
  isConnected: boolean;
  userInfo: UserInfo | undefined;
}

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

export const {signOut} = authenticationSlice.actions;

// actions :
// ----------------------
// ici je reçois des actions qui nécessite plus de logique que juste modifier le store avec les arguments reçus
export const trySignIn = (login: string) => (dispatch: AppDispatch) => {
  // timeout to simulate long call
  setTimeout(() => {
    const authentication = new Authentication();
    const signInResult = authentication.signIn(login);
    if (signInResult.allowed && signInResult.userInfo) {
      const signIn = authenticationSlice.actions.signIn;
      dispatch(signIn(signInResult.userInfo));
    } else {
      // notify error ?
    }
  }, 500);
};

// selectors :
// ----------------------
// si on veut remplacer :
//   const isConnected = useSelector((state: RootState) => state.authentication.isConnected)
// par
//   const isConnected = useSelector((state: RootState) => selectIsConnected)
//
// au passage le compo vue qui l'utilise ne connait pas la structure interne du state. et n'import pas RootState
//
// ça peut aussi servir pour modifié la donné dans le selecteur avant de l'envoyé
export const selectIsConnected = (state: RootState) =>
  state.authentication.isConnected;

export const selectUserInfos = (state: RootState) =>
  state.authentication.userInfo;

export default authenticationSlice.reducer;
