// exemple d'api qui retourne des données dans un autre format que celui désiré

import {ApiCallGetTokenResponse} from './authApi.types';

export function apiCallGetToken(
  login: string,
): ApiCallGetTokenResponse | undefined {
  if (login === 'matt') {
    return {token: 'a48d', uselessData: 'nanana'};
  } else {
    return undefined;
  }
}

export function apiCallGetUserFullname(token: string): string {
  if (token === 'a48d') {
    return 'matthiew';
  } else {
    return ''; // or custom exception ?
  }
}

export function apiCallGetAge(token: string): number {
  if (token === 'a48d') {
    return 48;
  } else {
    return 0; // or custom xception ?
  }
}
