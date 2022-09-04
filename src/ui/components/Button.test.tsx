import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';

import {Button} from './Button';

it('renders correctly', () => {
  render(<Button title="test" />);
});
