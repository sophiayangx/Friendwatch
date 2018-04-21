import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Picker,
} from 'react-native';

export default class TransportationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  updateUser = (user) => {
     this.setState({ user: user })
  }

  render() {
    return (
      <View>
        <Text style={styles.blockText}>
          HOW WILL YOU GET THERE?
        </Text>

        <View style={styles.allContainer}>
            <Text style={styles.pickerText}> {this.state.user} </Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={styles.picker}>
                 <Picker.Item label = "Walk" value = "Walk" />
                 <Picker.Item label = "Bike" value = "Bike" />
                 <Picker.Item label = "Lyft" value = "Lyft" />
                 <Picker.Item label = "Other" value = "Other" />
              </Picker>
            </View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
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
  allContainer: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    width: 300,
    height: 130,
    borderWidth: 1,
  },
  picker: {
    marginTop: -30,
  },
  pickerText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
