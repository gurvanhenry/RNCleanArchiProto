// logique métier :
// fonction simple pure TS
// appel des services si besoin (api etc..) (éviter de mettre ses codes technique ici)
// fait quelques adaption pour le besoin de notre usage (exemple : capitalize le fullname) (à faire dans le hook de la vue ?)

import {
  apiCallGetAge,
  apiCallGetToken,
  apiCallGetUserFullname,
} from '~/data/api/api';

import {UserInfo} from '../authenticationSlice';

export class Authentication {
  signIn(login: string): {allowed: boolean; userInfo?: UserInfo} {
    const getTokenResponse = apiCallGetToken(login);
    const token = getTokenResponse?.token;
    if (!token) {
      return {allowed: false};
    }
    const fullname = apiCallGetUserFullname(token);
    const age = apiCallGetAge(token);

    const userInfo: UserInfo = {
      fullname: this.capitalizeFullname(fullname),
      age: age,
    };

    if (login === 'matt') {
      return {allowed: true, userInfo: userInfo};
    } else {
      return {allowed: false};
    }
  }

  private capitalizeFullname(fullname: string) {
    return fullname.charAt(0).toUpperCase() + fullname.slice(1);
  }
}
