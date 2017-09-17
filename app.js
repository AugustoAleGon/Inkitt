import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Book from './src/Book'

export default class Inkitt extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Book />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Inkitt', () => Inkitt);
