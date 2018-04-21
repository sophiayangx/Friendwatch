import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
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
    const values = [
      {friend: 'BEATRICE STEWART'},
      {friend: 'CONNIE LIU'},
      {friend: 'JEN SELBY'},
      {friend: 'RACHEL DULSKI'},
    ];

    const mapValues = ['1','2'];

    return (
      <View style={styles.container}>
        <ScrollView>
          {mapValues.map((mapValue, i) => (
          <View style={styles.invitationContainer} key={i}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>INVITATION FROM SOPHIA</Text>

            <View style={styles.contentContainer}>
              <Image source={require('../images/download.png')}  style={{width: 80, height: 80}}/>
              <Text style={{width: 230, height: 80, borderWidth: 2, padding: 5}}>Saturday, April 7TH @11 AM STANFORD UNIVERSITY 450 SERRA MALL, STANFORD, CA, 94305</Text>
            </View>

            <View style={[styles.contentContainer, {flexWrap: 'wrap'}]}>
              {values.map((value, i) => (
              <TouchableOpacity style={styles.friends} key={i}>
                <Text style={[styles.basicText, {fontSize: 18}]}>{value.friend}</Text>
              </TouchableOpacity>
              ))}
            </View>

            <View style={styles.contentContainer}>
              <TouchableOpacity style={[styles.button, {backgroundColor: '#f7c97f'}]}>
                <Text style={[styles.basicText, {fontSize: 25}]}>ACCEPT</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor: '#e2e2e2'}]}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>DECLINE</Text>
              </TouchableOpacity>
            </View>
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
  invitationContainer: {
    height: 400,
    width: 350,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  friends: {
    height: 50,
    width: 150,
    backgroundColor: '#aeb0b0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    height: 70,
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
