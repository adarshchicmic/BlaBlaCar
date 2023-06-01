import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: wp(86),
    alignSelf: 'center',
    marginTop: hp(3),
  },
});

export default styles;
