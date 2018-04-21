import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/group.png')}
        style={{width: 45, height: 26}}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Create')}
        >
          <Text style={styles.buttonText}>
            CREATE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Invitation')}
        >
          <Text style={styles.buttonText}>
            INVITATIONS
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
    backgroundColor: '#0CB99E',
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 25,
  },
  button: {
    justifyContent: 'center',
    width: 330,
    height: 90,
    marginTop: 130,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
