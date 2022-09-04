import 'react-native';
import React from 'react';

import {render, waitFor} from '@testing-library/react-native';

import {Root} from './Root';

it('renders correctly', async () => {
  await waitFor(() => render(<Root />));
});

// waitFor is added because state change on component mount
