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
        // const {params} = this.props.route;
        // const userIndex = params ? params.userIndex : 0;
        // const userName = params ? params.userName : "이름 없음";
        // const userLastName = params ? params.userLastName : "성 없음";

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>번호: {JSON.stringify(this.props.route.params.userIdx)}</Text>
                {/* <Text>성: {JSON.stringify(userLastName)}</Text>
                <Text>이름: {JSON.stringify(userName)}</Text> */}
                <Button
                    title='Go to HomeScreen'
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />
            </View>
        );
    }
}

export default UserScreen;
