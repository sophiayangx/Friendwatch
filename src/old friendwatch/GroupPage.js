import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

export default class GroupScreen extends React.Component {
  static navigationOptions = {
    title: 'GROUPS',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

      <Text style={styles.titleGroup}>
          F R I E N D W A T C H
      </Text>

        <TouchableOpacity style={styles.createBlock}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.plusImage}
              source={require('../images/plus-icon.png')}
            />
          </View>

          <Text style={styles.createText}>
            CREATE NEW GROUP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.joinBlock}
          onPress={() => navigate('Join')}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.joinImage}
              source={require('../images/group-icon.png')}
            />
          </View>

          <Text style={styles.createText}>
            JOIN GROUP
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
    backgroundColor: '#53b69f'
  },
  titleGroup:{
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#f97266',
    padding: 30,
    width: 375,
  },
  createBlock: {
    marginTop: 40,
    marginBottom: 50,
    width: 250,
    height: 180,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  plusImage: {
    marginTop: 20,
    height: 70,
    width: 70,
  },
  imageContainer:{
    alignItems: 'center',
  },
  createText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#f97266',
    paddingRight: 15,
    paddingTop: 10,
  },
  joinBlock: {
    marginTop: 20,
    width: 250,
    height: 180,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  joinImage: {
    marginTop: 30,
    height: 70,
    width: 150,
  },
});
