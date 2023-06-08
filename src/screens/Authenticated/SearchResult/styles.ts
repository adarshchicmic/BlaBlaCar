import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
// import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    paddingHorizontal: wp(5),
    fontSize: RFValue(15),
    fontWeight: '500',
  },
});

export default styles;
