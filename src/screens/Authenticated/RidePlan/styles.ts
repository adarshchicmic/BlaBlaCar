import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    paddingHorizontal: wp(5),
  },
  ridePlanView: {
    width: wp(90),
    alignSelf: 'center',
    borderBottomWidth: wp(0.2),
    paddingVertical: hp(3),
  },
  errorStyle: {
    color: '#f00',
    paddingHorizontal: wp(5),
  },
  userViewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',

    paddingVertical: hp(1),
  },
  arrowStyle: {
    fontSize: RFValue(15),
    alignSelf: 'center',
    marginLeft: wp(1),
  },
  nameStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    alignSelf: 'center',
  },
  vehicleView: {
    marginHorizontal: wp(5),
  },
  imageArrowView: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
  },
  passengerView: {
    borderBottomWidth: wp(0.2),
    width: wp(90),
    alignSelf: 'center',
  },
  passengerTextStyle: {
    paddingVertical: hp(1),
    fontSize: RFValue(15),
    fontWeight: '600',
  },
});

export default styles;
