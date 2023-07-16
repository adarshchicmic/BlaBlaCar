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
  inputVehicleView: {
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    color: '#000',
  },
  textView: {
    paddingLeft: wp(5),
    marginVertical: hp(4),
  },
  inputTextStyle: {
    width: wp(90),
    height: hp(6),
    backgroundColor: '#dee0e3',
    marginVertical: hp(1),
    borderRadius: 10,
    fontSize: RFValue(18),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    color: '#000',
  },
  arrowStyle: {
    paddingLeft: wp(5),
    paddingTop: hp(2),
  },
  buttonStyle: {
    height: wp(12),
    width: wp(12),
    backgroundColor: '#2dbeff',
    padding: hp(1),
    borderRadius: wp(6),
  },
  errorTextStyle: {
    color: '#f00',
    fontSize: RFValue(12),
  },
  buttonView: {
    width: wp(10),
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: hp(4),
  },
  errorStyle: {
    color: '#f00',
    paddingLeft: wp(5),
  },
});
export default styles;
