import {ApiCallGetTokenResponse} from './api.types';
import {apiCallGetToken, apiCallGetUserFullname} from './api';

describe('apiCallGetToken', () => {
  it('success - receive token', () => {
    const login = 'matt';
    const response: ApiCallGetTokenResponse | undefined =
      apiCallGetToken(login);
    expect(response?.token).toBe('a48d');
  });
  it('fail', () => {
    const login = 'other';
    const token = apiCallGetToken(login);
    expect(token).toBe(undefined);
  });
});

describe('apiCallGetUserFullname', () => {
  it('success - receive token', () => {
    const token = 'a48d';
    const fullname = apiCallGetUserFullname(token);
    expect(fullname).toBe('matthiew');
  });
});
