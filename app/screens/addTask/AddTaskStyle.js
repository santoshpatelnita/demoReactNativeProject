import { StyleSheet } from 'react-native'
import scale from '../../utils/scale';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    headerConatiner: {
        flexDirection: 'row',
        marginTop: scale(59),
        justifyContent: 'space-between',
        marginRight: scale(23)
    },

    arrowStylImg: {
        width: scale(17),
        height: scale(24),
        marginLeft: scale(23)
     },

     headerText: {
        color: '#ffffff60',
        fontSize: scale(20),
        fontWeight: 'bold'
    },

    imgLogoStyle: {
        width: scale(29),
        height: scale(21),

    },

   
    
});
