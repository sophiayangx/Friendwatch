import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import OpenPage from './src/components/OpenPage';
import GroupPage from './src/components/GroupPage';
import JoinPage from './src/components/JoinPage';
import TimerPage from './src/components/TimerPage';


class OpenScreen extends React.Component {
  render() {
    return (
      <OpenPage
        navigation={this.props.navigation}
      />
    );
  }
}

class GroupScreen extends React.Component {
  render() {
    return (
      <GroupPage
        navigation={this.props.navigation}
      />
    );
  }
}

class JoinScreen extends React.Component {
  render() {
    return (
      <JoinPage
        navigation={this.props.navigation}
      />
    );
  }
}

class TimerScreen extends React.Component {
  render() {
    return (
      <TimerPage
        navigation={this.props.navigation}
      />
    );
  }
}

export const NuevaBasicCalculator = StackNavigator({
  Home: { screen: OpenScreen },
  Group: { screen: GroupScreen },
  Join: { screen: JoinScreen },
  Timer: { screen: TimerScreen },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#53b69f'
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 60,
    marginRight: 70,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('NuevaBasicCalculator', () => NuevaBasicCalculator);
