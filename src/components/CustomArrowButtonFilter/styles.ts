import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  // heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignSelf: 'center',
  },
  filterStyle: {
    color: '#2dbeff',
    textAlign: 'center',
    justifyContent: 'center',
    padding: hp(1.3),
    fontWeight: '600',
  },
  filterButtonStyle: {
    width: wp(20),
    position: 'absolute',
    right: wp(6),

    alignSelf: 'flex-end',
  },
  textView: {
    width: wp(50),
    marginLeft: wp(4),
  },
});
export default styles;
