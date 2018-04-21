import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class TimerScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/group.png')}
        style={{width: 45, height: 26}}
      />
    )
  }

  render () {
    const { navigate } = this.props.navigation;
    const values = [
      {friendIcon: 'ME'},
      {friendIcon: 'SOPHIA'},
      {friendIcon: 'RACHEL'},
      {friendIcon: 'CONNIE'},
      {friendIcon: 'JEN'},
      {friendIcon: 'BEATRICE'},
    ];

    return (
        <View style={styles.container}>
          <Text style={styles.title}>FRIENDWATCH FOR {this.props.navigation.state.params.title}</Text>

          <Image
            source={require('../images/trackmap.png')}
            style={{width: 340, height: 200, borderWidth: 1}}
          />

          <View style={styles.friendsContainer}>
            {values.map((value, i) => (
              <TouchableHighlight
                style={styles.friend}
                key={i}
              >
                <Text style={styles.friendText}>
                  {value.friendIcon}
                </Text>
              </TouchableHighlight>
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
    backgroundColor: '#0CB99E',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  friendsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  friend: {
    margin: 7,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  friendText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  // edit: {
  //   width: 340,
  //   height: 40,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 20,
  //   marginBottom:10,
  // },
});
