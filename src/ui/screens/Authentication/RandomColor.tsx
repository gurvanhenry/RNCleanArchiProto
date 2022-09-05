import React, {useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {fetchAndSetColor, selectColor} from '~/domain/color';
import {Button} from '~/ui/components/Button';
import {useAppDispatch, useAppSelector} from '~/ui/hook/store';

export function RandomColor() {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAndSetColor());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: color}}>random color</Text>
      <Button title="refresh" onPress={() => dispatch(fetchAndSetColor())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    padding: 10,
  },
});
