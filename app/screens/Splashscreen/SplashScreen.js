import React, { Component } from 'react'
import { Text, View , Image} from 'react-native';
import styles from './SpashStyle';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../../assets/splashUpper.png")} style={styles.upperImg}/>
                <Image source={require("../../assets/bottomImage.png")} style={styles.downImg} />
            </View>
        )
    }
}
