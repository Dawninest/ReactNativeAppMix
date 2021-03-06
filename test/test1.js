import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';

export default class test1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=>{alert("test1")}}>
          Welcome to Test1!
        </Text>
        <Text style={styles.instructions} onPress={()=>{
            NativeModules.PageManager.pop();
        }}>
          backPage
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