import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

export default class InvitationScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.blockText}>
          EVENT INFORMATION
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../images/download.png')} style={{width: 80, height: 80}} />
          <TextInput
            style={styles.facebook}
            placeholder="PASTE EVENT LINK"
            returnKeyType="next"
          />
        </View>

        <Text style={styles.blockText}>
          OR
        </Text>

        <TouchableOpacity
          style={styles.manuel}
          onPress={() => navigate('ManuelInput')}
        >
          <Text style={{fontSize: 23}}>
            MANUAL INPUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 230,
  },
  blockText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  manuel: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  facebook: {
    height: 80,
    width: 230,
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 10,
  },
});
