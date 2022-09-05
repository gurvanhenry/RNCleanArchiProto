import {configure, getStorybookUI} from '@storybook/react-native';
import './config/rn-addons';

configure(() => {
  // require('./stories');
  // require: ['../src/ui/**/*.stories.tsx'];
  require('../src/ui/components/Button.stories.tsx');
  require('../src/ui/screens/Authentication/SignInForm.stories.tsx');
}, module);

const StorybookUIRoot = getStorybookUI({asyncStorage: null});

export default StorybookUIRoot;
