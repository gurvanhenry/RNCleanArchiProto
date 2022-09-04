import React, {useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {fetchAndSetWord, selectWord} from '~/domain/word';
import {useDomainDispatch, useDomainSelector} from '~/ui/hook/store';

export function RandomWord() {
  const word = useDomainSelector(selectWord);
  const dispatch = useDomainDispatch();

  useEffect(() => {
    dispatch(fetchAndSetWord());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>random word from the internet:</Text>
      <Text>{word}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FF66A2',
    padding: 20,
  },
});
