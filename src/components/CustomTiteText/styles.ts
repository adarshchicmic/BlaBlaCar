import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    color: '#000',
  },
});
export default styles;
