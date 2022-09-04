import React, {useState} from 'react';

import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {
  selectIsConnected,
  selectUserInfos,
  signOut,
  trySignIn,
} from '../../domain/authentication/authenticationSlice';
import {useDomainDispatch, useDomainSelector} from '../../domain/store';

export function SignInForm() {
  const [login, setLogin] = useState('matt');

  const isConnected = useDomainSelector(selectIsConnected);
  const userInfo = useDomainSelector(selectUserInfos);

  const dispatch = useDomainDispatch();

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
        <Button title="Sign Out 🚪" onPress={() => dispatch(signOut())} />
      ) : (
        <Button title="Sign In" onPress={() => dispatch(trySignIn(login))} />
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
