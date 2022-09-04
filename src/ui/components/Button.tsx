import React from 'react';

import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';

import {Colors} from '~/ui/resources/colors';

export function Button({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});
