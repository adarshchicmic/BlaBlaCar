import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32a852',
  },
  textStyle: {
    color: '#fff',
    fontSize: RFValue(15),
  },
  btnTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(15),
  },
  buttonStyle: {
    backgroundColor: '#fff',
  },
});

export default styles;
