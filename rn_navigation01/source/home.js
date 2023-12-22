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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to UserScreen'
                    onPress={() => {
                        this.props.navigation.navigate('User', {
                            userIdx: 100,
                            userName: '길동',
                            userLastName: '홍'
                        })
                    }}
                />

                <Button
                    title='헤더 이름 바꾸기'
                    onPress={() =>
                        this.props.navigation.setOptions({
                            title: '홈 헤더 바꾸기',
                            headerStyle: {
                                backgroundColor: 'pink'
                            },
                            headerTintColor: 'blue'
                        })
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;
