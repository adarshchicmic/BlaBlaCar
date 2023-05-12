import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  crossButtonStyle: {
    width: wp(20),
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  crossStyle: {
    fontSize: RFValue(20),
    color: '#2dbeff',
  },
  textView: {
    marginVertical: hp(3),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    marginLeft: wp(5),
  },
});

export default styles;
