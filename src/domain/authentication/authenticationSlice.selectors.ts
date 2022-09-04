import {RootState} from '~/domain/store';

// selectors :
// ----------------------
// si on veut remplacer :
//   const isConnected = useSelector((state: RootState) => state.authentication.isConnected)
// par
//   const isConnected = useSelector((state: RootState) => selectIsConnected)
//
// au passage le compo vue qui l'utilise ne connait pas la structure interne du state. et n'import pas RootState
//import { RootState } from '~/domain/store';

// ça peut aussi servir pour modifier la donnée dans le selecteur avant de l'envoyer
export const selectIsConnected = (state: RootState) =>
  state.authentication.isConnected;

export const selectUserInfos = (state: RootState) =>
  state.authentication.userInfo;
