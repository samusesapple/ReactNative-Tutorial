/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'


const NumberList = (props) => {
    return (
      props.numbers.map ((item, index)=> (
        <View style={styles.numberList} key={index}>
          <Text>랜덤 숫자: {item}</Text>
        </View>
      ))
    
    )
}

const styles = StyleSheet.create({
  numberList: {
    backgroundColor: '#cecccc',
    alignItems: 'center',
    padding: '5',
    width: '100%',
    marginTop: 10
  }
})

export default NumberList;
