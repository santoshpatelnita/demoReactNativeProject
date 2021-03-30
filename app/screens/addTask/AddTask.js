import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import styles from './AddTaskStyle';
import {
  arrowImage,
  imageLogo,
  imageForword,
  blackCircle,
} from '../../utils/ImageConstant';
import scale, {verticalScale} from '../../utils/scale';

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRequest: true,
      showPartner: false,
      acronym: '',

      itemPartnerData: [
        {
          id: 1,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 2,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 3,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 4,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 5,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 6,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 7,
          name: 'Akshita Bhandari',
          source: blackCircle,
          arrowimg: imageForword,
        },
      ],

      itemData: [
        {
          id: 1,
          // name:`gffgfgj fjhgj gkj hghjg kgh jgk hfjh gg hf hjf jf ghj fjghgh hgfghfjg`,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: '',
          source: blackCircle,
          arrowimg: imageForword,
        },
        {
          id: 2,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: 'sent you a partner request',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 3,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: 'sent you a partner request',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 4,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: 'sent you a partner request',
          source: blackCircle,
          arrowimg: imageForword,
        },
        {
          id: 5,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: 'sent you a partner request',
          source: blackCircle,
          arrowimg: imageForword,
        },

        {
          id: 6,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: 'sent you a partner request',
          source: blackCircle,
          arrowimg: imageForword,
        },
        {
          id: 7,
          firstName: 'Akshita Bhandari sent you a partner request',
          // lastName: 'sent you a partner request',
          source: blackCircle,
          arrowimg: imageForword,
        },
      ],
    };
  }

  componentDidMount() {
    this.getFirstLetter();
  }

  changeColor = () => {
    this.setState({
      showPartner: !this.state.showPartner,
      showRequest: false,
    });
  };

  getFirstLetter = () => {
    let str = 'Akshita Bhandari';
    let matches = str.match(/\b(\w)/g); // ['J','S','O','N']
    var acronym = matches.join(''); // JSON
    this.setState({acronym: acronym});
  };

  renderHeaderContainer = () => {
    return (
      <View style={styles.headerConatiner}>
        <Image source={arrowImage} style={styles.arrowStylImg} />
        <TouchableOpacity
          onPress={() =>
            this.setState({
              showRequest: !this.state.showRequest,
              showPartner: false,
            })
          }>
          <Text
            style={
              this.state.showRequest
                ? styles.headerTextChange
                : styles.headerText
            }>
            {' '}
            Requests
          </Text>
          <View
            style={
              this.state.showRequest
                ? styles.activeBorder
                : styles.inActiveBorder
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeColor()}>
          <Text
            style={
              this.state.showPartner
                ? styles.headerTextChange
                : styles.headerText
            }>
            Partners
          </Text>
          <View
            style={
              this.state.showPartner
                ? styles.activeBorder
                : styles.inActiveBorder
            }
          />
        </TouchableOpacity>
        <Image source={imageLogo} style={styles.imgLogoStyle} />
      </View>
    );
  };

  renderRequestCell = (item, index) => {
    return (
      <View style={styles.eventCellContainer}>
        <View style={{flexDirection: 'row'}}>
          <ImageBackground source={item.source} style={styles.cellImage}>
            <Text style={styles.insideImageText}>{this.state.acronym}</Text>
          </ImageBackground>
          
            <View style={{flexDirection: 'row', flexShrink:1}}>
              <Text style={styles.eventText}>{item.firstName}</Text>
              <Text style={styles.lastNameEventText}>{item.lastName}</Text>
              
            </View>
            
          
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity style={styles.submitButtonStyle}>
            <Text style={styles.buttonTextStyle}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButtonStyle}>
            <Text style={styles.deleteTextStyle}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderRequestList = () => {
    return (
      <View style={{ marginBottom: scale(115)}}>
        <FlatList
          data={this.state.itemData}
          renderItem={({item, index}) => this.renderRequestCell(item, index)}
        />
      </View>
    );
  };

  renderPartnerCell = (item, index) => {
    return (
      // <View style={{marginTop:scale(20)}}>
      <View style={styles.eventPartnerCellContainer}>
        <View style={{flexDirection: 'row'}}>
          <ImageBackground source={item.source} style={styles.partnerCellImage}>
            <Text style={{color: '#000000'}}>{this.state.acronym}</Text>
          </ImageBackground>
          <Text style={styles.partnerEventText}>{item.name}</Text>
        </View>
        <Image style={styles.arrowImageStyle} source={imageForword} />
      </View>
      // </View>
    );
  };

  renderPartnerList = () => {
    return (
      <View style={styles.frontImageStyle}>
        <FlatList
          data={this.state.itemPartnerData}
          renderItem={({item, index}) => this.renderPartnerCell(item, index)}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderContainer()}
        {this.state.showRequest && this.renderRequestList()}
        {this.state.showPartner && this.renderPartnerList()}
      </View>
    );
  }
}

export default AddTask;
