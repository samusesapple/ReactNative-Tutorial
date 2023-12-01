/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'


class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}> Hello, World! </Text>
       </View>
        <View style={styles.subView}>
          <Text> Hello, World! </Text>
        </View>
       <View style={styles.lastSubView}>
          <Text style={styles.mainText}> Hello, World! </Text>
       </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10
  },
  lastSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    padding: 20,
    width: '50%'
  }
})

export default App;
