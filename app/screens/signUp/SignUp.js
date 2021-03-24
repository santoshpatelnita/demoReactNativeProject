import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableHighlightBase, StatusBar, TouchableOpacity } from 'react-native';
import scale from '../../utils/scale';
import styles from './SignUpScreenStyle';

export default class SignUP extends Component {

  renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Image
            style={styles.viewCircle}
            source={require('../../assets/viewCircle.png')}
          />
          <Text style={styles.signUpTest }>Sign Up</Text>
          <Text style={ styles.signUpConti}>Sign up to continue</Text>
        </View>
        <View>
          <ImageBackground
            style={styles.bitMaoImage}
            source={require('../../assets/welcomeBgImg.png')}
          />
        </View>
      </View>
    );
  };

  renderInputContainer = () => {
    return (
      <View>
        <TextInput
          style={styles.nameContainer}
          placeholder="Enter Name"
          placeholderTextColor='#ffffff60'
        />
        <TextInput
          style={styles.nameContainer}
          placeholder="Enter Email"
          placeholderTextColor='#ffffff60'
        />
        <View style={styles.passContainer}>
          <TextInput style={styles.passTest}
            placeholder="password" secureTextEntry={true}
            placeholderTextColor='#ffffff60'
          />
          <TouchableOpacity style={{alignSelf:'center'}}>
          <Image source={require("../../assets/image-eye.png")} 
          style={{marginRight:19}}/>
          </TouchableOpacity>
          
        </View>

      </View>
    )
  }

  renderSignUpButton = () => {
    return (
      <View>
        <TouchableOpacity style={styles.title}>
          <Text
            style={styles.signUpSty}>
            SIGN UP
        </Text>
         
        </TouchableOpacity>
        <View style={styles.textlabel_new}>
          <Text style={styles.myPA}>New to myPA?</Text>
          <TouchableOpacity> 
          <Text style={styles.loginSty}>  LOG IN</Text>
          </TouchableOpacity>
         
        </View>
        <Text style={styles.priyacySty}>T&C - Privacy Policy</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden/>
        {this.renderHeader()}
        {this.renderInputContainer()}
        {this.renderSignUpButton()}
      </View>
    );
  }
}
