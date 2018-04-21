import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class FriendOrDatePage extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/group.png')}
        style={{width: 40, height: 22}}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Invitation')}
        >
          <Text style={styles.buttonText}>
            FRIENDWATCH
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            DATEWATCH
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
    backgroundColor: '#0CB99E'
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 25,
  },
  button: {
    justifyContent: 'center',
    marginTop: 130,
    // paddingTop: 35,
    width: 330,
    height: 90,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
