import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { getTextBook } from './api-client'
import HTMLView from 'react-native-htmlview'

export default class Book extends Component {
  // textBook object that received the promise of the object
  state = {
    textBook : {
      textBook: '',
      title: ''
    }
  }
  // Getting the data
  componentDidMount() {
    getTextBook()
    .then(data => this.setState({ textBook: data}))
  }

  // Updating the data after receive the new props
  componentWillReceiveProps(newProps){
    if( newProps.textBook !== this.state.textBook){
    }
  }
  constructor(props){
    super(props);

  }

  render() {
    const textBook = this.state.textBook

    return (
      <View>
        { textBook.textBook !== '' ?
          <View>
            <Text style={styles.title}>{textBook.title}</Text>
            <HTMLView
              value={textBook.textBook}
            />
          </View>
          :
          <View style={styles.loadingContainer}>
            <Text style={styles.loading}>Loading...</Text>
          </View>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    fontSize: 20,
    color: "#CCCCCC",
  },
  textBook: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
    fontSize: 14,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 16,
    color: '#000',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
