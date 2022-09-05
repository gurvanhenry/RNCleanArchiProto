import React from 'react';

import {Provider} from 'react-redux';

import {store} from '~/domain/store';

export default function ReduxProvider({children}: {children: any}) {
  return <Provider store={store}>{children}</Provider>;
}
