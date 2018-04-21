import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            F R I E N D W A T C H
        </Text>

        <TouchableOpacity
          onPress={() => navigate('Group')}
          style={[styles.buttonWatch, styles.button]}
        >
          <Text style={styles.whiteButtonText}>
            WATCH
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonFriends, styles.button]}
        >
          <Text style={styles.whiteButtonText}>
            FRIENDS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonSettings, styles.button]}
        >
          <Text style={styles.blueButtonText}>
            SETTINGS
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#53b6a0'
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 60,
    marginRight: 70,
    fontWeight: 'bold',
  },
  whiteButtonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
  },
  blueButtonText:{
    textAlign: 'center',
    color: '#16aa88',
    fontSize: 40,
  },
  button: {
    paddingTop: 15,
    width: 360,
    height: 80,
    marginBottom: 80,
    borderRadius: 20,
    borderWidth: 1,
  },
  buttonWatch: {
    backgroundColor: '#ed6e6b',
    borderColor: '#ed6e6b',
  },
  buttonFriends: {
    backgroundColor: '#f7c474',
    borderColor: '#f7c474',
  },
  buttonSettings: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
});
