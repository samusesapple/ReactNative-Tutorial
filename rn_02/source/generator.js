/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native'


const Generator = (props) => {
    return (
        <View
        style={styles.generator}
        >
            <Button
                onPress={()=>props.action()}
                title='Add Numbers'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    generator: {
        backgroundColor: '#10CDFF',
        padding: 5,
        width: '100%'
    }
})

export default Generator;
