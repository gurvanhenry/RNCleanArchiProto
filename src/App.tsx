import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {AppContextProvider} from './presentation/AppContext';
import {AuthenticationScreen} from './presentation/AuthenticationScreen';

export function App() {
  return (
    <AppContextProvider>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <AuthenticationScreen />
      </SafeAreaView>
    </AppContextProvider>
  );
}
