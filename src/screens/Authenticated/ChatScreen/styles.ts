import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    width: wp(90),
    position: 'absolute',
    bottom: hp(5),
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  textInputStyle: {
    width: wp(90),
    paddingTop: hp(2),
    paddingBottom: hp(2),
    alignSelf: 'center',
    borderRadius: wp(3),
    backgroundColor: '#c9c9c9',
    fontSize: RFValue(14),
    paddingRight: wp(10),
    paddingLeft: wp(4),
  },
  svgSendStyle: {
    position: 'absolute',
    right: wp(2),
    zIndex: 1,
  },
});

export default styles;
