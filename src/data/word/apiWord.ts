// j'ai choisi une classe static ici pour forcer l'usage sous ce format : await ApiWord.getRandomWord();
// comme ça on voit forcément le nom de la classe Api.... Ca me semble plus clair

import axios from 'axios';

export class ApiWord {
  static async getRandomWord() {
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
      // console.error(error);
      return '';
    }
  }
}
