import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Inkitt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chapter 2</Text>
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
  title: {
    fontSize: 20,
    color: "#CCCCCC",
  }
});

AppRegistry.registerComponent('Inkitt', () => Inkitt);
