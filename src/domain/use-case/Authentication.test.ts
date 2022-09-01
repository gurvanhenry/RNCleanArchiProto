import {Authentication} from './Authentication';

describe('signIn', () => {
  it('success - receive allowed + userinfo', () => {
    const login = 'matt';
    const authentication = new Authentication();
    const signInResult = authentication.signIn(login);
    expect(signInResult.allowed).toBe(true);
    expect(signInResult.userInfo).toStrictEqual({
      fullname: 'Matthiew',
      age: 48,
    });
  });

  it('fail', () => {
    const login = 'notallowed';
    const authentication = new Authentication();
    const signInResult = authentication.signIn(login);
    expect(signInResult.allowed).toBe(false);
    expect(signInResult.userInfo).toBe(undefined);
  });
});
