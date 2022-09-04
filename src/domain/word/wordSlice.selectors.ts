import {RootState} from '~/domain/store';

export const selectWord = (state: RootState) => state.word.word;
