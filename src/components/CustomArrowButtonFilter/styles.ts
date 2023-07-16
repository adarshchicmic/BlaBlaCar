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
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: wp(0.2),
    borderRadius: wp(5),
    alignSelf: 'center',
    borderColor: '#91908d',
    marginVertical: hp(1.5),
    paddingVertical: hp(1),
  },
  filterStyle: {
    color: '#2dbeff',
    padding: wp(1),
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    marginRight: wp(2),
  },
  filterButtonStyle: {
    width: wp(20),
    position: 'absolute',
    top: hp(1),
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  textView: {
    width: wp(50),
    marginLeft: wp(4),
  },
  backArrowStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: wp(2),
  },
});
export default styles;
