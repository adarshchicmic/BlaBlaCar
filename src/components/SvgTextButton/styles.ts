import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create<any>({
  textStyle: {
    color: '#2dbeff',
    fontSize: RFValue(15),
    fontWeight: '500',
    marginBottom: hp(3),
  },
  plushSvgTextStyle: {
    flexDirection: 'row',
    marginVertical: hp(0.5),
  },
  svgStyle: {
    marginRight: wp(2),
  },
});

export default styles;
