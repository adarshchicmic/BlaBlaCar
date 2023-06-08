import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    left: wp(5),
    backgroundColor: '#c9c9c9',
    justifyContent: 'flex-start',

    alignSelf: 'flex-start',
    borderBottomStartRadius: hp(1),
    borderBottomEndRadius: hp(1),
    borderTopEndRadius: hp(1),
    marginTop: hp(0.5),
  },
  textStyle: {
    padding: hp(1),
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});

export default styles;
