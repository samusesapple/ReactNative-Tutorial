/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // navigation 상태 및 구조 관리 (모든 Navigation 탭은 NavigationContainer 안에 들어가야함)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/home';
import UserScreen from './source/user';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'> 
           {/* 각 화면에 props.navigation을 자동으로 넘겨주게 됨 */}
          <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{title: '홈'}}
          />
          <Stack.Screen 
          name='User' 
          component={UserScreen} 
          initialParams={{
            userIdx: 0,
            userName: "Default",
            userLastName: ""
          }}
          options={{
            title: '유저 화면',
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'green'
            }
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
