import React, {useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {fetchAndSetColor, selectColor, selectLoading} from '~/domain/color';
import {Button} from '~/ui/components/Button';
import {useAppDispatch, useAppSelector} from '~/ui/hook/store';

export function RandomColor() {
  const color = useAppSelector(selectColor);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAndSetColor());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <Text style={{backgroundColor: color}}>random color</Text>
          <Button
            title="refresh"
            onPress={() => dispatch(fetchAndSetColor())}
          />
        </>
      ) : (
        <Text>LOADING...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
    height: 80,
    width: 200,
  },
});
