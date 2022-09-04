import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useAuthentication} from './useAuthentication';

import React from 'react';
import {AppContext} from './AppContext';

export function SignInForm() {
  const [login, setLogin] = React.useState('matt');
  const {trySignIn, trySignOut} = useAuthentication();
  const {isConnected, userInfo} = React.useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>user:</Text>
        <TextInput
          value={login}
          onChangeText={setLogin}
          style={styles.textInput}
        />
      </View>
      {isConnected ? (
        <Button title="Sign Out 🚪" onPress={() => trySignOut()} />
      ) : (
        <Button title="Sign In" onPress={() => trySignIn(login)} />
      )}
      <Text>{isConnected ? '🟩YOU ARE IN' : '🟥'}</Text>
      <Text />
      {userInfo && (
        <View>
          <Text>userInfo:</Text>
          <Text>{JSON.stringify(userInfo)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 30,
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    flex: 1,
  },
});
