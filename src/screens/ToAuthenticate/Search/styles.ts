import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
  },
  imageBackgroundStyle: {
    height: hp(50),
    width: width,
    resizeMode: 'contain',
  },
  textUpperViewStyle: {
    marginTop: hp(5),
  },
  textUpperStyle: {
    textAlign: 'center',
    fontSize: RFValue(30),
    fontWeight: '600',
    color: '#fff',
  },
  searchViewStyle: {
    height: hp(20),
    width: wp(90),
    marginLeft: wp(5),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: hp(37),
    backgroundColor: '#fff',
    zIndex: 1,
    position: 'absolute',
    shadowColor: '#9ad3db',
    shadowOpacity: 0.8,
  },
  addressView: {
    marginTop: hp(12),
  },
  buttonStyle: {
    position: 'absolute',
    top: 0,
    padding: 12,
    backgroundColor: '#2dbeff',
    width: wp(90),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  continueWithEmailView: (value: number) => ({
    height: hp(6),
    alignSelf: 'center',
    width: value === 0 ? wp(75) : wp(53),
    marginTop: hp(1),
    flexDirection: 'row',
    borderBottomWidth: value === 0 ? 1 : 0,
    borderColor: '#adaca8',
    paddingRight: wp(2),
  }),
  arrowStyle: {
    right: 0,
    position: 'absolute',
    fontSize: RFValue(20),
    fontWeight: '500',
  },
  continueWithEmail: {
    fontSize: RFValue(18),
    alignSelf: 'center',
    fontWeight: '700',
    marginLeft: wp(2),
    color: '#adaca8',
  },
  svgStyle: {
    alignSelf: 'center',
  },
  swapView: {
    position: 'absolute',
    right: wp(2),
    top: hp(3),
  },
  dateAndUserView: {
    height: hp(5),
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: hp(1),
  },
  userViewStyle: {
    height: hp(5),
    alignSelf: 'center',
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderColor: '#adaca8',
    padding: 10,
  },
  profileNumberStyle: {
    flexDirection: 'row',
    width: wp(15),
    height: hp(10),
  },
  numberStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    marginLeft: wp(3),
    alignSelf: 'center',
    color: '#000',
  },
});

export default styles;
