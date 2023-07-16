import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  containerMain: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: widthPercentageToDP(90),
  },
  container: {
    alignSelf: 'center',
    width: widthPercentageToDP(80),
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leavingFromGoingToView: {
    width: widthPercentageToDP(80),
    flexDirection: 'row',
  },
  textLeavingFromGoingTo: {
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  svgStyle: {
    alignSelf: 'center',
    marginRight: widthPercentageToDP(3),
  },
  timeStyle: {
    fontSize: RFValue(10),
  },
});

export default styles;
