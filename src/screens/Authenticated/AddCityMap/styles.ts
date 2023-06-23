import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  backArrowButton: {
    position: 'absolute',
    zIndex: 1,
  },
  buttonStyle: {
    height: wp(12),
    width: wp(12),
    backgroundColor: '#2dbeff',
    padding: hp(1),
    borderRadius: wp(6),
  },

  buttonView: {
    position: 'absolute',
    bottom: hp(8),
    right: wp(4),
    width: wp(10),
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: hp(4),
  },
  backArrowButtonView: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default styles;
