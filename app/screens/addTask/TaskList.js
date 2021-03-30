import React, { Component, useState } from 'react';
import styles from './TaskListStyle';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import {
    arrowImage, imageLogo, imageCake, imageForword, imageSchoolDrop, imgSchoolPick,
    imageGroup, imageMeet, imageCoffee, imageGym, imageFlight, imageDoctor,
    imageVet, imageRent, imageFees, imageActivity, imageCustom
} from '../../utils/ImageConstant';
import scale, {verticalScale} from '../../utils/scale';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemData: [
                { id: 1, 
                    name:'Groceries', 
                    source: imageCake, 
                    arrowimg: imageForword,
                    marginL: scale(19),
                },
                { 
                    id: 2, 
                    name:'Pharmacy', 
                    source: imageSchoolDrop, 
                    arrowimg: imageForword, 
                    marginL: scale(19)
                },
                { 
                    id: 3, 
                    name:'Mall', 
                    source: imgSchoolPick, 
                    arrowimg: imageForword, 
                    marginL: scale(17)
                },
                { 
                    id: 4, 
                    name:'Project', 
                    source: imageGroup, 
                    arrowimg: imageForword 
                },
                { 
                    id: 5, 
                    name: 'To Do List', 
                    source: imageMeet, 
                    arrowimg: imageForword 
                },
                { 
                    id: 6, 
                    name: 'Custom', 
                    source: imageCoffee, 
                    arrowimg: imageForword 
                },
                
            ]
        }
    }

    // -------------Header start--------------------
    renderHeaderContainer = () => {
        return (
            <View style={styles.headerConatiner}>
                <Image source={arrowImage} style={styles.arrowStylImg} />
                <Text style={styles.headerText}>Add Task</Text>
                <Image source={imageLogo} style={styles.imgLogoStyle} />

            </View>
        )
    }
    // -------------Header End------------------------


    renderDataEventCell = (item, index) => {
        return (
            <View style={styles.eventCellContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.source} style={styles.imageStyle} />
                    <Text style={styles.eventText}>{item.name}</Text>
                </View>
                <Image source={item.arrowimg} style={styles.forwordImage} />
            </View>
        )
    }

    renderDataEventConatiner = () => {
        return (
            <View style={{ marginTop: verticalScale(30), marginBottom: scale(90) }}>
                <FlatList
                    data={this.state.itemData}
                    renderItem={({ item, index }) => this.renderDataEventCell(item, index)}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeaderContainer()}
                {this.renderDataEventConatiner()}
            </View>
        )

    }
}
export default TaskList;




