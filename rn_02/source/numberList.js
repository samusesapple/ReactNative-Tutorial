/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const NumberList = (props) => {
    return (
      props.numbers.map ((item, index)=> (
        <TouchableOpacity
        style={styles.numberList} 
        key={index}
        onPress={()=>props.delete(index)}
        >
            <Text>랜덤 숫자: {item}</Text>
        </TouchableOpacity>

      ))
    
    )
}

const styles = StyleSheet.create({
  numberList: {
    backgroundColor: '#cecccc',
    alignItems: 'center',
    padding: '5',
    width: '100%',
    marginTop: 5
  }
})

export default NumberList;
