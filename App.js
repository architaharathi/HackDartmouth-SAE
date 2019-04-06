import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome/'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Welcome/>
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
