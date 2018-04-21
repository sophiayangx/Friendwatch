import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  DatePickerIOS,
} from 'react-native';

export default class ManuelInputScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../../images/group.png')}
        style={{width: 40, height: 22}}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.blockText}>
            TITLE OF EVENT:
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.addressText}
              returnKeyType="next"
              autoCapitalize="characters"
            />
          </View>

          <Text style={styles.blockText}>
            WHEN IS THE EVENT?
          </Text>

          <DatePickerIOS
            style={styles.datePicker}
            date={this.state.chosenDate}
            onDateChange={this.setDate}
            format="YYYY-MM-DD"
            minDate="2018-04-05"
            maxDate="2025-12-01"
          />

          <Text style={styles.blockText}>
            WHERE IS THE EVENT?
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.addressText}
              placeholder="123 Address Lane, San Francisco, CA"
              returnKeyType="next"
              autoCapitalize="words"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.next}
          onPress={() => navigate('Question')}
        >
          <Text style={styles.blockText}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#0CB99E',
    flex: 1,
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: '#E2E2E2',
    borderRadius: 10,
    padding: 15,
    width: 350,
    height: 450,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  next: {
    width: 350,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  blockText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressText: {
    height: 50,
    width: 320,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  datePicker: {
    height: 180,
    width: 320,
    marginTop: -20,
    marginBottom: 20,
  },
});
