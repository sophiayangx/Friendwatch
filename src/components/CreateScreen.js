import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import ChooseFriends from './CreatePages/ChooseFriends';
import Calendar from './CreatePages/Calendar';

export default class InvitationScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/group.png')}
        style={{width: 45, height: 26}}
      />
    )
  }

  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state =
     { title: '', address: '' };
  }

  setDate(newDate) {
    this.setState({
      day: newDate.getDate(),
      month: newDate.toDateString().split(' ')[1],
    })
  }

  sendItem() {
    const { navigate } = this.props.navigation;
    global.events.push({
      eventTitle: this.state.title, eventInfo: this.state.address, month: this.state.month, day: this.state.day})
    global.callback(global.events)
    navigate('Question', {title: this.state.title })
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.box}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                TITLE OF EVENT:
              </Text>

              <TextInput
                style={styles.addressText}
                returnKeyType="next"
                autoCapitalize="characters"
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                WHERE IS THE EVENT?
              </Text>

              <TextInput
                style={styles.addressText}
                returnKeyType="done"
                placeholder="123 Address Lane, San Francisco, CA"
                autoCapitalize="words"
                onChangeText={(address) => this.setState({address})}
                value={this.state.address}
              />
            </View>

            <Calendar setDate={this.setDate}/>

            <ChooseFriends />
          </View>

          <TouchableOpacity
            style={styles.next}
            onPress={() => this.sendItem() }
          >
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              SEND
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CB99E',
  },
  box: {
    backgroundColor: '#E2E2E2',
    borderRadius: 15,
    width: 350,
    height: 570,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },
  next: {
    width: 350,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 30,
  },
  addressText: {
    height: 40,
    width: 320,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
});
