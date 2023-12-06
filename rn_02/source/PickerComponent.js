/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';

class PickerComponent extends Component {

    state = {
        country: 'korea'
    }

    render() {
        return (
            <View
            style={styles.view}
            >
                <Picker
                    style={{height: 50, width: 250}}
                    selectedValue={this.state.country}
                    onValueChange={(value, index)=> 
                        this.setState({country: value})
                    }
                >
                    <Picker.Item label='대한민국' value='korea'/>
                    <Picker.Item label='미국' value='us'/>
                    <Picker.Item label='중국' value='china'/>
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        // paddingTop: 20,
        marginBottom: 120,
        alignItems: 'center',

    }
})

export default PickerComponent;
