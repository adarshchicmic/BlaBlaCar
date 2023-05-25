import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
type Style = {
  container: ViewStyle;
  imageStyle: ImageStyle;
  pickYourRideViewStyle: ViewStyle;
  pickYourRideStyle: TextStyle;
  buttomView: ViewStyle;
};
const styles = StyleSheet.create<Style | any>({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  imageStyle: {
    width: wp(100),
    height: hp(70),
  },
  pickYourRideViewStyle: {
    marginTop: hp(2),
  },
  pickYourRideStyle: {
    fontSize: RFValue(20),
    textAlign: 'center',
    fontWeight: '700',
    color: '#000',
    // height: hp(15),
  },
  buttonView: {
    position: 'absolute',
    bottom: hp(2),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  buttonStyle: (value: any) => ({
    width: wp(90),
    backgroundColor: value === 'SignUp' ? '#2dbeff' : '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: hp(1),
  }),
  buttonTextStyle: (value: any) => ({
    color: value === 'LogIn' ? '#2dbeff' : '#fff',
    textAlign: 'center',
  }),
  textButtonViewStyle: {
    height: hp(30),
  },
});
export default styles;
