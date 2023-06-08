import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create<any>({
  container: {},
  profileDetailContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#b0b5b1',
    marginHorizontal: wp(5),
  },
  nameSvgStyle: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleView: {
    marginLeft: wp(6),
  },
  nameView: {
    alignSelf: 'center',
  },
  svgArrowStyle: {
    flexDirection: 'row',
  },
  nameStyle: {
    fontSize: RFValue(25),
    fontWeight: '600',
    color: '#000',
  },
  nameBesideTextStyle: {
    fontWeight: '500',
    color: '#b0b5b1',
  },
  arrowStyle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: RFValue(20),
  },
  imageView: {
    height: hp(5),
    width: wp(35),
  },
  imageStyle: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(12.5),
  },
  buttonTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(15),
    fontWeight: '500',
    marginBottom: hp(3),
  },
  titleStyle: {
    fontSize: RFValue(20),
    marginVertical: hp(2),
    color: '#000',
    fontWeight: '600',
  },
  plushSvgTextStyle: {
    flexDirection: 'row',
    marginVertical: hp(0.5),
  },
  verifyYourProfileView: {
    marginHorizontal: wp(5),
  },
  verifyYourProfileViewMain: {
    borderBottomWidth: 8,
    borderBottomColor: '#b0b5b1',
  },
  svgStyle: {
    marginRight: wp(2),
  },
});

export default styles;
