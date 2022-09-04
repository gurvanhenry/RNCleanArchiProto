import 'react-native';
import React from 'react';

import {create} from 'react-test-renderer';

import {Root} from './Root';

it('renders correctly', () => {
  create(<Root />);
});
