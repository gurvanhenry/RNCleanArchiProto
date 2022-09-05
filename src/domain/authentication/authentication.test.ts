import {
  selectIsConnected,
  selectUserInfos,
  signOut,
  trySignIn,
} from '~/domain/authentication';
import {store} from '~/domain/store';

describe('authentication domain', () => {
  describe('initial state', () => {
    it('isConnected', () => {
      const isConnected = selectIsConnected(store.getState());
      expect(isConnected).toBe(false);
    });

    it('userInfos', () => {
      const userInfos = selectUserInfos(store.getState());
      expect(userInfos).toBe(undefined);
    });
  });

  describe('actions', () => {
    it('trySignIn - signOut', async () => {
      const login = 'matt';
      let isConnected, userInfos;
      // signin
      await store.dispatch(trySignIn(login));
      isConnected = selectIsConnected(store.getState());
      userInfos = selectUserInfos(store.getState());
      expect(isConnected).toBe(true);
      expect(userInfos).toStrictEqual({fullname: 'Matthiew', age: 48});
      // signout
      await store.dispatch(signOut());
      isConnected = selectIsConnected(store.getState());
      userInfos = selectUserInfos(store.getState());
      expect(isConnected).toBe(false);
      expect(userInfos).toBe(undefined);
    });
  });
});
