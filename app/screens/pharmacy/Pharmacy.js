import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, FlatList} from 'react-native';
import styles from './PharmacyStyle';
import {arrowImage, imageLogo,imageForword} from '../../utils/ImageConstant';
import scale from '../../utils/scale';


export class Pharmacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [
        {   id: 1,
            name: 'Get Medicines for your Father',
            arrowimg: imageForword 
        },
        {
          id: 2,
          name: 'Get Medicines for your Father',
          arrowimg: imageForword 
        },
        {
          id: 3,
          name: 'Get Medicines for your Father',
          arrowimg: imageForword 
        },
        {
          id: 4,
          name: 'Get Medicines for your Father',
          arrowimg: imageForword 
        },
        {
          id: 5,
          name: 'Get Medicines for your Father',
          arrowimg: imageForword 
        },
        {
          id: 6,
          name: 'Get Medicines for your Father',
          arrowimg: imageForword 
        },
      ],
    };
  }
  renderHeaderContainer = () => {
    return (
      <View style={styles.headerConatiner}>
        <Image source={arrowImage} style={styles.arrowStylImg} />
        <Text style={styles.headerText}>Pharmacy</Text>
        <Image source={imageLogo} style={styles.imgLogoStyle} />
      </View>
    );
  };

  //   renderDetailsBox = () => {
  //       return(
  //           <View style={styles.boxStyle}>
  //               <ImageBackground style={{width:220,height:399}}></ImageBackground>

  //           </View>
  //       )
  //   }

  renderDataEventCell = (item, index) => {
    return (
      <View style={styles.eventCellContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.eventText}>{item.name}</Text>
        </View>
        <Image source={item.arrowimg} style={styles.forwordImage} />
      </View>
    );
  };

  renderDataEventConatiner = () => {
    return (
      <View style={{marginTop:scale(30)}}>
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
        {/* {this.renderDetailsBox()} */}
        {this.renderDataEventConatiner()}
      </View>
    );
  }
}

export default Pharmacy;
