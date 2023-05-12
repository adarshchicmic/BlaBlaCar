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
  }),
  textView: {
    marginTop: hp(2),
  },
  bottomTextView: {
    alignSelf: 'flex-start',
  },
  continueWithEmailView: {
    width: wp(85),
    marginVertical: hp(5),
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: hp(3),
  },

  arrowStyle: {
    right: 0,
    position: 'absolute',
    // marginLeft: wp(25),
    fontSize: RFValue(20),
    fontWeight: '500',
  },
  continueWithEmail: {
    fontSize: RFValue(18),
    alignSelf: 'center',
    fontWeight: '500',
  },
  buttonTextStyle: {
    color: '#2dbeff',
  },
  buttonStyle: {
    marginTop: hp(2),
    width: wp(20),
  },
  buttonGoBackStyle: {
    marginTop: hp(2),
  },
  crossButtonStyle: {
    width: wp(10),
  },
});

export default styles;
