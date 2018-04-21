import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import DrinkingQuestion from './QuestionPages/DrinkingQuestion';
import AfterQuestion from './QuestionPages/AfterQuestion';
import TransportationQuestion from './QuestionPages/TransportationQuestion';

export default class QuestionScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/group.png')}
        style={{width: 45, height: 26}}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state =
     { title: this.props.navigation.state.params.title, address: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          YOU HAVE AN EVENT TODAY
        </Text>

        <View style={styles.box}>
          <AfterQuestion />

          <TransportationQuestion />
        </View>

        <TouchableOpacity
          style={styles.done}
          onPress={() => navigate('Summary', {title: this.state.title })}
        >
          <Text style={styles.blockText}>
            DONE
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
    justifyContent: 'space-around',
    backgroundColor: '#0CB99E'
  },
  title: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },
  block: {
    width: 350,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  blockText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  done: {
    width: 350,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  box: {
    backgroundColor: '#E2E2E2',
    borderRadius: 18,
    padding: 10,
    width: 350,
    height: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
