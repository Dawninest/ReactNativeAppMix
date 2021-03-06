import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=>{alert("test")}}>
          Welcome to Test!
        </Text>
        <Text style={styles.instructions} onPress={()=>{
            NativeModules.PageManager.push();
        }}>
          nextPage
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