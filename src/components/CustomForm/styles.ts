import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface Props {
  container: ViewStyle;
  textStyle: TextStyle;
  textView: ViewStyle;
}
const styles = StyleSheet.create<Props | any>({
  container: {
    justifyContent: 'center',
    marginLeft: wp(5),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  textView: {
    marginVertical: hp(4),
  },
  arrowStyle: {
    marginTop: hp(1),
    fontSize: RFValue(20),
    color: '#2dbeff',
  },
  textInputStyle: {
    width: wp(90),
    height: hp(6),
    padding: 5,
    fontSize: RFValue(15),
    backgroundColor: '#d1d0cd',
    borderRadius: 10,
    marginVertical: hp(1),
    fontWeight: '600',
    paddingLeft: wp(4),
  },
  forgotPasswordButtonStyle: {
    marginTop: hp(2),
    width: wp(35),
  },
  forgotPasswordTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(14),
    fontWeight: '600',
  },
});

export default styles;
