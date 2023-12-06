/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'


const AddTextButton = (props) => {
    return (
        <View
        style={styles.generator}
        >
            <Button
                onPress={()=>props.action()}
                title='Add Text'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    generator: {
        backgroundColor: '#10CDFF',
        padding: 5,
        width: '60%',
        marginTop: 20,
        marginBottom: 20
    }
})

export default AddTextButton;
