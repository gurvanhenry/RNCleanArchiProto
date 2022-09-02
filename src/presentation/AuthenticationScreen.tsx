// compo vue :
// le plus simple possible
// il reçoit les données mais ne fait pas de traitement
// par exemple le fullname est capitalisé avant

import React from 'react';

import {View, Text} from 'react-native';
import {AppContext} from './AppContext';
import {SignInForm} from './SignInForm';

export function AuthenticationScreen() {
  const {isConnected} = React.useContext(AppContext);
  return (
    <View>
      <Text>Crazy app : auth screen</Text>
      <Text>isConnected: {isConnected ? 'yes' : 'no'}</Text>
      <SignInForm />
    </View>
  );
}
