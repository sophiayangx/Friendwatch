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
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
    this.props.setDate(newDate)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold',}}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 220,
  },
  datePicker: {
    height: 220,
    width: 320,
  },
});
