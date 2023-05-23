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
    color: '#000',
  },
  textView: {
    marginVertical: hp(4),
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
    color: '#000',
  },
  textPasswordMustContain: {
    color: '#969693',
    fontWeight: '500',
    fontSize: RFValue(18),
  },
  textPasswordMustContainView: {
    width: wp(90),
    marginVertical: hp(2),
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
  buttonView: {
    width: wp(10),
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: hp(4),
  },
  buttonStyleArrow: {
    height: hp(7),
    width: wp(12),
    backgroundColor: '#2dbeff',
    padding: hp(1),
    borderRadius: 60,
  },
  warningTextStyle: {
    color: '#f00',
    fontSize: RFValue(12),
  },
});

export default styles;
