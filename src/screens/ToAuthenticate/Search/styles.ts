import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create<any>({
  container: {
    // flex: 1,
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
    height: hp(25),
    width: wp(88),
    marginLeft: wp(5),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: hp(35),
    backgroundColor: '#fff',
    zIndex: 1,
    position: 'absolute',
    shadowColor: '#9ad3db',
    shadowOpacity: 0.8,
    alignSelf: 'center',
  },
  addressView: {
    marginTop: hp(15),
  },
  leavingFromGoingToStyle: {
    marginVertical: hp(2),
  },
  buttonStyle: {
    position: 'absolute',
    top: 0,
    padding: wp(3.5),
    backgroundColor: '#2dbeff',
    width: wp(88),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonTextStyle: {
    fontSize: RFValue(16),
    color: '#fff',
    textAlign: 'center',
    fontWeight: '400',
  },
  continueWithEmailView: (value: number) => ({
    height: hp(6),
    alignSelf: 'center',
    width: value === 0 ? wp(75) : wp(53),
    marginTop: value === 0 ? hp(1.5) : hp(0.5),
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
    fontSize: RFValue(17),
    alignSelf: 'center',
    fontWeight: '500',
    marginLeft: wp(2),
    color: '#adaca8',
  },
  svgStyle: {
    alignSelf: 'center',
  },
  swapView: {
    position: 'absolute',
    right: wp(5),
    top: hp(3),
    height: hp(5),
    width: wp(5),
    zIndex: 1,
  },
  dateAndUserView: {
    height: hp(7),
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
