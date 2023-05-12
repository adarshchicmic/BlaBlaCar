import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create<any>({
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
    paddingRight: wp(10),
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
  svgOpenCloseStyle: {
    marginTop: hp(2),
    marginRight: wp(7.5),
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  buttonStyle: {
    width: wp(20),
    backgroundColor: '#2dbeff',
    padding: hp(2),
    borderRadius: 10,
    alignSelf: 'center',
    bottom: 0,
    marginTop: hp(4),
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
