// compo vue :
// le plus simple possible
// il reçoit les données mais ne fait pas de traitement
// par exemple le fullname est capitalisé avant

import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {AppContext} from '../AppContext';
import {SignInForm} from './SignInForm';

export function AuthenticationScreen() {
  const {isConnected} = React.useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crazy app : auth screen</Text>
      <Text style={styles.isConnected}>
        isConnected: {isConnected ? 'yes' : 'no'}
      </Text>
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 20,
    fontSize: 20,
    color: 'orange',
  },
  isConnected: {},
});
