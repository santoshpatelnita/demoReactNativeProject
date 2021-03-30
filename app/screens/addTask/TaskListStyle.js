import { Text, StyleSheet, View } from 'react-native';
import { create } from 'react-test-renderer';
import scale, {verticalScale} from '../../utils/scale';

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

    imageStyle: {
        width:scale(20),
        height: scale(19),
        color: '#fff',
        fontSize: scale(14),
        fontWeight: 'normal',
        margin:7,
        marginLeft: scale(20)
    },

    eventText: {
        color: '#fff',
        fontSize: scale(14),
        fontWeight: 'normal',
        margin:7,
        marginLeft: scale(20)
    },

    arrowStylImg: {
        width: scale(17),
        height: scale(24),
        marginLeft: scale(23)

    },

    imgLogoStyle: {
        width: scale(23),
        height: scale(25),
        marginLeft:20

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
        alignSelf: 'center',
        
    },

    forwordImage: {
        marginRight: scale(23)
    },

    
});
