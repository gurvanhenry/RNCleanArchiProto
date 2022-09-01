// compo vue :
// le plus simple possible
// il reçoit les données mais ne fait pas de traitement
// par exemple le fullname est capitalisé avant

import React from 'react';

import {View, Text, TextInput, Button} from 'react-native';
import {useAuthentication} from './useAuthentication';

export function AuthenticationScreen() {
  const [login, setLogin] = React.useState('matt');
  const {isConnected, userInfo, trySignIn} = useAuthentication();
  return (
    <View>
      <Text>Crazy app : auth screen</Text>
      <Text>Is connected: {isConnected ? 'yes' : 'no'}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>user:</Text>
        <TextInput
          value={login}
          onChangeText={setLogin}
          style={{borderWidth: 1, margin: 10, flex: 1}}
        />
      </View>
      {userInfo && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>userInfo:</Text>
          <Text>{JSON.stringify(userInfo)}</Text>
        </View>
      )}
      <Button title="SignIn" onPress={() => trySignIn(login)} />
    </View>
  );
}
