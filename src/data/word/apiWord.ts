import axios from 'axios';

export async function getRandomWord() {
  try {
    const response = await axios.get(
      'https://random-word-api.hserokuapp.com/word',
    );
    if (response.data) {
      return response.data[0];
    } else {
      return '';
    }
  } catch (error) {
    console.error(error);
    return '';
  }
}
