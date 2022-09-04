import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';

import {store} from '~/domain/store';
import {App} from '~/ui/screens/App/App';

export function Root() {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
}
