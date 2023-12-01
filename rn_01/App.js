/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild';

class App extends Component {

  // state는 class 내부에서만 사용 가능, render() 전에 선언
  // state의 값에 따라 화면을 다르게 구성할 수 있음
  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1
  }

  // state.sampleBoolean 값이 토글되도록 state 변경하기
  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleBoolean: true,
        sampleText: 'sampleBoolean is True!!!!!'
      })
    } else {
      this.setState({
        sampleBoolean: false,
        sampleText: 'sampleBoolean is False!!!!!'
      })
    }
  }

  onAddNum = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <PropsChild motherSampleText={this.state.sampleText} motherChangeState={this.changeState}/>
      </View>
    );
  }
}

// view의 style을 주기 위한 상수
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
