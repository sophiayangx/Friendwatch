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

export default class JoinScreen extends React.Component {
  render () {
    const values = [
      {friendButton: 'FRIEND #1'},
      {friendButton: 'FRIEND #2'},
      {friendButton: 'FRIEND #3'},
      {friendButton: 'FRIEND #4'},
      {friendButton: 'FRIEND #5'},
  ];

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            F R I E N D W A T C H
        </Text>

        <Text style={styles.selectPlayers}>
            SELECT PLAYERS
        </Text>

        <View>
          {values.map((value, i) => (
            <TouchableOpacity style={styles.friendButton}>
              <Text style={styles.friendButtonText}>
                {value.friendButton}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.startWatch}
          onPress={() => navigate('Timer')}
        >
          <Text style={styles.startWatchText}>
            START WATCH
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
    backgroundColor: '#53b69f'
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 60,
    marginRight: 70,
    fontWeight: 'bold',
  },
  selectPlayers: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -30,
    marginBottom: 10,
  },
  friendButton: {
    paddingTop: 15,
    width: 360,
    height: 60,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    opacity: 2,
  },
  friendButtonText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#f97266',
  },
  startWatch: {
    width: 340,
    height: 90,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
  },
  startWatchText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 45,
    marginTop: 20,
  },
});
