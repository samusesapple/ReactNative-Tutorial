/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { View, Text } from 'react-native';

// 부모 객체(App)로부터 물려받은 props (changeState(), sampleText)
const PropsChild = (props) => {
    return (
        <View>
            <Text onPress={props.motherChangeState}>
                {props.motherSampleText}
            </Text>
        </View>
    )
}

export default PropsChild;
