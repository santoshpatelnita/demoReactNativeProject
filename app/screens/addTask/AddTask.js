import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './AddTaskStyle';
import { addTaskImage } from '../../utils/ImageConstant';
import { arrowImage, imageLogo } from '../../utils/ImageConstant';

export class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRequest: true,
            showPartner: false,
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerConatiner}>
                <Image source={arrowImage} style={styles.arrowStylImg} />
                <TouchableOpacity onPress={() => this.setState({ showRequest: true, showPartner: false })}>
                    <Text style={this.state.showRequest ? styles.headerText : styles.headerText}>Requests</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ showPartner: true, showRequest: false })}>
                    <Text style={styles.headerText}>Partners</Text>
                </TouchableOpacity>
                <Image source={imageLogo} style={styles.imgLogoStyle} />

            </View>
        )
    }

    renderRequestList = () => {
        return (
            <View style={styles.frontImageStyle}>
                <FlatList />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeaderContainer()}
                {this.state.showRequest && this.renderRequestList()}
            </View>
        )
    }
}

export default AddTask
