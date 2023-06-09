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
  buttonContainer: {
    paddingRight: wp(5),
  },
  buttonTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(20),
    fontWeight: '600',
  },
  headerViewStyle: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  sortByText: {
    fontWeight: '500',
    paddingLeft: wp(5),
    marginVertical: hp(2),
    fontSize: RFValue(16),
  },
  radioView: {
    paddingLeft: wp(5),
  },
  filterTextView: {
    marginVertical: hp(2),
  },
  btnStyle: {
    position: 'absolute',
    top: hp(50),
    left: wp(40),
    backgroundColor: '#2dbeff',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: wp(4),
    justifyContent: 'flex-end',
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: RFValue(14),
    fontWeight: '600',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
  },
});
export default styles;
