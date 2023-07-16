import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    zIndex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
