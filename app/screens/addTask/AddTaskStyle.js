import { StyleSheet } from 'react-native'
import scale, { verticalScale } from '../../utils/scale';


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

    headerTextChange: {
        color: '#67ebe1',
        fontSize: scale(20),
        fontWeight: 'bold',
    },

    imgLogoStyle: {
        width: scale(29),
        height: scale(21),

    },
    
    partnerStyle:{
        width:scale(329),
        height:scale(59),
        backgroundColor:'#1a1a1a',
        borderRadius:scale(21),
        alignItems:'center',
        alignSelf:'center',
        marginTop:verticalScale(31),
        // flexDirection:'row'
    },

    textStyle:{
        color: '#fff',
        fontSize: scale(16),
        fontWeight: 'bold',
        alignSelf: 'center'
        
       },

    submitTextButton: {
        fontSize: scale(16),
        fontWeight: 'bold',
    },

    eventCellContainer: {
        width: scale(335),
        height: scale(110),
        backgroundColor: '#1a1a1a',
        borderRadius: scale(10),
        marginTop: verticalScale(20.5),
        marginLeft: scale(20)
    },

    eventPartnerCellContainer: {
        width: scale(329),
        height: scale(59),
        backgroundColor: '#1a1a1a',
        borderRadius: scale(10),
        marginTop: verticalScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    
    
    cellImage:{
        width: scale(38),
        height: scale(38),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(18),
        marginLeft: scale(19)
        
    },

   

    eventText: {
        color: '#fff',
        fontSize: scale(14),
        padding: scale(4),
        marginTop:verticalScale(14),
        marginLeft: scale(13)
    },

    lastNameEventText:{
        color: '#fff',
        fontSize: scale(14),
        padding: scale(4),
        marginTop:verticalScale(14),
    
        flexShrink:1
    },

    partnerCellImage:{
        width: scale(38),
        height: scale(38),
        marginLeft: scale(15),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
        
    },

    partnerEventText: {
        color: '#fff',
        fontSize: scale(14),
        marginLeft: scale(12),
        padding: scale(4),
        textAlign: 'center',
        alignSelf : 'center',
    },

    arrowImageStyle: {
       marginRight: scale(20.5)
    },

    submitButtonStyle:{
        // marginTop: verticalScale(10),
        marginHorizontal:scale(15),
        width:scale(115),
        height:verticalScale(30),
        borderRadius:scale(21),
        backgroundColor:"#67ebe1",
        marginLeft: scale(70),
        marginTop: verticalScale(11)
    },

    buttonTextStyle:{
        alignSelf:"center",
        marginTop:verticalScale(7),
        fontSize:scale(14),
        fontWeight:'bold'
    },
    
    deleteButtonStyle:{
        marginTop:verticalScale(11),
        marginHorizontal:15,
        width:scale(115),
        height:verticalScale(30),
        borderRadius:scale(21),
        backgroundColor:"#656565"
    },

    deleteTextStyle:{
        alignSelf:"center",
        marginTop:verticalScale(7),
        fontSize: scale(14),
        fontWeight: 'bold'
    },
    
    inActiveBorder: {
        height: scale(1.5),
        width: scale(100),
        borderRadius: scale(1),
        backgroundColor: '#000',
        marginTop: verticalScale(5)
    },

    activeBorder: {
                height: scale(1.5),
                width: scale(100),
                borderRadius: scale(1),
                backgroundColor: '#45ebe1',
                marginTop: verticalScale(5)
            },

    insideImageText: {
        color: '#000000'
    }

   
    
});

// import { StyleSheet } from "react-native";
// import scale from '../../utils/Scale';
// import verticalScale from '../../utils/Scale'


// export default StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000000',
//     },

//     backArrow: {
//         height: scale(24),
//         width: scale(17),
//         marginLeft: scale(25)
//     },

//     activeText: {
//         color: '#67ebe1',
//         fontWeight: 'bold',
//         fontSize: scale(18),
//     },

//     inActiveText: {
//         color: '#ffffff',
//         opacity: 0.6,
//         fontSize: scale(18),
//     },

//     partnersText: {
//         fontSize: scale(18),
//         color: '#67ebe1',
//         fontWeight: 'bold',
//         // marginLeft: scale(10)        
//     },

//     imageLogo: {
//         height: scale(21),
//         width: scale(29),
//         marginRight: scale(22)
//     },

//     activeBorder: {
//         height: scale(1.5),
//         width: scale(100),
//         borderRadius: scale(1),
//         backgroundColor: '#45ebe1',
//         marginTop: verticalScale(5)
//     },

//     inActiveBorder: {
//         height: scale(1.5),
//         width: scale(100),
//         borderRadius: scale(1),
//         backgroundColor: '#000',
//         marginTop: verticalScale(5)
//     },

//     groupImg: {
//         height: scale(38),
//         width: scale(38),
//         alignItems: 'center',
//         justifyContent: 'center'
//     },

//     text: {
//         color: '#000',
//         fontSize: scale(14),
//         fontWeight: 'bold',
//         alignSelf: 'center',
//     },

// })

