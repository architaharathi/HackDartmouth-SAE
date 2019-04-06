import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Background from './../components/Background';


export default class Welcome extends React.Component {
  render() {
    return (
    <View>
      <Background/>
      <Text style = {styles.header}>Find My Fracket</Text>
      <Text style = {styles.subheader}>sign up now!</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#43494F',
    fontFamily: 'MarkerFelt-Thin',
    fontSize: 100,
    textAlign: 'center',
    marginTop: Dimensions.get("screen").height*0.43,
  },
  subheader: {
    color: '#43494F',
    fontFamily: 'MarkerFelt-Thin',
    fontSize: 40,
    textAlign: 'center',
    marginTop: Dimensions.get("screen").height*0.2,
  }
});
