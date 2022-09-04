// compo vue :
// le plus simple possible
// il reçoit les données mais ne fait pas de traitement
// par exemple le fullname est capitalisé avant

import React, {useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {selectIsConnected} from '~/domain/authentication/authenticationSlice';
import {selectEmoji, setRamdomEmoji} from '~/domain/emoji/emojiSlice';
import {useDomainDispatch, useDomainSelector} from '~/ui/hook/store';

import {SignInForm} from './SignInForm';

export function AuthenticationScreen() {
  const isConnected = useDomainSelector(selectIsConnected);
  const emoji = useDomainSelector(selectEmoji);
  const dispatch = useDomainDispatch();

  useEffect(() => {
    dispatch(setRamdomEmoji());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>{emoji}</Text>
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
