// séparer de store.ts pour marquer la différence entre redux pure et le lien avec react

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '~/domain/store';

export const useDomainSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useDomainDispatch = (): AppDispatch => useDispatch<AppDispatch>();
