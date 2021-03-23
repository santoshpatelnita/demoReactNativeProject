import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import scale from '../splash/scale';
import styles from './LoginStyle'



export default class Login extends Component {

    renderHeader = () => {
      return (
        <View style={{ flexDirection: 'row',}}>
          <View>
            <Image
              style={styles.viewCircle}
              source={require('../../assets/viewCircle.png')}
            />
            <Text style={styles.signUpTest }>Welcome Back,</Text>
            <Text style={ styles.signUpConti}>Login to continue</Text>
          </View>
          <View style={{marginRight:scale()}}>
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
            placeholder="Enter Email"
            placeholderTextColor='#ffffff60'
          />
          {/* <TextInput
            style={styles.nameContainer}
            placeholder="Enter Password"
            placeholderTextColor='#ffffff60'
          /> */}
          <View style={styles.passContainer}>
            <TextInput style={styles.passTest}
              placeholder="Enter Password" secureTextEntry={true}
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
              Log IN
          </Text>
           
          </TouchableOpacity>
          <View style={styles.textlabel_new}>
            <Text style={styles.myPA}>New to myPA?</Text>
            <TouchableOpacity> 
            <Text style={styles.loginSty}>  SIGN UP</Text>
            </TouchableOpacity>
           
          </View>
          <Text style={styles.priyacySty}>T&C - Privacy Policy</Text>
        </View>
      )
    }
  
    render() {
      return (
        <View style={styles.container}>
        {/* <StatusBar hidden/> */}
          {this.renderHeader()}
          {this.renderInputContainer()}
          {this.renderSignUpButton()}
        </View>
      );
    }
  }
