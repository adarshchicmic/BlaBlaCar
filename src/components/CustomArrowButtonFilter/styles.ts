import {StyleSheet} from 'react-native';
import {
  // heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    padding: 10,
    flexDirection: 'row',
    borderWidth: 4,
  },
  filterStyle: {
    color: '#2dbeff',
  },
  filterButtonStyle: {
    width: wp(15),
    position: 'absolute',
    right: 0,
    borderWidth: 3,
  },
});
export default styles;
