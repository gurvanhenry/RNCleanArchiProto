import React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import CenterView from '~/ui/storybook/CenterView';

import {Button} from './Button';

storiesOf('Button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('with text', () => (
    <Button title="button" onPress={action('clicked-text')} />
  ))
  .add('with some emoji', () => (
    <Button title="🧯 👍 🎸" onPress={action('clicked-emoji')} />
  ));
