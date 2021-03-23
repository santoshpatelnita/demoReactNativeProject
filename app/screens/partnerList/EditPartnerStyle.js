import { StyleSheet } from 'react-native'
import scale, { verticalScale } from '../splash/scale';

export default StyleSheet.create({
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
        marginRight: scale(22)
    },
    partnerNameStyle: {
        width: scale(329),
        height: scale(41),
        marginTop: verticalScale(30),
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: scale(21),

    },
    partnerNameTextStyle: {
        marginLeft: scale(15),
        color: '#ffffff90',
        borderRadius: scale(90),
        fontSize: scale(14),
    },

    anotherPartnerStyle: {
        width: scale(329),
        height: scale(41),
        marginTop: verticalScale(10),
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: scale(21),
    },

    partnerEmailStyle: {
        // marginBottom: 20,
        marginTop: 390,
        // marginEnd:verticalScale(40),
        // marginBottom: verticalScale(40),
        width: scale(329),
        height: scale(41),
        borderRadius: scale(21),
        backgroundColor: '#191919',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'


    },

    textEmailStyle: {
        // marginBottom: verticalScale(15),
        marginLeft: scale(17.5),
        color: '#ffffff60',
        borderRadius: scale(90),
        fontSize: scale(14),
    },

    addButtonStyle: {
        borderRadius: 51,
        backgroundColor: '#67ebe1',
        fontSize: scale(14),
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: scale(22)

    }


});