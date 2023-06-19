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
  crossStyle: {
    fontSize: RFValue(22),
    color: '#2dbeff',
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  crossButtonStyle: {
    width: wp(20),
  },
  buttonView: {
    marginTop: hp(4),
    paddingLeft: wp(5),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    color: '#000',
  },
  addPhoneNumberView: {
    marginLeft: wp(5),
    marginVertical: hp(1),
    borderBottomWidth: 0.5,
  },
  addMiniBioView: {
    marginLeft: wp(5),
    marginTop: hp(2),
  },
});
export default styles;
