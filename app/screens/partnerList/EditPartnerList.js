import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { arrowImage, imageLogo, minImage } from '../../utils/ImageConstant';
import styles from './EditPartnerStyle'
import scale, { verticalScale } from '../../utils/scale';


export class EditPartnerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: [
                { id: 1, name: 'Condition of use', source: minImage},
                { id: 2, name: 'Condition of use', source: minImage},
                { id: 3, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage},
                { id: 4, name: 'Condition of use', source: minImage}

            ]
        }
    }
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
    renderPartnerDataCell = (item, index) => {
        return (
            <View style={styles.partnerNameStyle}>
                <Text style={styles.partnerNameTextStyle}>{item.name}</Text>
                {/* <Image source={source = minImage} style={styles.imgLogoStyle} /> */}
                <TouchableOpacity style={{marginRight: scale(15), backgroundColor: '#67ebe1', height: scale(28), width: scale(29), borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{fontSize: scale(20), fontWeight: '900', alignSelf: 'center'}}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderPartnerList = () => {
        return (
            <View style={{ marginTop: verticalScale(40), height: scale(500) }}>
                <FlatList
                    data={this.state.itemData}
                    renderItem={({ item, index }) => this.renderPartnerDataCell(item, index)}
                />
            </View>
        )
    }


    renderPartnerEmailInput = () => {
        return (
            <View style={styles.partnerEmailStyle}>
                <TextInput
                style={styles.textEmailStyle}
                placeholder="Enter Partner’s Email"
                placeholderTextColor="#ffffff40"
                />
                <TouchableOpacity style={styles.touchStyle}>
                    <Text style={styles.addButtonStyle}>ADD</Text>
                </TouchableOpacity>
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
