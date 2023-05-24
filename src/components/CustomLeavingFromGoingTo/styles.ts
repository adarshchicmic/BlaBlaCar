import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  //   heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  textViewStyle: {
    width: wp(70),
    flexDirection: 'row',
  },
  svgTextView: {
    width: wp(86),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  arrowStyle: {
    fontSize: RFValue(25),
    color: '#000',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: RFValue(20),
    alignSelf: 'center',
    color: '#000',
  },
  svgArrowStyle: {
    marginHorizontal: wp(1),
    alignSelf: 'center',
  },
  svgTimeStyle: {
    alignSelf: 'center',
  },
  passengerTextStyle: {
    fontSize: RFValue(12),
  },
});

export default styles;
