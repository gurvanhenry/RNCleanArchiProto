import {View, Text, TextInput, Button} from 'react-native';
import {useAuthentication} from './useAuthentication';

import React from 'react';
import {AppContext} from './AppContext';

export function SignInForm() {
  const [login, setLogin] = React.useState('matt');
  const {trySignIn} = useAuthentication();
  const {isConnected, userInfo} = React.useContext(AppContext);
  return (
    <View>
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
      <Text>{isConnected ? 'YOU ARE IN' : ''}</Text>
    </View>
  );
}
