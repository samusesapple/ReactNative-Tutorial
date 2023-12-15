/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to UserScreen'
                    onPress={()=> {
                        this.props.navigation.navigate('User')
                    }}
                />
            </View>
        );
    }
}

export default HomeScreen;
