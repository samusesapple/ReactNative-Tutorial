/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Header from './source/header';

import NewTextInput from './source/NewTextInput';
import AddTextButton from './source/AddTextButton';
import TextList from './source/TextList';
import PickerComponent from './source/PickerComponent';


class App extends Component {

  state = {
    appName: '앱 이름 1',
    textArray: [],
    inputText: ''
  }

  onChangeText = (newText) => {
    this.setState(prevState => {
      return {
        inputText: newText
      }
    })
  }

  onAddText = () => {
    const newText = this.state.inputText
    if (newText.length > 0) {
      this.setState(prevState => {
        return {
          inputText: '', // 버튼 눌리면 textField의 글자 다 지워지도록
          textArray: [...prevState.textArray, newText]
        }
      })
    }
  }

  onDeleteText = (removeIndex) => {
    const newTextList = this.state.textArray.filter((text, index) => {
      return removeIndex != index;
    })

    this.setState(prevState => {
      return {
        textArray: newTextList
      }
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.mainView}>

        <PickerComponent/>

        <Header name={this.state.appName} />

        <NewTextInput
          text={this.state.inputText}
          changeText={this.onChangeText}
        />

        <AddTextButton
          action={this.onAddText}
        />

        <ScrollView
          style={{ width: "100%" }}
        // onContentSizeChange={(width, height)=>alert(height)}
        >
          <TextList
            textList={this.state.textArray}
            delete={this.onDeleteText}
          />
        </ScrollView>

      </SafeAreaView>
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
