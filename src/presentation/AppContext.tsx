// context : equivalent à un redux / action + selecteur

import React from 'react';
import {UserInfo} from '../domain/entity/UserInfo';

export type AppState = {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
  userInfo: UserInfo | undefined;
  setUserInfo: (value: UserInfo | undefined) => void;
};

export const AppContext = React.createContext<AppState>(undefined);

export const AppContextProvider = ({children}: {children: any}) => {
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  const [userInfo, setUserInfo] = React.useState<UserInfo | undefined>(
    undefined,
  );

  const value: AppState = {isConnected, setIsConnected, userInfo, setUserInfo};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
