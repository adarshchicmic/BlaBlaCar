import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    paddingHorizontal: wp(5),
  },
});

export default styles;
