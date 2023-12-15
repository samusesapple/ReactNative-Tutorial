/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class UserScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>User Screen</Text>
                <Button
                title='Go to HomeScreen'
                onPress={()=> {
                    this.props.navigation.navigate('Home')
                }}
                />
            </View>
        );
    }
}

export default UserScreen;
