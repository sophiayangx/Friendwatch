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

export default class TimerScreen extends React.Component {
  render () {
    const values = [
      {friendCircleButton: 'FRIEND #1'},
      {friendCircleButton: 'FRIEND #2'},
      {friendCircleButton: 'FRIEND #3'},
      {friendCircleButton: 'FRIEND #4'},
  ];

    return (
        <View style={styles.container}>
          <Text style={styles.title}>
              F R I E N D W A T C H
          </Text>

          <Text style={styles.timer}>
              29:59
          </Text>

          <Text style={styles.untilNext}>
              UNTIL NEXT TEST
          </Text>

          <TouchableHighlight style={styles.exit}>
            <Text style={styles.exitText}>
                SLIDE TO EXIT
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.players}>
            <Text style={styles.playersText}>
                PLAYERS
            </Text>
          </TouchableHighlight>

          <View style={styles.circleContainer}>
            {values.map((value, i) => (
              <TouchableOpacity style={styles.circleFriend}>
                <Text style={styles.circleFriendText}>
                  {value.friendCircleButton}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#53b69f',
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 70,
    fontWeight: 'bold',
  },
  timer: {
    color: 'white',
    fontSize: 110,
    backgroundColor: '#3e8a7a',
    padding: 15,
    marginLeft: -20,
    marginRight: -20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  untilNext: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  exit: {
    backgroundColor: 'white',
    paddingRight: 110,
    paddingLeft: 110,
    padding: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 35,
    marginBottom: 30,
  },
  exitText: {
    fontSize: 25,
    marginRight: -20,
    color: '#bbe9d7'
  },
  players: {
    backgroundColor: '#3e8a7a',
    paddingRight: 70,
    paddingLeft: 70,
    padding: 5,
    borderColor: '#3e8a7a',
    borderWidth: 1,
    borderRadius: 30,
  },
  playersText: {
    fontSize: 25,
    color: 'white',
  },
  circleContainer: {
    flexDirection: 'row',
    marginLeft: -13,
  },
  circleFriend: {
    marginTop: 10,
    borderRadius: 40,
    backgroundColor: '#ed6e6b',
    width: 75,
    height: 75,
    marginLeft: 13,
  },
  circleFriendText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
});
