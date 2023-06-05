import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(15),
    marginLeft: wp(5),
    marginTop: hp(1),
  },
});

export default styles;
