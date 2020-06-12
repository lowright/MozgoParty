import React from 'react'
import {View} from 'react-native'
import { Icon } from 'react-native-elements'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import StartedScreen from '../screens/AuthScreens/StartedScreen'
import AuthScreen from '../screens/AuthScreens/AuthScreen'
import AuthLoadingScreen from '../screens/AuthScreens/AuthLoadingScreen';
import RecoverScreeen from '../screens/AuthScreens/RecoverScreeen'
import RegistrationScreeen from '../screens/AuthScreens/RegistrationScreen'

import ShopScreen from '../screens/Shop/ShopScreen'
import CardGameScreen from '../screens/Shop/CardGameScreen'

import BusketScreen from '../screens/Card/BusketScreen'

import MyGamesScreen from '../screens/MyGames/MyGamesScreen'
import LikeScreen from '../screens/Liked/LikeScreen'

import PersonalArea from '../screens/Profile/PersonalArea'
import {EditPersonalArea} from '../screens/Profile/EditPersonalArea'
import {ChangePass} from '../screens/Profile/ChangePass'

import FAQScreen from '../screens/Settings/FAQScreen'
import SupportScreen from '../screens/Settings/SupportScreen'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import GamesGuideScreen from '../screens/Settings/GamesGuideScreen';
import GameProgressScreen from '../screens/Settings/GameProgressScreen';

const ShopStack = createStackNavigator(
    {
        ShopScreen : {
            screen : ShopScreen,
            navigationOptions: {
                headerShown: false
            },
        },
        CardGameScreen : {
            screen : CardGameScreen,
            navigationOptions: {
                headerShown: true
            },
        }
    },
)

const SettingsStack = createStackNavigator(
    {
        FAQScreen : {
            screen : FAQScreen,
            navigationOptions: {
                headerShown: false
            },
        },
        SupportScreen : {
            screen : SupportScreen,
            navigationOptions: {
                headerShown: true
            },
        },
        SettingsScreen : {
            screen : SettingsScreen,
            navigationOptions: {
                headerShown: true
            },
        },
        GamesGuideScreen : {
            screen : GamesGuideScreen,
            navigationOptions: {
                headerShown: true
            },
        },
        GameProgressScreen : {
            screen : GameProgressScreen,
            navigationOptions: {
                headerShown: true
            },
        }
    }
)

const MyGames = createStackNavigator(
    {
        MyGamesScreen : {
            screen : MyGamesScreen,
            navigationOptions: {
                headerShown: false
            },
        },
        LikeScreen : {
            screen : LikeScreen,
            navigationOptions: {
                headerShown: true
            },
        }
    },
)

const ShopCardStack = createStackNavigator(
    {
        BusketScreen : {
            screen : BusketScreen,
            navigationOptions: {
                headerShown: false
            },
        },
    },
)

const Auth = createStackNavigator(
{
    StartedScreen : {
        screen : StartedScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    AuthScreen : {
        screen : AuthScreen,
        navigationOptions: {
            headerShown: true
        },
    },
    RecoverScreeen : {
        screen : RecoverScreeen,
        navigationOptions: {
            headerShown: true
        },
    },
    RegistrationScreeen : {
        screen : RegistrationScreeen,
        navigationOptions: {
            headerShown: true
        },
    }
},
{
    initialRouteName: 'StartedScreen',
}
)

const Profile = createStackNavigator({
    PersonalArea : {
      screen : PersonalArea,
      navigationOptions: {
        headerShown: true,
        title  : 'Аккаунт '
      },
    },
    EditPersonalArea : {
      screen : EditPersonalArea,
      navigationOptions: {
        headerShown: true
      },
    },
    ChangePass : {
      screen : ChangePass,
      navigationOptions: {
        headerShown: true
      },
    },
    ShopCardStack : ShopCardStack
})



export const Navigation = createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Loading: Auth,
    Profile: Profile,
    Shop : ShopStack,
    MyGames : MyGames,
    SettingsStack : SettingsStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default Auth
