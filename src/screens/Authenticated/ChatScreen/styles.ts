import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
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
    height: hp(8),
    width: wp(90),
    position: 'absolute',
    bottom: hp(7),
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#000',
    marginVertical: 'auto',
    // marginBottom: hp(1),
  },
  textInputStyle: {
    width: wp(90),
    // height: hp(6),
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
    top: hp(2.5),
    zIndex: 1,
  },
  flatListView: {
    height: hp(70),
  },
  errorStyle: {
    color: '#f00',
    fontSize: RFValue(12),
  },
  headerView: {
    height: hp(14),
    zIndex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  dangerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: widthPercentageToDP(90),
  },
  dangerText: {
    color: '#f00',
    fontSize: RFValue(10),
    alignSelf: 'center',
    marginLeft: wp(3),
  },
});

export default styles;
