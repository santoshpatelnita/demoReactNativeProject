import { StyleSheet } from 'react-native'
import scale, { verticalScale } from '../../utils/scale';

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
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: scale(21),
        marginBottom: verticalScale(10)
    },

    partnerNameTextStyle: {
        marginLeft: scale(15),
        color: '#ffffff90',
        fontSize: scale(14),
        alignSelf: 'center'
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
        width: scale(329),
        height: scale(41),
        borderRadius: scale(21),
        backgroundColor: '#191919',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        bottom: 30,
        position: 'absolute',
    },

    textEmailStyle: {
        // marginBottom: verticalScale(15),
        marginLeft: scale(17.5),
        color: '#ffffff60',
        borderRadius: scale(90),
        fontSize: scale(14),


    },
    addButtonStyle: {
        fontSize: scale(14),
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: scale(12),
    },

    touchStyle: {
        width: 69,
        height: 41,
        backgroundColor: '#67ebe1',
        borderRadius: scale(21),
        
    }


});