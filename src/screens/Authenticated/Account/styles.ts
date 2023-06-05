import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create<any>({
  container: {},
  buttonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#b0b5b1',
    marginHorizontal: wp(5),
  },
  logoutTextStyle: {
    color: '#2dbeff',
    marginLeft: wp(5),
    marginVertical: hp(2),
    fontSize: RFValue(16),
    fontWeight: '500',
  },
});

export default styles;
