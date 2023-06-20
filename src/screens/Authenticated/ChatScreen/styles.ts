import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create<any>({
  container: {
    height: hp(89),
  },
  backArrowView: val => ({
    top: val === true ? hp(32) : hp(0),
    position: 'absolute',
    left: 0,
  }),
  textInputView: {
    height: hp(7),
    width: wp(90),
    position: 'absolute',
    bottom: hp(1),
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#000',
    marginVertical: 'auto',
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
  flatListView: {
    height: hp(80),
  },
  errorStyle: {
    color: '#f00',
    fontSize: RFValue(12),
  },
});

export default styles;
