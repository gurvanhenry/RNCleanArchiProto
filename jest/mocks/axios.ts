import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const RESPONSE_DATA = ['eye'];

mockedAxios.get.mockResolvedValue({
  data: RESPONSE_DATA,
  status: 200,
});
