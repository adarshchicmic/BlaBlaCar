import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    alignSelf: 'center',
    marginVertical: hp(2),
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
  },
  goingFromLeavingToStyle: {
    flexDirection: 'row',
    width: wp(75),
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  textSvgStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: hp(0.5),
  },
  svgArrowStyle: {
    flexDirection: 'row',
  },
  svgStyle: {
    alignSelf: 'center',
    marginHorizontal: wp(2),
  },
  locationTextStyle: {
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  textArrowStyle: {
    alignSelf: 'center',
  },
  nameTextStyle: {
    fontSize: RFValue(15),
    fontWeight: '500',
    // marginVertical: hp(1),
  },
});

export default styles;
