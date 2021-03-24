import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { arrowImage, imageLogo, lineImg } from '../../utils/ImageConstant';
import scale, {verticalScale} from '../../utils/scale';

export class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: [
                { id: 1, source: lineImg, name: 'Condition of use', text: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.\nQuisque convallis justo vitae lectus laoreet,sed ultrices diam sodales.Praesent feugiat diam in vehicula feugiat.' },
                { id: 2, source: lineImg, name: 'Condition of use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque convallis justo vitae lectus laoreet, sed ultrices diam sodales. Praesent feugiat diam in vehicula feugiat.' },
                { id: 3, source: lineImg, name: 'Condition of use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque convallis justo vitae lectus laoreet, sed ultrices diam sodales. Praesent feugiat diam in vehicula feugiat.' },
                { id: 4, source: lineImg, name: 'Condition of use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque convallis justo vitae lectus laoreet, sed ultrices diam sodales. Praesent feugiat diam in vehicula feugiat.' },
                { id: 5, source: lineImg, name: 'Condition of use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque convallis justo vitae lectus laoreet, sed ultrices diam sodales. Praesent feugiat diam in vehicula feugiat.' },
                { id: 6, source: lineImg, name: 'Condition of use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nQuisque convallis justo vitae lectus laoreet, sed ultrices diam sodales. Praesent feugiat diam in vehicula feugiat.' },
            ]
        }
    }

    // -----------------------------Header Container---------------------------------------------
    renderHeaderContainer = () => {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Image source={arrowImage} style={styles.arrowStylImg} />
                    <Text style={styles.headerText}>Terms of Use</Text>
                    <Image source={source = imageLogo} style={styles.imgLogoStyle} />
                </View>
                <View style={styles.headerBelow}>
                    <Text style={{ color: '#fff', flexDirection: 'column', textAlign: 'center' }}>Last modified : December 12,1010</Text>
                </View>
            </View>
        )
    }
    // --------------------------FlatList Container------------------------------- 
    renderDataEventCell = (item, index) => {
        return (
            <View style={{ marginBottom: verticalScale(20) }}>
                <View style={styles.eventCellContainer}>
                        <Image source={item.source} style={styles.lineImage} />
                        <Text style={styles.lineText}> {item.name}</Text>
                        <Image source={item.source} style={styles.lineImage} />
                </View>
                <Text style={styles.textstyle}>{item.text}</Text>
            </View>
        )
    }

    renderDataEventConatiner = () => {
        return (
            <View style={{ marginTop: verticalScale(30), flex: 1 }}>
                <FlatList
                    data={this.state.itemData}
                    renderItem={({ item, index }) => this.renderDataEventCell(item, index)}
                />
            </View>
        )
    }
    // --------------------------End FlatList Container------------------------------- 
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeaderContainer()}
                {this.renderDataEventConatiner()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    headerContainer: {
        flexDirection: 'row',
        marginTop: scale(59),
        justifyContent: 'space-between',
        marginRight: scale(23)
    },

    headerBelow: {
        flexDirection: 'column',
        fontSize: scale(14),
        marginTop: verticalScale(9),
    },

    headerText: {
        color: '#fff',
        fontSize: scale(20),
        fontWeight: 'bold'
    },

    arrowStylImg: {
        width: scale(17),
        height: scale(24),
        marginLeft: scale(23)
    },

    imgLogoStyle: {
        width: scale(29),
        height: scale(21),
    },

    eventCellContainer: {
        width: scale(329),
        height: scale(41),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    lineImage: {
        color: '#fff',
        fontSize: scale(14),
        fontWeight: 'normal',
        marginLeft: scale(7),
        alignSelf: 'center'
    },

    lineText: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: '#67ebe1'

    },
    textstyle: {
        color: '#ffffff',
        flexDirection: 'column',
        marginLeft: scale(25),
        fontSize: scale(12),
        fontWeight: 'normal',
        opacity: 0.5,
        width: scale(355)
    }

});
export default Terms;
