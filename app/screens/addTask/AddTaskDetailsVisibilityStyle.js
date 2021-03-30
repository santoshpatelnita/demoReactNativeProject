import {Text, StyleSheet, View} from 'react-native';
import {create} from 'react-test-renderer';
import scale, {verticalScale} from '../../utils/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  headerConatiner: {
    flexDirection: 'row',
    marginTop: scale(59),
    justifyContent: 'space-between',
    marginRight: scale(23),
  },

  headerText: {
    color: '#ffffff',
    fontSize: scale(20),
    fontWeight: 'bold',
  },

  eventText: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: 'normal',
    margin: scale(7),
  },

  arrowStylImg: {
    width: scale(17),
    height: scale(24),
    marginLeft: scale(23),
  },

  imgLogoStyle: {
    width: scale(23),
    height: scale(25),
    marginLeft: scale(20),
  },


  mainTitleViewStyle: {
    width: scale(329),
    height: scale(41),
    backgroundColor: '#ffffff20',
    borderRadius: scale(21),
    marginTop: scale(30),
    alignSelf: 'center',

  },

  mainTitleTextStyle: {
    fontSize: scale(16),
    color: '#fff',
    marginLeft: scale(16),
    opacity: scale(0.6),
    marginTop: verticalScale(10)
  },

  nameViewStyl: {
    flexDirection: 'row',
    width: scale(329),
    height: scale(41),
    backgroundColor: '#ffffff20',
    borderRadius: scale(21),
    marginTop: scale(15),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  titleVisibilityTextStyl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(329),
    height: scale(41),
    backgroundColor: '#ffffff20',
    borderRadius: scale(21),
    alignSelf: 'center',
    marginTop: scale(15),
  },

  locationTextStyle: {
    fontSize: scale(16),
    color: '#fff',
    alignSelf: 'center',
    marginLeft: scale(16),
    opacity: scale(0.6),
  },

  locationTextStyl: {
    flexDirection: 'row',
    width: scale(329),
    height: scale(41),
    backgroundColor: '#ffffff20',
    borderRadius: scale(21),
    marginTop: scale(15),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  lovationImageButton: {
    width: scale(11),
    height: scale(15),
    marginRight: scale(23),
    alignSelf: 'center',
  },


  nameStyle: {
    fontSize: scale(16),
    color: '#fff',
    alignSelf: 'center',
    marginLeft: scale(16),
    opacity: scale(0.6),
  },

  nameDownButton: {
    width: scale(11),
    height: scale(15),
    marginRight: 23,
    alignSelf: 'center',
  },

  visibilityStyle: {
    fontSize: scale(16),
    opacity: scale(0.6),
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: scale(16),
    marginTop: scale(8),
  },

  titleTextStyle: {
    fontSize: scale(16),
    opacity: scale(0.6),
    color: '#fff',
    alignSelf: 'center',
    marginLeft: scale(16),
  },

  rectangleStyle: {
    width: scale(329),
    height: scale(191),
    borderRadius: scale(21),
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: scale(15),
  },

  saveStyle: {
    width: scale(329),
    height: scale(42),
    borderRadius: scale(21),
    backgroundColor: '#45ebe1',
    alignSelf: 'center',
    marginTop: verticalScale(50),
  },

  saveTextStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(10),
  },

  deleteStyle: {
    width: scale(329),
    height: scale(42),
    borderRadius: scale(21),
    backgroundColor: '#656565',
    alignSelf: 'center',
    marginTop: verticalScale(15),
  },

  deleteTextStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
});
