import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class DrinkingScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.block}>
          <Text style={styles.blockText}>
            WILL YOU BE DRINKING?
          </Text>
        </TouchableHighlight>


        <View style={styles.answerContainer}>
          <TouchableHighlight style={[styles.yes, styles.answer]}>
            <Text style={styles.answerText}>
              YES
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.no, styles.answer]}>
            <Text style={styles.answerText}>
              NO
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.na, styles.answer]}>
            <Text style={styles.answerText}>
              N/A
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   backgroundColor: '#9fa9f9'
  // },
  block: {
    marginTop: 20,
    width: 350,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  blockText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 350,
    height: 100,
  },
  answer: {
    height: 60,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  yes: {
    backgroundColor: '#99d3bc',
  },
  no: {
    backgroundColor: '#ee6e6b',
  },
  na: {
    backgroundColor: '#908b8e',
  },
});
