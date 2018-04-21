import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  TabNavigator,
} from 'react-navigation';

import HomeScreen from './src/components/HomeScreen';
import stackNav from './src/components/stackNav';
import ProfileScreen from './src/components/ProfileScreen';

const NuevaBasicCalculator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    stackNav: { screen: stackNav },
    ProfileScreen: { screen: ProfileScreen },
    },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'lightgrey',
        inactiveTintColor: 'black',
        // inactiveBackgroundColor: 'green',
        showLabel: false,
        labelStyle: {
          fontSize: 16,
          padding: 10,
        },
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        }
      }
    }
)

AppRegistry.registerComponent('NuevaBasicCalculator', () => NuevaBasicCalculator);
