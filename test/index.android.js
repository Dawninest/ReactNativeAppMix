/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class test extends Component {
  linkstart(){
    let appUrl = "mqq://";
    Linking.openURL(appUrl);
    // Linking.canOpenURL(appUrl).then(supported => {
    //   if (!supported) {
    //     alert('Can\'t handle url: ' + url);
    //   } else {
    //     return Linking.openURL(url);
    //   }
    // }).catch(err => alert('An error occurred', err));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.linkstart.bind(this)}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
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

AppRegistry.registerComponent('test', () => test);
