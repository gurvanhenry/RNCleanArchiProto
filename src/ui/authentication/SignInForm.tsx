import React, {useState} from 'react';

import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
        <Pressable style={styles.button} onPress={() => dispatch(signOut())}>
          <Text>Sign Out 🚪</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.button}
          onPress={() => dispatch(trySignIn(login))}>
          <Text>Sign In</Text>
        </Pressable>
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
  button: {
    backgroundColor: '#226FF3',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});
