import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create<any>({
  constainer: {
    flex: 1,
  },
  crossStyle: {
    fontSize: RFValue(20),
    color: '#2dbeff',
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  crossButtonStyle: {
    marginLeft: wp(5),
  },
});

export default styles;
