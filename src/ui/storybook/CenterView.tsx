import React from 'react';

import {View} from 'react-native';

export default function CenterView({children}: {children: React.ReactNode}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      {children}
    </View>
  );
}
