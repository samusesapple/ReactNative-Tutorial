/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {

    state = {
        country: 'korea',
        value: 50
    }

    sliderValueChange = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <View
            style={styles.view}
            >
                <Slider
                    style={{height: 40, width: 300}}
                    value={this.state.value}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={this.sliderValueChange}
                    minimumTrackTintColor='blue'
                    step={10}
                />
                <Text
                    style={styles.input}
                >
                {this.state.value}
                </Text>

                <ActivityIndicator
                    style={{paddingTop: 30}}
                    size="large"
                    color="red"
                    animating={true}
                />

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

    },
    input: {
        width: '100%',
        marginTop: 20,
        fontSize: 25
    }
})

export default PickerComponent;
