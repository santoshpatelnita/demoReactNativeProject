import { Text, StyleSheet, View } from 'react-native';
import { create } from 'react-test-renderer';
import scale,{verticalScale} from '../splash/scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },

    headerConatiner: {
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

    eventText: {
        color: '#fff',
        fontSize: scale(14),
        fontWeight: 'normal',
        marginLeft: scale(7)

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
        backgroundColor: '#1a1a1a',
        borderRadius: scale(21),
        marginBottom: verticalScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    forwordImage: {
        marginRight: scale(23)
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
