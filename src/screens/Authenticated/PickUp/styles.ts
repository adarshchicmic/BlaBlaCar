import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  crossStyle: {
    fontSize: RFValue(22),
    color: '#2dbeff',
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  crossButtonStyle: {
    width: wp(20),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    color: '#000',
  },
  textView: {
    marginTop: hp(3),
    marginLeft: wp(5),
  },
  buttonViewMore: {
    marginTop: hp(3),
    paddingLeft: wp(5),
  },
  buttonView: {
    width: wp(90),
    alignSelf: 'center',
    paddingRight: wp(5),
    marginTop: hp(4),
  },
  buttonTextStyle: {
    fontSize: RFValue(15),
    color: '#a0a3ad',
  },
  buttonStyle: {
    width: wp(90),
    backgroundColor: '#d7d9e0',
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
