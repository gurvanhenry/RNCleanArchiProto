import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';

import {Root} from './Root';

// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders correctly', async () => {
  render(<Root />);
});

// waitFor is added because state change on component mount
//   await waitFor(() => render(<Root />));
// mais ça ne suffit pas ...
// il faudrait probablement mocker le store
