import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

import Communications from 'react-native-communications';

export default class HomePage extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/gear.png')}
        style={{width: 40, height: 40}}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state =
     { info: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    const values = [
      {label: 'Name'},
      {label: 'School'},
      {label: 'Emergency Contact'},
      {label: 'Saved Address'},
    ];

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.title}>{this.state.info}</Text>

          <Image
            source={require('../images/profilepic.png')}
            style={{height: 150, width: 150,}}
          />

          <Text style={{color: 'blue'}}>Change Profile Photo</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={{justifyContent: 'space-around'}}>
            {values.map((value, i) => (
            <Text key={i} style={{fontSize: 16, marginLeft: 5}}>{value.label}</Text>
            ))}
          </View>

          <View style={{justifyContent: 'space-around'}}>
            {values.map((value, i) => (
            <TextInput
              placeholder={value.label}
              style={styles.textInput}
              key={i}
              autoCapitalize="words"
              onChangeText={(info) => this.setState({info})}
            />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CB99E',
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
  },
  profile: {
    height: 280,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    height: 200,
    width: 380,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  textInput: {
    height: 40,
    width: 200,
  },
});
