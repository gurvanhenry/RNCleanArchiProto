import React from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';

export function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text>Crazy app</Text>
    </SafeAreaView>
  );
}
