import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create<any>({
  buttonStyle: {
    marginVertical: hp(1.5),
  },
  firstNameStyle: {
    fontSize: RFValue(15),
    color: '#acaeb0',
  },
  secondNameStyle: (val: string) => ({
    fontSize: RFValue(16),
    color: val === '#000000' ? '#000000' : '#2dbeff',
  }),
});

export default styles;
