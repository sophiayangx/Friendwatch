import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class AfterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  clickedHome() {
    this.setState({location: 'Home'});
  }

  clickedSaved() {
    this.setState({location: 'Saved Location'});
  }

  clickedOther() {
    this.setState({location: 'Other'});
  }

  render() {
    var style1 = style2 = style3 = styles.after

    if (this.state.location === 'Home') {
      style1 = styles.clicked
    }

    if (this.state.location === 'Saved Location') {
      style2 = styles.clicked
    }

    if (this.state.location === 'Other') {
      style3 = styles.clicked
    }

    return (
      <View>
        <Text style={styles.blockText}>
          WHERE WILL YOU GO AFTER?
        </Text>

        <View style={styles.afterContainer}>
          <TouchableHighlight style={style1}>
            <Text style={styles.afterText} onPress={this.clickedHome.bind(this)}>
              HOME
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={style2}>
            <Text style={styles.afterText} onPress={this.clickedSaved.bind(this)}>
              SAVED LOCATION
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={style3}>
            <Text style={styles.afterText} onPress={this.clickedOther.bind(this)}>
              OTHER
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  afterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    width: 330,
  },
  after: {
    height: 60,
    width: 95,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  afterText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  clicked: {
    height: 60,
    width: 95,
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
