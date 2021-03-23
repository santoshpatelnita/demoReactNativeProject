import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { arrowImage, imageLogo, startImage } from '../../utils/ImageConstant';
import styles from './EditPartnerStyle'

export class EditPartnerList extends Component {
    // -----------------------------Header Container---------------------------------------------
    renderHeaderContainer = () => {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Image source={arrowImage} style={styles.arrowStylImg} />
                    <Text style={styles.headerText}>Edit Partner List</Text>
                    <Image source={source = imageLogo} style={styles.imgLogoStyle} />
                </View>

            </View>
        )
    }
    //--------------------------Header End--------------------------------- 
    renderPartnerList = () => {
        return (
            <View>
                <View style={styles.partnerNameStyle}>
                    <Text style={styles.partnerNameTextStyle}>Akshita Bhandari</Text>
                    <Image />
                </View>

                <View style={styles.anotherPartnerStyle}>
                    <Text style={styles.partnerNameTextStyle}>Akshita Bhandari</Text>
                    <Image />
                </View>
            </View>
        )
    }

    renderPartnerEmailInput = () => {
        return (
            <View style={styles.partnerEmailStyle}>
                <Text style={styles.textEmailStyle}>Enter Partner’s Email</Text>
                <Text style={styles.addButtonStyle}>ADD</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeaderContainer()}
                {this.renderPartnerList()}
                {this.renderPartnerEmailInput()}
            </View>
        )
    }
}



export default EditPartnerList
