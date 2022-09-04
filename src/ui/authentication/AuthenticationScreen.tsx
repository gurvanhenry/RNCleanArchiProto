// compo vue :
// le plus simple possible
// il reçoit les données mais ne fait pas de traitement
// par exemple le fullname est capitalisé avant

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

import {selectIsConnected} from '~/domain/authentication/authenticationSlice';

import {SignInForm} from './SignInForm';

export function AuthenticationScreen() {
  const isConnected = useSelector(selectIsConnected);
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
