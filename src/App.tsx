import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AppContextProvider} from './ui/AppContext';
import {AuthenticationScreen} from './ui/authentication/AuthenticationScreen';

export function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <AuthenticationScreen />
      </SafeAreaView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
