import {Text, StyleSheet, View} from 'react-native';
import {create} from 'react-test-renderer';
import scale, {verticalScale} from '../../utils/scale';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000'
    },
    imageStyleContainer:{
        width: scale(375),
        height:scale(459),
        backgroundColor: '#1a1a1a'
    },

    rendamTextStyle:{
        width: scale(316),
        height: scale(120),
        // backgroundColor: '#ffffff',
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: scale(6)
    },

    textStyl:{
        fontSize: scale(26),
        fontWeight: '600',
        color:'#fff',
        lineHeight: 40
    },

    saveStyle:{
        width: scale(329),
        height: scale(42),
        borderRadius: scale(21),
        backgroundColor: '#45ebe1',
        justifyContent: 'center',
        marginLeft: scale(23),
        marginTop:scale(30)
    },


    saveTextStyle:{
        fontSize: scale(16),
        fontWeight: 'bold',
        textAlign: 'center'
    },


    deleteStyle:{
        width: scale(329),
        height: scale(42),
        borderRadius: scale(21),
        backgroundColor: '#656565',
        justifyContent: 'center',
        marginLeft: scale(23),
        marginTop: scale(15)
    },

    deleteTextStyle:{
        fontSize: scale(16),
        fontWeight: 'bold',
        textAlign: 'center',
    }
})