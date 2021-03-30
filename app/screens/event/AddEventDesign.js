import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './AddEventDesignStyle';
import {addTaskImage} from '../../utils/ImageConstant';

export class AddEventDesign extends Component {
    
  renderImageDesign = () => {
    return (
    <View style={styles.imageStyleContainer}>
         <ImageBackground source={addTaskImage} style={{width:459,height:382}}/>
    </View>
    
    )
  };
  renderRendomText = () => {
    return (
      <View style={styles.rendamTextStyle}>
         <Text style={styles.textStyl}>Manage your Calendar by assigning Events and Tasks </Text>
        
      </View>
    );
  };

  renderAddButton = () => {
    return (
      <View style={styles.saveStyle}>
        <Text
          style={styles.saveTextStyle}
          placeholder="Visivility"
          placeholderTextColor="#fff">
          Add Task
        </Text>
      </View>
    );
  };

  renderAddEventButton = () => {
    return (
      <View style={styles.deleteStyle}>
        <Text
          style={styles.deleteTextStyle}
          placeholder="Visivility"
          placeholderTextColor="#fff">
          Add Event
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderImageDesign()}
        {this.renderRendomText()}
        {this.renderAddButton()}
        {this.renderAddEventButton()}
      </View>
    );
  }
}

export default AddEventDesign;
