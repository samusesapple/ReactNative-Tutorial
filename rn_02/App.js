/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Header from './source/header';

class App extends Component {

  state = {
    appName: '앱 이름 1'
  }

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName}/> */}
          <Text
          style={styles.mainText}
          onPress={()=>alert('press')}
          > 여기를 눌러주세요. </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
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
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})

export default App;
