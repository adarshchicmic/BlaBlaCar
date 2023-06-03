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
    padding: wp(3),
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
  },
  textGoingFrom: {
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    margin: wp(2),
  },
  textGoingToStyle: {
    fontSize: RFValue(16),
    fontWeight: '500',
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
    height: hp(15),
    width: wp(40),
    padding: 4,
  },
  textView: {
    width: wp(13),
    // marginTop: hp(1),
    justifyContent: 'space-between',
  },
  timeLocationView: {
    height: hp(12),
    flexDirection: 'row',
  },
  nameSvgView: {
    flexDirection: 'row',
    marginTop: hp(6),
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
  pipeViewStyle: {
    height: hp(8),
    alignSelf: 'center',
    width: wp(1.5),
    backgroundColor: '#000',
  },
  pipeMainView: {
    alignSelf: 'flex-end',
    marginTop: hp(5),
    width: wp(2),
    marginHorizontal: wp(3),
  },
  oStyle: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(2),
    alignSelf: 'center',
    borderWidth: wp(1),
    borderColor: '#000',
  },
});
export default styles;
