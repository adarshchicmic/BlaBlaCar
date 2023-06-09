import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    paddingHorizontal: wp(5),
  },
  ridePlanView: {
    width: wp(90),
    alignSelf: 'center',
    borderBottomWidth: wp(0.2),
    paddingVertical: hp(3),
  },
  errorStyle: {
    color: '#f00',
    paddingHorizontal: wp(5),
  },
});

export default styles;
