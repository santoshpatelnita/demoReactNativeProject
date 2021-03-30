import React, {Component, useState} from 'react';
import styles from './EventScreenstyl';
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {
  arrowImage,
  imageLogo,
  imageCake,
  imageForword,
  imageSchoolDrop,
  imgSchoolPick,
  imageGroup,
  imageMeet,
  imageCoffee,
  imageGym,
  imageFlight,
  imageDoctor,
  imageVet,
  imageRent,
  imageFees,
  imageActivity,
  imageCustom,
} from '../../utils/ImageConstant';
import scale, {verticalScale} from '../../utils/scale';

class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [
        {
          id: 1,
          name: 'Birthday',
          source: imageCake,
          arrowimg: imageForword,
        },
        {
          id: 2,
          name: 'Scool Drop Off',
          source: imageSchoolDrop,
          arrowimg: imageForword,
        },
        {
          id: 3,
          name: 'School Pick Up',
          source: imgSchoolPick,
          arrowimg: imageForword,
        },
        {
          id: 4,
          name: 'Get Together',
          source: imageGroup,
          arrowimg: imageForword,
        },
        {
          id: 5,
          name: 'Meeting',
          source: imageMeet,
          arrowimg: imageForword,
        },
        {
          id: 6,
          name: 'Out for Coffee',
          source: imageCoffee,
          arrowimg: imageForword,
        },
        {
          id: 7,
          name: 'Gym',
          source: imageGym,
          arrowimg: imageForword,
        },

        {
          id: 8,
          name: 'Flight',
          source: imageFlight,
          arrowimg: imageForword,
        },
        {
          id: 9,
          name: 'Doctor',
          source: imageDoctor,
          arrowimg: imageForword,
        },
        {
          id: 10,
          name: 'Vet',
          source: imageVet,
          arrowimg: imageForword,
        },
        {
          id: 11,
          name: 'Rent',
          source: imageRent,
          arrowimg: imageForword,
        },
        {
          id: 12,
          name: 'Fees',
          source: imageFees,
          arrowimg: imageForword,
        },
        {
          id: 13,
          name: 'Activity',
          source: imageActivity,
          arrowimg: imageForword,
        },
        {
          id: 14,
          name: 'Custom',
          source: imageCustom,
          arrowimg: imageForword,
        },
      ],
    };
  }

  // -------------Header start--------------------
  renderHeaderContainer = () => {
    return (
      <View style={styles.headerConatiner}>
        <Image source={arrowImage} style={styles.arrowStylImg} />
        <Text style={styles.headerText}>Add Event</Text>
        <Image source={imageLogo} style={styles.imgLogoStyle} />
      </View>
    );
  };
  // -------------Header End------------------------

  renderDataEventCell = (item, index) => {
    return (
      <View style={styles.eventCellContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.source} style={styles.eventImage} />
          <Text style={styles.eventText}>{item.name}</Text>
        </View>
        <Image source={item.arrowimg} style={styles.forwordImage} />
      </View>
    );
  };

  renderDataEventConatiner = () => {
    return (
      <View style={styles.flatListStyle}>
        <FlatList
          data={this.state.itemData}
          renderItem={({item, index}) => this.renderDataEventCell(item, index)}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderContainer()}
        {this.renderDataEventConatiner()}
      </View>
    );
  }
}
export default EventScreen;
