import {AppDispatch} from '~/domain/store';

import {authenticationSlice} from './authenticationSlice';
import {Authentication} from './service/Authentication';

// export des actions générées à partir du réducer :
export const {signOut} = authenticationSlice.actions;

// export des actions codées en plus
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
