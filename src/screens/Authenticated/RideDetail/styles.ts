import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateAndSearchView: {
    borderBottomWidth: hp(0.6),
    borderBottomColor: '#c2c1c0',
    paddingBottom: hp(4),
  },
  priceViewStyle: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  priceViewMain: {
    borderBottomWidth: hp(0.6),
    borderBottomColor: '#c2c1c0',
  },
  priceView: {
    borderBottomWidth: hp(1),
    borderBottomColor: '#c2c1c0',
  },
  priceText: {
    fontSize: RFValue(15),
    fontWeight: '600',
    marginVertical: hp(2),
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
  },
  imageArrowView: {
    flexDirection: 'row',
  },
  userViewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp(5),

    paddingVertical: hp(1),
  },
  arrowStyle: {
    fontSize: RFValue(15),
    alignSelf: 'center',
    marginLeft: wp(1),
  },
  nameStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    alignSelf: 'center',
  },
  vehicleView: {
    marginHorizontal: wp(5),
  },
  vehicleNameStyle: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: '#000',
  },
  btnView: {
    position: 'absolute',
    top: hp(40),
    alignSelf: 'center',
  },
  btnStyle: {
    backgroundColor: '#2dbeff',
    width: wp(90),
    padding: wp(4),
    alignSelf: 'center',
    borderRadius: wp(4),
  },
  btnText: {
    color: '#fff',
    fontSize: RFValue(14),
    textAlign: 'center',
  },
  errorStyle: {
    color: '#f00',
    marginHorizontal: wp(5),
    fontSize: RFValue(12),
  },
  instantStyle: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
  },
  textStyle: {
    alignSelf: 'center',
    marginLeft: wp(3),
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  buttonTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  buttonStyle: {
    marginHorizontal: wp(5),
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    paddingVertical: hp(2),
  },
});
export default styles;
