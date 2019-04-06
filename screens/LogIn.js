import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import Background from './../components/Background';


export default class LogIn extends React.Component {
  render() {
    return (
    <View>
      <Background/>
      <View style={styles.textView}>
        <Text style = {styles.header}>Log In!</Text>
        <View>
          <Text style = {styles.subheaders}>Username</Text>
          <TextInput style = {styles.textInput}></TextInput>
          <View style = {styles.textLine}/>
        </View>
        <View>
          <Text style = {styles.subheaders}>Password</Text>
          <TextInput style = {styles.textInput}></TextInput>
          <View style = {styles.textLine}/>
        </View>
        <TouchableOpacity onPress={this.search}>
          <View style = {styles.goRect}/>
          <Text style = {styles.goText}>Go!</Text>
        </TouchableOpacity>
      </View>  
    </View>
    );
  }
}
  
const styles = StyleSheet.create({
    header: {
      color: '#599C67',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 100,
      textAlign: 'center',
      marginTop: Dimensions.get("screen").height*0.12,
      marginBottom: Dimensions.get("screen").height*0.05,
    },
    subheaders: {
      color: '#43494F',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 50,
      textAlign: 'left',
      marginLeft: Dimensions.get("screen").width*0.15,
      marginTop: Dimensions.get("screen").height*0.08,
      marginBottom: Dimensions.get("screen").height*0.02,
    },
    textView: {
      flexDirection: 'column',
      justifyContent: 'center',  
    },
    textLine: { 
      backgroundColor: '#43494F',
      height: Dimensions.get("screen").height*0.005,
      width: Dimensions.get("screen").width*0.7,
      marginLeft: Dimensions.get("screen").width*0.15,
    },
    textInput: { 
      color: '#43494F',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 30,
      marginLeft: Dimensions.get("screen").width*0.15,
    },
    goRect: {
      backgroundColor: '#599C67',
      height: Dimensions.get("screen").height*0.07,
      width: Dimensions.get("screen").width*1,
      marginTop: Dimensions.get("screen").height*0.11,
    },
    goText: {
      color: '#ffffff',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 50,
      textAlign: 'center',
      marginTop: -Dimensions.get("screen").height*0.065,
    }
  });
  