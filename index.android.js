/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class testdrawable extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Image width={200} height={267} source={{uri: 'jpg_3666'}} style={{width: 140, height: 140, backgroundColor: 'red'}} />
      <Image width={200} height={267} source={require('image!jpg_3666')} style={{width: 140, height: 140, backgroundColor: 'yellow'}} />

      <Image width={200} height={267} source={{uri: 'png_3665'}} style={{width: 140, height: 140, backgroundColor: 'red'}} />
      <Image width={200} height={267} source={require('image!png_3665')} style={{width: 140, height: 140, backgroundColor: 'yellow'}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testdrawable', () => testdrawable);
