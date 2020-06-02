import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Navigation} from './app/router/Navigation'

import FAQScreen from './app/screens/Settings/FAQScreen'
import SupportScreen from './app/screens/Settings/SupportScreen'
import SettingsScreen from './app/screens/Settings/SettingsScreen'
import GamesListItem from './app/components/GameListItem';
import GamesGuideScreen from './app/screens/Settings/GamesGuideScreen';

export default class App extends Component{

  render() {

    return (
      
      <GamesGuideScreen />
     
    )

  }

}
 