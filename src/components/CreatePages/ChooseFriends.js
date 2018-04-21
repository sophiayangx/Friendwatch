import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import ContactsWrapper from 'react-native-contacts-wrapper';

export default class InvitationScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.chooseText}>
          CHOOSE YOUR FRIENDS
        </Text>

        <View style={styles.friendsContainer}>
          <TouchableHighlight style={styles.friend}>
            <Text style={{fontSize: 20}}>
              SY
            </Text>
          </TouchableHighlight>

          <TouchableOpacity style={[styles.friend, {backgroundColor: "#adb0b0"}]}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chooseText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  friendsContainer: {
    height: 60,
    width: 320,
    flexDirection: 'row',
  },
  friend: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
});
