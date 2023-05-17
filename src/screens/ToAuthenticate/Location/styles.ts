import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInputStyle: {
    width: wp(90),
    fontSize: RFValue(16),
    padding: 10,
    height: hp(6),
    backgroundColor: '#d1d1cf',
    borderRadius: 5,
  },
});

export default styles;
