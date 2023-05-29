import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  textView: {
    marginTop: hp(3),
    width: wp(90),
    alignSelf: 'center',
  },
});

export default styles;
