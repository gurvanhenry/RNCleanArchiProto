// hook qui gère :
// - les actions user (équivalent dispatch redux)
// - la maj des données à la vue (isConnected / user)
//
// - le domaine à déjà mis en forme la data pour notre usage mais si cette vue à besoin d'un format spécifique, il peut etre changé ici

import React from 'react';

import {Authentication} from '../domain/use-case/Authentication';
import {AppContext} from './AppContext';

export function useAuthentication() {
  const {setIsConnected, setUserInfo} = React.useContext(AppContext);

  function trySignIn(login: string) {
    const authentication = new Authentication();
    const signInResult = authentication.signIn(login);
    if (signInResult.allowed) {
      setIsConnected(true);
      setUserInfo(signInResult.userInfo);
    } else {
      setIsConnected(false);
      setUserInfo(undefined);
    }
  }

  return {trySignIn};
}
