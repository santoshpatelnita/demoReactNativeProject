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
    // alignSelf: 'center'
  },

  headerText: {
    color: '#ffffff',
    fontSize: scale(20),
    fontWeight: 'bold',
  },

  arrowStylImg: {
    width: scale(17),
    height: scale(24),
    marginLeft: scale(23),
  },

  imgLogoStyle: {
    width: scale(23),
    height: scale(25),
    marginRight: scale(23),
  },

  eventCellContainer: {
    width: scale(329),
    height: scale(41),
    backgroundColor: '#1a1a1a',
    borderRadius: scale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },

  eventText: {
    color: '#ffffff90',
    fontSize: scale(14),
    fontWeight: 'normal',
    marginLeft: scale(20),
    alignSelf: 'center',
  },

  forwordImage: {
    marginRight: scale(23),
    width: scale(11),
    height: scale(15),
    alignSelf: 'center',
  },
});
