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
  nameView: {
    alignSelf: 'center',
  },
  svgArrowStyle: {
    flexDirection: 'row',
  },
  nameStyle: {
    fontSize: RFValue(25),
    fontWeight: '600',
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
  buttonTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(15),
    fontWeight: '500',
    marginBottom: hp(3),
  },
  titleStyle: {
    fontSize: RFValue(20),
    marginVertical: hp(2),
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
