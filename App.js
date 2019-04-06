import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome/';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <LogIn/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
