import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
  },
  firstStyle: {
    color: '#000',
    fontWeight: '600',
  },
  dateStyle: {
    marginVertical: wp(2),
  },
  secondStyle: {
    color: '#000a',
  },
  timePipeButtonView: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    color: '#000',
  },
  pipeViewStyle: {
    height: hp(6),
    alignSelf: 'center',
    width: wp(1.5),
    backgroundColor: '#000',
  },
  pipeMainView: {
    alignSelf: 'center',
    // marginTop: hp(5),
    width: wp(2),
    marginHorizontal: wp(3),
  },
  oStyle: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(2),
    alignSelf: 'center',
    borderWidth: wp(1),
    borderColor: '#000',
  },
  timeViewStyle: {
    justifyContent: 'space-between',
    width: wp(10),
  },
  butoonViewStyle: {
    justifyContent: 'space-between',
  },
  containerStyle: {
    width: wp(70),
  },
});
export default styles;
