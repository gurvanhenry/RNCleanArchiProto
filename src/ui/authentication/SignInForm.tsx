import React, {useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

import {
  selectIsConnected,
  selectUserInfos,
  signOut,
  trySignIn,
} from '~/domain/authentication/authenticationSlice';
import {Button} from '~/ui/components/Button';
import {useDomainDispatch, useDomainSelector} from '~/ui/hook/store';
import {Colors} from '~/ui/resource/colors';

export function SignInForm() {
  const [login, setLogin] = useState('matt');

  const isConnected = useDomainSelector(selectIsConnected);
  const userInfo = useDomainSelector(selectUserInfos);

  const dispatch = useDomainDispatch();

  return (
    <View style={styles.container}>
      {!isConnected ? (
        <>
          <Button
            title="Fill with valid user"
            onPress={() => setLogin('matt')}
            style={[
              styles.smallButton,
              {width: 160, backgroundColor: Colors.valid},
            ]}
          />
          <Button
            title="Fill with invalid user"
            onPress={() => setLogin('unknown')}
            style={[
              styles.smallButton,
              {width: 160, backgroundColor: Colors.invalid},
            ]}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>user:</Text>
            <TextInput
              value={login}
              onChangeText={setLogin}
              style={styles.textInput}
            />
          </View>
          <Button title="Sign In" onPress={() => dispatch(trySignIn(login))} />
        </>
      ) : (
        <Button title="Sign Out 🚪" onPress={() => dispatch(signOut())} />
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  smallButton: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
});
