import {StyleSheet} from 'react-native';
import {
  // heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create<any>({
  container: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstNameStyle: {
    fontSize: RFValue(15),
    color: '#acaeb0',
  },
  secondNameStyle: (val: string) => ({
    fontSize: RFValue(16),
    color: val === '#000000' ? '#000000' : '#2dbeff',
  }),
  arrowStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    color: '#acaeb0',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
