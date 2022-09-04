import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {AuthenticationScreen} from '~/ui/screens/Authentication/AuthenticationScreen';

export function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <AuthenticationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
