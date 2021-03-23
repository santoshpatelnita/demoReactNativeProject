import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import scale, {verticalScale} from '../splash/scale'

export default StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000'
    },

    bitMaoImage: {
        width: scale(254),
        height: scale(275),
        alignSelf: 'flex-end',
    },

    viewCircle: {
        width: 55,
        height: 55,
        marginTop: 94,
        marginLeft: scale(23),
    },

    nameContainer: {
        width: scale(329),
        height: scale(41),
        marginLeft: scale(23),
        borderWidth: scale(0.5),
        backgroundColor: '#ffffff16',
        marginTop: scale(15),
        borderRadius: scale(21),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        color: '#fff'
    },

    passContainer: {
        width: scale(329),
        height: scale(41),
        marginLeft: scale(23),
        borderWidth: scale(0.5),
        justifyContent: 'space-between',
        backgroundColor: '#ffffff16',
        marginTop: scale(15),
        borderRadius: scale(21),
        flexDirection: 'row',
        color: "#fff"
    },

    title: {
        marginTop: scale(76),
        width: scale(329),
        height: scale(42),
        // backgroundColor: 'red',
        borderRadius: scale(21),
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 11,
        borderColor: '#656565',
        borderWidth: 1,
    },
    textlabel_new: {
        marginTop: 17,
        // backgroundColor:'red',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: scale(16),
        flexDirection: 'row',
    },
    signUpTest: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: scale(26),
        padding: 5
    },
    signUpConti: {
        color: '#ffffff',
        fontSize: scale(16), 
        marginLeft: scale(27), 
        marginTop: verticalScale(7)
    },
    passTest:{
        paddingHorizontal: scale(20),
         color: '#fff'
    },
    signUpSty:{
        fontSize: scale(16),
        fontWeight: '800', 
        color: '#ffffff',
        fontWeight: 'bold'
    },
    myPA:{
        color:'#fff',fontSize:16
    },
    loginSty:{
        color:'#45ebe1',
        fontWeight:'bold',
        fontSize:16
    },
    priyacySty:{
        color:'#909090',
        alignItems:'center',
        alignSelf:'center',
        marginTop:35
    }
})