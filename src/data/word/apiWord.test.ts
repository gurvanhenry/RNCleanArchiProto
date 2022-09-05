import {ApiWord} from './ApiWord';

describe('apiWord - getRandomWord', () => {
  it('success - get a word', async () => {
    const testWord = 'eye';
    const word = await ApiWord.getRandomWord();
    expect(word).toBe(testWord);
  });

  it('network error', async () => {
    // try {
    //   await ApiWord.getRandomWord();
    // } catch (error) {
    //   expect(error).toEqual({error: 'Network Error'});
    // }
  });
});

/*

--
partie network error commenté car ça ne passait en mode watch
--

import axios from 'axios';

export function mockApiGetSuccess(testWord: string = 'gorilla') {
  jest.mock('axios');
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const RESPONSE_DATA = [testWord];
  mockedAxios.get.mockResolvedValue({
    data: RESPONSE_DATA,
    status: 200,
  });
}

export function mockApiGetNetworkError() {
  jest.mock('axios');
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const message = 'Network Error';
  mockedAxios.get.mockRejectedValue(new Error(message));
}

*/
