import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  //   heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  textView: {
    width: wp(90),
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: RFValue(14),
  },
});

export default styles;
