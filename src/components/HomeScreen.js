import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class HomePage extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/home.png')}
        style={{width: 23, height: 23}}
      />
    )
  }

  constructor(props) {
    super(props);
    if (!global.events) {
      global.events = []
    }

    this.state = {
      value: global.events,
    },
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem() {
    this.state.value.push()
    this.setState(
      this.state
    )
  }

  componentWillMount(){
    global.callback = (data) => {
      this.setState({value: data})
    }
  }

  render() {
    let { value } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../images/profilepic.png')} style={{height: 110, width: 110,}} />
          </View>

          <View style={{marginLeft: 10, justifyContent: 'center'}}>
            <Text style={styles.name}>
              GITIKA PAWHA
            </Text>

            <Text style={styles.school}>
              THE NUEVA SCHOOL
            </Text>
          </View>
        </View>

        <TouchableHighlight style={styles.upcomingButton}>
          <Text style={styles.upcoming} onPress={this.handleAddItem}>
            UPCOMING EVENTS
          </Text>
        </TouchableHighlight>

          <ScrollView style={{height: 350, marginTop: 30,}}>
            {/*<Text style={{color: 'white', fontSize: 20, marginTop: 80,}}>YOU HAVE NO EVENTS</Text>*/}

            {value.map((value, i) => (
            <View style={{flexDirection: 'row', height: 120}}  key={i}>
              <TouchableHighlight style={styles.eventsButton}>
                <Text>
                  {value.eventTitle}{"\n"}{value.eventInfo}
                </Text>
              </TouchableHighlight>

              <Image
                source={require('../images/event.png')}
                style={{height: 90, width: 90,}}
              >
                <Text style={styles.month}>{value.month}</Text>
                <Text style={styles.day}>{value.day}</Text>
              </Image>
            </View>
            ))}
          </ScrollView>
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
  profile: {
    height: 170,
    flexDirection: 'row',
    marginTop: 20,
  },
  name:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  school: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  upcomingButton: {
    height: 50,
    width: 320,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcoming: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  eventsButton: {
    height: 90,
    width: 230,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 10,
    padding: 13,
  },
  month: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontWeight: 'bold',
  },
  day: {
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
  },
});
