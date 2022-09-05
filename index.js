import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {Root} from './src/Root';

AppRegistry.registerComponent(appName, () => Root);

// enable storybook:
// import StorybookUIRoot from './storybook/StorybookUIRoot';
// AppRegistry.registerComponent(appName, () => StorybookUIRoot);
