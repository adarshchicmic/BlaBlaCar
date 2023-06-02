import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  textViewStyle: {
    // width: wp(70),
    width: wp(72),
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  textArrowText: {
    width: wp(80),
    marginLeft: wp(2),
    // alignSelf: 'flex-start',
  },
  svgTextView: {
    width: wp(86),
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  arrowStyle: {
    fontSize: RFValue(25),
    color: '#000',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: RFValue(15),
    alignSelf: 'center',
    color: '#000',
    fontWeight: '600',
  },
  svgArrowStyle: {
    marginHorizontal: wp(2),
    alignSelf: 'center',
  },
  svgTimeStyle: {
    alignSelf: 'center',
    marginRight: wp(4),
  },
  passengerTextStyle: {
    fontSize: RFValue(12),
  },
});

export default styles;
