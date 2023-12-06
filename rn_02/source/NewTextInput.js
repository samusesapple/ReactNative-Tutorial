/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

// State를 활용할 것이기 때문에 class로 컴포넌트 선언
const NewTextInput = (props) => {
    return (
        <View
        style={styles.mainView}
        >
            <TextInput
            value={props.text}
            style={styles.input}
            onChangeText={(newValue)=>props.changeText(newValue)}
            />
        </View>
    
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%'
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 120,
        fontSize: 25,
        padding: 10
    }
})

export default NewTextInput;
