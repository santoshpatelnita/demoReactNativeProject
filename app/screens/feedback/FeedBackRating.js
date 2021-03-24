import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { arrowImage, imageLogo, startImage } from '../../utils/ImageConstant';
import scale, {verticalScale} from '../../utils/scale';

export class FeedBackRating extends Component {
    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <Image source={arrowImage} style={styles.arrowStylImg} />
                <Text style={styles.headerText}>Feedback and Rating</Text>
                <Image source={source = imageLogo} style={styles.imgLogoStyle} />
            </View>
        )
    }

    renderSubmitFeedback = () => {
        return (
            <TextInput
                style={styles.inputFeedBackstyle}
                placeholder="Please let us know your suggestions or difficulties"
                placeholderTextColor="#ffffff30"
            />
        )
    }

    renderRateUsText = () => {
        return (
            <View style={styles.rateUsStyle}>
                <Text style={styles.rateUsText}>Rate Us</Text>
                <Image source={startImage} style={styles.starImageStyl} />
            </View>
        )
    }

    renderButtonSubmit = () => {
        return (
            <TouchableOpacity style={styles.submitButtonStyle}>
                <Text style={styles.submitTextButton}>Submit</Text>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeaderContainer()}
                {this.renderSubmitFeedback()}
                {this.renderRateUsText()}
                {this.renderButtonSubmit()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },

    headerContainer: {
        flexDirection: 'row',
        marginTop: scale(59),
        justifyContent: 'space-between',
        marginRight: scale(23)
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

    inputFeedBackstyle: {
        marginTop: verticalScale(27),
        width: scale(329),
        height: scale(212),
        backgroundColor: '#1a1a1a',
        borderRadius: scale(21),
        alignSelf: 'center',
        paddingVertical: verticalScale(17),
        paddingBottom: scale(180),
        paddingHorizontal: scale(15),
        fontSize: scale(12),
    },
    textBoxStyle: {
        color: '#000000'
    },

    rateUsStyle: {
        marginTop: verticalScale(40)
    },

    rateUsText: {
        fontSize: scale(18),
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        color: '#fff'
    },
    starImageStyl: {
        alignSelf: 'center',
        marginTop: verticalScale(19),
        width: scale(230),
        height: scale(34)
    },
    submitButtonStyle: {
        width: scale(329),
        height: scale(42),
        borderRadius: scale(21),
        backgroundColor: '#858585',
        bottom: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },
    submitTextButton: {
        fontSize: scale(16),
        fontWeight: 'bold',


    }




});
export default FeedBackRating;
