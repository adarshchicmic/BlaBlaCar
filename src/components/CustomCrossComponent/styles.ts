import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  contaier: {
    width: wp(20),
    marginLeft: hp(2.5),
    marginTop: hp(1),
  },
  crossStyle: {
    fontSize: RFValue(18),
    color: '#2dbeff',
  },
});

export default styles;
