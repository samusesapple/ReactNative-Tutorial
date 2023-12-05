/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

// State를 활용할 것이기 때문에 class로 컴포넌트 선언
class Input extends Component {

    state = {
        textInput: 'placeholder'
    }

    onUpdateInputText = (newText) => {
        this.setState({
            textInput: newText
        })
    }

    render() {
        return (
            <View
            style={styles.mainView}>
                <TextInput
                value={this.state.textInput}
                style={styles.input}
                onChangeText={(newValue)=>this.onUpdateInputText(newValue)}
                multiline={true}
                maxLength={12}
                autoCapitalize='words'
                 />
            </View>
            
        )
    }
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

export default Input;
