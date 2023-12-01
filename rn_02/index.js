/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// 앱 이름은 app.json에서 import 됨
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
