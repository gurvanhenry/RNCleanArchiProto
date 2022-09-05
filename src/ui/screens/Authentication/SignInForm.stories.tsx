import React from 'react';

import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import {SignInForm} from './SignInForm';

storiesOf('Components', module)
  .addDecorator(story => <View style={{width: 200}}>{story()}</View>)
  .add('sign in form', () => <SignInForm />);

// todo : see how to use compo in story when they useSelector and useDispatch
