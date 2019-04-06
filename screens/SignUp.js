import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import Background from './../components/Background';


export default class SignUp extends React.Component {
  render() {
    return (
    <View>
      <Background/>
      <View style={styles.textView}>
        <Text style = {styles.header}>Sign Up!</Text>
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
        <View>
          <Text style = {styles.subheaders}>School</Text>
          <TextInput style = {styles.textInput}></TextInput>
          <View style = {styles.textLine}/>
        </View>
        <View>
          <Text style = {styles.subheaders}>Email</Text>
          <TextInput style = {styles.textInput}></TextInput>
          <View style = {styles.textLine}/>
        </View>
        <TouchableOpacity onPress={this.search}>
          <View style = {styles.goRect}/>
          <Text style = {styles.goText}>Go!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.search}>
          <Text style = {styles.logInText}>or Log In ></Text>
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
      fontSize: 80,
      textAlign: 'center',
      marginTop: Dimensions.get("screen").height*0.12,
    },
    subheaders: {
      color: '#43494F',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 30,
      textAlign: 'left',
      marginLeft: Dimensions.get("screen").width*0.15,
      marginTop: Dimensions.get("screen").height*0.06,
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
      marginTop: Dimensions.get("screen").height*0.06,
    },
    goText: {
      color: '#ffffff',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 50,
      textAlign: 'center',
      marginTop: -Dimensions.get("screen").height*0.065,
    },
    logInText: {
      color: '#599C67',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 30,
      textAlign: 'right',
      marginTop: Dimensions.get("screen").height*0.025,
      marginRight: Dimensions.get("screen").width*0.04,
    }
  });
  