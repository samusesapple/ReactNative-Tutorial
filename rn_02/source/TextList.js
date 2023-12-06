/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const TextList = (props) => {
    return (
      props.textList.map ((item, index)=> (
        <TouchableOpacity
        style={styles.textList} 
        key={index}
        onPress={()=>props.delete(index)}
        >
            <Text>{item}</Text>
        </TouchableOpacity>

      ))
    
    )
}

const styles = StyleSheet.create({
  textList: {
    backgroundColor: '#cecccc',
    alignItems: 'left',
    padding: 20,
    width: '100%',
    marginTop: 5,
    
  }
})

export default TextList;
