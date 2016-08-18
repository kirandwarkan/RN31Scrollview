/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import RefreshingScrollView from './RefreshingScrollView';

class RN31Scrollview extends Component {
  render() {
    return (
      <RefreshingScrollView />
    );
  }
}

AppRegistry.registerComponent('RN31Scrollview', () => RN31Scrollview);
