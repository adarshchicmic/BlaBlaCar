import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(14),
  },
  vehicleView: {
    marginVertical: hp(3),
  },
  btnStyle: {
    width: wp(90),
    paddingBottom: hp(2),
    alignSelf: 'center',
    borderBottomWidth: 0.5,
  },
  btnTwoStyle: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
});

export default styles;
