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
    color: '#fff',
    fontSize: scale(20),
    fontWeight: 'bold',
  },

  eventImage: {
    width: scale(24),
    height: scale(20),
    marginLeft: scale(19),
    alignSelf: 'center',
  },

  eventText: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: 'normal',
    marginLeft: scale(10),
    alignSelf: 'center',
  },

  arrowStylImg: {
    width: scale(17),
    height: scale(24),
    marginLeft: scale(23),
  },

  imgLogoStyle: {
    width: scale(29),
    height: scale(21),
  },

  eventCellContainer: {
    width: scale(329),
    height: scale(41),
    backgroundColor: '#1a1a1a',
    borderRadius: scale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
    alignSelf: 'center',
  },

  forwordImage: {
    width: scale(11),
    height: scale(15),
    marginRight: scale(23),
    alignSelf: 'center',
  },

  flatListStyle: {
    marginBottom: scale(120),
    marginTop: verticalScale(30),
  },
});
