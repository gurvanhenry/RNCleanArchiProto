import React from 'react';

import {storiesOf} from '@storybook/react-native';

import ReduxProvider from '~/ui/storybook/ReduxProvider';

import {SignInForm} from './SignInForm';

storiesOf('Sign In Form', module)
  .addDecorator(story => <ReduxProvider>{story()}</ReduxProvider>)
  .add('default', () => <SignInForm />);
