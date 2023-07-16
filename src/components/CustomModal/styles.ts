import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  modalTextStyle: {
    color: '#000',
    fontSize: RFValue(20),
    fontWeight: '600',
  },
  modalViewStyle: {
    width: wp(90),
    height: hp(22),
    backgroundColor: '#fff',
    borderRadius: wp(5),
    paddingVertical: wp(7),
    paddingHorizontal: wp(10),
  },
  yesNoButtonView: {
    marginTop: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonTextStyle: {
    fontSize: RFValue(18),
    fontWeight: '600',
    color: '#2dbeff',
    textAlign: 'center',
  },
});

export default styles;
