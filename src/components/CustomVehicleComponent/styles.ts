import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    flexDirection: 'row',
    marginBottom: hp(2),
    alignSelf: 'center',
  },
  textView: {
    alignSelf: 'flex-start',
  },
  vehicleNameStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    color: '#000',
  },
  vehicleColorStyle: {
    fontSize: RFValue(13),
    color: '#000',
  },
  arrowView: {
    position: 'absolute',
    right: hp(2),
    alignSelf: 'center',
  },
  arrowStyle: {
    fontSize: RFValue(18),
    fontWeight: '600',
    color: '#000',
  },
});

export default styles;
