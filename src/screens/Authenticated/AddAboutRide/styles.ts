import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  arrowStyle: {
    position: 'absolute',
    left: wp(2),
    top: hp(1),
    height: hp(5),
    width: wp(20),
    zIndex: 10,
  },
  errorStyle: {
    color: '#f00',
    marginLeft: wp(5),
  },
  buttonStyle: {
    width: wp(90),
    padding: 10,
    borderWidth: 0.8,
    borderRadius: 30,
  },
  textView: {
    marginTop: hp(10),
    marginHorizontal: wp(5),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '700',
  },
  buttonView: {
    marginTop: hp(5),
    alignItems: 'center',
  },

  button: {
    marginTop: hp(5),
    width: wp(30),
    alignSelf: 'center',
    backgroundColor: '#2dbeff',
    padding: 10,
    borderRadius: 24,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },
  textInputStyle: {
    backgroundColor: '#d9d9d9',
    height: hp(15),
    width: wp(90),
    alignSelf: 'center',
    color: '#000',
    fontSize: RFValue(15),
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  //   textStyle: {
  //     color: '#000',
  //     fontSize: RFValue(20),
  //     fontWeight: '700',
  //     marginLeft: wp(2),
  //   },
  //   textView: {
  //     width: wp(90),
  //     marginTop: hp(1),
  //     marginLeft: wp(5),
  //     alignSelf: 'flex-start',
  //   },
  svgValView: {
    flexDirection: 'row',
    width: wp(90),
    borderBottomWidth: 0.8,
    marginBottom: hp(1),
  },
});

export default styles;
