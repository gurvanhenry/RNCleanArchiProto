import React, {useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {fetchAndSetWord, selectWord} from '~/domain/word';
import {Button} from '~/ui/components/Button';
import {useAppDispatch, useAppSelector} from '~/ui/hook/store';

export function RandomWord() {
  const word = useAppSelector(selectWord);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAndSetWord());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>random word from the internet:</Text>
      <Text>{word}</Text>
      <Button title="refresh" onPress={() => dispatch(fetchAndSetWord())} />
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
