import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './app/LoginScreen';
import ForgotPasswordScreen from './app/ForgotPasswordScreen';
import RegisterScreen from './app/RegisterScreen';


const RootStack = StackNavigator(
  {
    Home: {
      screen: LoginScreen,
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
    },
    Register: {
      screen: RegisterScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}