import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  textArrowStyle: {
    fontSize: RFValue(18),
    fontWeight: '600',
    color: '#c0c4c1',
  },
  textStyle: {
    fontSize: RFValue(16),
    fontWeight: '500',
    color: '#000',
  },
  viewStyle: {
    flexDirection: 'row',
  },
});

export default styles;
