import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {AuthenticationScreen} from './presentation/AuthenticationScreen';

export function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <AuthenticationScreen />
    </SafeAreaView>
  );
}
