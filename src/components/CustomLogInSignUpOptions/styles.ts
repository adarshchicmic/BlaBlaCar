import {StyleSheet, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
type Style = {
  container: ViewStyle;

  textView: ViewStyle;
};
const styles = StyleSheet.create<Style | any>({
  container: {
    justifyContent: 'center',
    marginLeft: wp(7),
  },
  textStyle: (value: number) => ({
    fontSize: value === 1 ? RFValue(30) : RFValue(20),
    fontWeight: '600',
    color: '#000',
  }),
  textView: {
    marginTop: hp(2),
  },
  bottomTextView: {
    alignSelf: 'flex-start',
  },
  continueWithEmailView: {
    marginVertical: hp(5),
    width: wp(100),
    flexDirection: 'row',
  },
  svgStyle: {
    width: wp(8),
    height: hp(2),
    alignSelf: 'center',
  },
  arrowStyle: {
    marginLeft: wp(25),
    fontSize: RFValue(20),
    fontWeight: '500',
    color: '#000',
    width: wp(10),
  },
  continueWithEmail: {
    marginLeft: wp(2),
    fontSize: RFValue(18),
    alignSelf: 'center',
    fontWeight: '500',
    color: '#000',
  },
  buttonTextStyle: {
    color: '#2dbeff',
  },
  buttonStyle: {
    marginTop: hp(2),
  },
  crossStyle: {
    color: '#2dbeff',
    fontSize: RFValue(22),
    marginTop: hp(2),
  },
  crossButtonStyle: {
    width: wp(10),
  },
});

export default styles;
