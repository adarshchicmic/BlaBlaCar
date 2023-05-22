import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {},
  titleTextStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  crossStyle: {
    fontSize: RFValue(20),
    color: '#2dbeff',
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  crossButtonStyle: {
    width: wp(20),
  },
  textView: {
    marginTop: hp(3),
    paddingLeft: wp(5),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  inputTextView: {
    height: hp(6),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputTextStyle: {
    width: wp(90),
    borderRadius: 10,
    backgroundColor: '#d1d0cd',
    padding: 12,
    fontSize: RFValue(17),
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 1,
  },
  nameArrowButtonView: {
    width: wp(90),
    alignSelf: 'center',
  },
  buttonView: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  buttonTextStyle: {
    fontSize: RFValue(16),
    color: '#fff',
    textAlign: 'center',
  },
  buttonStyle: {
    width: wp(15),
    backgroundColor: '#2dbeff',
    padding: 15,
    borderRadius: 60,
    alignSelf: 'flex-end',
  },
});

export default styles;
