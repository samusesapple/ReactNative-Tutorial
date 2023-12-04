/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const Header = (props) => (
    <TouchableOpacity
        style={styles.header}
        onPress={()=>alert('header 눌림')}
    >
        <View>
              <Text style={styles.mainFont}> {props.name} </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '80%'
  },
  mainFont: {
    fontSize: 20
  }
})

export default Header;
