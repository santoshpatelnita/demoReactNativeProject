import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import scale, { verticalScale } from '../../utils/scale';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    upperImg: {
        width: 126,
        height: 91,
        marginTop: 100
    },

    downImg: {
        width: scale(375),
        height: scale(353),
        // alignSelf: 'baseline'
    },
})
