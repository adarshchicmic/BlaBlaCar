import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create<any>({
  container: side => ({
    left: side === 0 ? wp(5) : null,
    right: side === 1 ? wp(5) : null,
    backgroundColor: side === 1 ? '#0f0e0e' : '#c9c9c9',
    justifyContent: 'flex-start',
    alignSelf: side === 1 ? 'flex-end' : 'flex-start',
    borderBottomStartRadius: hp(1),
    borderBottomEndRadius: hp(1),
    borderTopEndRadius: hp(1),
    marginTop: hp(0.5),
  }),
  textStyle: side => ({
    padding: hp(1),
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: side === 1 ? '#fff' : '#000',
    fontSize: RFValue(15),
    fontWeight: '500',
  }),
});

export default styles;
