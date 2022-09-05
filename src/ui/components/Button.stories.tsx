import React from 'react';

import {View} from 'react-native';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from './Button';

import CenterView from 'storybook/stories/CenterView';

storiesOf('Button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('with text', () => (
    <Button title="button" onPress={action('clicked-text')} />
  ))
  .add('with some emoji', () => (
    <Button title="🧯 👍 🎸" onPress={action('clicked-emoji')} />
  ));
