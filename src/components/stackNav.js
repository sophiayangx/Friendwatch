import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import ChooseScreen from './ChooseScreen';
import FriendOrDateScreen from './FriendOrDateScreen';
import InvitationScreen from './InvitationScreen';
import CreateScreen from './CreateScreen';
import QuestionScreen from './QuestionScreen';
import SummaryScreen from './SummaryScreen';
import EditScreen from './EditScreen';
import ProfileScreen from './ProfileScreen';
import MapScreen from './MapScreen';

export const stackNav = StackNavigator({
  Choose: { screen: ChooseScreen, navigationOptions: { header: null }  },
  FriendOrDate: { screen: FriendOrDateScreen },
  Invitation: { screen: InvitationScreen, navigationOptions: { title: 'INVITATIONS' }  },
  Create: { screen: CreateScreen, navigationOptions: { title: 'CREATE' } },
  Question: { screen: QuestionScreen },
  Summary: { screen: SummaryScreen },
  Edit: { screen: EditScreen },
  Profile: { screen: ProfileScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0CB99E',
  },
});

export default stackNav;
