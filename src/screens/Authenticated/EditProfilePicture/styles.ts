import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';

const styles = StyleSheet.create<any>({
  container: {
    paddingLeft: wp(5),
  },
  arrowStyle: {
    marginTop: hp(2),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  btnStyle: {
    width: wp(90),
    padding: 10,
    backgroundColor: '#2dbeff',
    borderRadius: 20,
  },
  btnTextStyle: value => ({
    fontSize: RFValue(18),
    color: value === COMMON_CONSTS.TAKE_A_PICTURE ? '#fff' : '#2dbeff',
    textAlign: 'center',
    fontWeight: '500',
  }),
  textView: {
    mariginTop: hp(5),
  },
  buttonView: {
    marginTop: hp(4),
  },
});

export default styles;
