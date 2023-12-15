/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native'


class ModalComponent extends Component {
    state = {
        showModal: false // 처음에는 모달 안 보이도록 초기값 세팅
    }

    handleModal = () => {
        this.setState({
            showModal: this.state.showModal ? false : true
        })
    }

    render() {
        return (
            <View style={{width: '100%'}}>
                <Button
                    title='Open Modal'
                    onPress={this.handleModal}
                />

                <Modal
                    visible={this.state.showModal} // modal이 보일지 여부에 대한 상태값
                    animationType={'slide'}  // 모달이 어떻게 나타날지에 대한 값 (slide, fade)
                    onShow={()=> alert('모달 나타남')} // 모달이 나타난 후에 실행되는 액션을 여기에 정의
                    onDismiss={()=> alert('모달 사라짐')} // 모달이 사라진 후에 실행되는 액션을 여기에 정의
                >
                    <View style={{
                        marginTop: 60,
                        backgroundColor: 'red'
                    }}
                    >
                        <Text>Modal Appeared!</Text>
                    </View>

                    <Button
                        title='Dismiss'
                        onPress={this.handleModal}
                    />

                </Modal>
            </View>
        )
    }
}

export default ModalComponent;
