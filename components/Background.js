import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class Background extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.RectangleShapeViewGreen} />
        <View style={styles.RectangleShapeViewYellow} />
        <View style={styles.RectangleShapeViewBlue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  RectangleShapeViewBlue: {
    width: Dimensions.get("screen").width*0.8,
    height: Dimensions.get("screen").height*1.1,
    transform:([{ rotateZ:'30deg'}]),
    backgroundColor: 'rgba(153, 217, 253, 0.5)',
    position: 'absolute',
  },
  RectangleShapeViewGreen: {
    width: Dimensions.get("screen").width*0.8,
    height: Dimensions.get("screen").height*1.1,
    transform:([{ rotateZ:'-70deg'}]),
    backgroundColor: 'rgba(89, 156, 103, 0.5)',
    position: 'absolute',
  },
  RectangleShapeViewYellow: {
    width: Dimensions.get("screen").width*0.8,
    height: Dimensions.get("screen").height*1.1,
    transform:([{ rotateZ:'70deg'}]),
    backgroundColor: 'rgba(252, 247, 130, 0.5)',
    position: 'absolute',
  }
});
