import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    width: wp(85),
    borderRadius: 20,
    padding: 30,
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  textGoingFrom: {
    fontSize: RFValue(16),
    fontWeight: '600',
  },
  textGoingToStyle: {
    fontSize: RFValue(16),
    fontWeight: '600',
  },
  textGoingTo: {
    color: '#000',
    fontSize: RFValue(14),
    position: 'absolute',
    bottom: 0,
  },
  timeStyle: {
    fontWeight: '600',
    color: '#000',
    fontSize: RFValue(16),
  },
  leavingAndGoingFromStyle: {
    height: hp(20),
    width: wp(40),
    padding: 4,
  },
  textView: {
    width: wp(20),
    borderRightWidth: 5,
    marginRight: wp(4),
    justifyContent: 'space-between',
  },
  timeLocationView: {
    flexDirection: 'row',
  },
  priceText: {
    fontSize: RFValue(18),
    fontWeight: '600',
  },
  priceStyle: {
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    color: '#000',
  },
});
export default styles;
