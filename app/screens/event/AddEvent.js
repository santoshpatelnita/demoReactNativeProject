import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import styles from './AddEventStyle';
import {arrowImage, imageLogo,downButton,imgLocation} from '../../utils/ImageConstant';
import scale from '../../utils/scale';

export class AddEvent extends Component {
  renderHeaderContainer = () => {
    return (
      <View style={styles.headerConatiner}>
        <Image source={arrowImage} style={styles.arrowStylImg} />
        <Text style={styles.headerText}>Add Task</Text>
        <Image source={imageLogo} style={styles.imgLogoStyle} />
      </View>
    );
  };
  renderTextInputMethod = () => {
    return (
      <View style={styles.mainTitleViewStyle}>
        <TextInput style={styles.mainTitleTextStyle} placeholder="Get Vegetables from Super Market" placeholderTextColor="#fff" />
      </View>
    );
  };

  renderLocationInputMethod = () => {
    return (
      <View style={styles.locationTextStyl}>
        <TextInput style={styles.locationTextStyle} placeholder="Gurgaon" placeholderTextColor="#fff" />
        <Image style={styles.lovationImageButton} source={imgLocation}/>
      </View>
    );
  };

  renderAssignToInputMethod = () => {
    return (
      <View style={styles.nameViewStyl}>
        <TextInput style={styles.nameStyle} placeholder="Akshita" placeholderTextColor="#fff" />
        <Image style={styles.nameDownButton} source={downButton}/>
      </View>
    );
  };

  renderVisibilityAllMethod = () => {
    return (
      <View style={styles.titleVisibilityTextStyl}>
        <TextInput
          style={styles.titleTextStyle}
          placeholder="none"
          placeholderTextColor="#fff"
        />
         <Image style={{width:scale(11),height:scale(15), marginRight:23,alignSelf:'center'}} source={downButton}/>
      </View>
    );
  };

  renderRectangleTextMethod = () => {
    return (
      <View style={styles.rectangleStyle}>
        <TextInput
          style={styles.visibilityStyle}
          placeholder="List"
          placeholderTextColor="#fff"
        />
       
      </View>
    );
  };

  renderSaveButton = () => {
    return (
      <View style={styles.saveStyle}>
        <Text
          style={styles.saveTextStyle}
          placeholder="Visivility"
          placeholderTextColor="#fff"
        >Save</Text>
      </View>
    );
  };


  renderDeleteButton = () => {
    return (
      <View style={styles.deleteStyle}>
        <Text
          style={styles.deleteTextStyle}
          placeholder="Visivility"
          placeholderTextColor="#fff"
        >Delete</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderContainer()}
        {this.renderTextInputMethod()}
        {this.renderLocationInputMethod()}
        {this.renderAssignToInputMethod()}
        {this.renderVisibilityAllMethod()}
        {this.renderRectangleTextMethod()}
        {this.renderSaveButton()}
        {this.renderDeleteButton()}
      </View>
    );
  }
}

export default AddEvent;
