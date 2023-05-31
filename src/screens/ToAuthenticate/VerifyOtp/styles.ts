import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
  },
  inputTextStyle: {
    width: wp(90),
    backgroundColor: '#cccdcf',
    fontSize: RFValue(16),
    color: '#000',
    padding: 10,
    borderRadius: 20,
    paddingLeft: wp(5),
  },
  inputTextView: {
    marginTop: hp(5),
    alignSelf: 'center',
  },
  buttonView: {
    width: wp(30),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  buttonTextStyle: {
    fontSize: RFValue(16),
    color: '#fff',
    textAlign: 'center',
  },
  buttonStyle: {
    width: wp(30),
    backgroundColor: '#2dbeff',
    padding: hp(1),
    borderRadius: 10,
  },
});

export default styles;
