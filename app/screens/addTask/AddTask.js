import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import styles from './AddTaskStyle';
import {addTaskImage} from '../../utils/ImageConstant'

export class AddTask extends Component {
    renderFrontImage = () =>{
        return(
            <View style={styles.frontImageStyle}>
                <Image source={addTaskImage} style={{backgroundColor:'white'}}/>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}

export default AddTask
