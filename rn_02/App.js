/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Header from './source/header';
import Generator from './source/generator';
import NumberList from './source/numberList';

class App extends Component {

  state = {
    appName: '앱 이름 1',
    numbers: [12, 13, 11, 10]
  }

  onAddRandomNum = () => {
    // Math.random()으로 0~1까지의 랜덤 소수 생성 -> 소수 * 100 -> Math.floor로 소수점 이하 버림 -> +1 하여 1~100까지 랜덤 숫자 만들 수 있도록 함
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        numbers: [...prevState.numbers, randomNum]
      }
    })
  }

  onDeleteNum = (removeIndex) => { 
    const newNumbers = this.state.numbers.filter((num, index) => {
        return removeIndex != index;
    })

    this.setState(prevState => {
      return {
        numbers: newNumbers
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>

        <View>
        <Text
          style={styles.mainText}
          onPress={()=>alert('mainText 눌림')}
          > 여기를 눌러주세요. </Text>
        </View>
          
        <Generator action={this.onAddRandomNum}/>

        <NumberList 
        numbers={this.state.numbers}
        delete={this.onDeleteNum}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
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
