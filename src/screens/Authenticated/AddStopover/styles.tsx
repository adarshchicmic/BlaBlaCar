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
    marginTop: hp(1),
    marginLeft: wp(2.5),
  },
  map: {
    alignSelf: 'flex-start',
    width: wp(100),
    height: hp(70),
    zIndex: 0,
  },

  button: {
    position: 'absolute',
    top: hp(85),
    right: wp(0.8),
    height: hp(8),
    width: wp(16),
    backgroundColor: '#2dbeff',
    borderRadius: 40,
    padding: 15,
  },
  svgArrowStyle: {
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(15),
  },
  btnStyle: {
    marginTop: hp(4),
    paddingLeft: wp(5),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#000',
    fontSize: RFValue(30),
    fontWeight: '700',
    marginLeft: wp(5),
  },
  textView: {
    width: wp(90),
    marginTop: hp(1),
    marginLeft: wp(5),
    alignSelf: 'flex-start',
  },
  svgValView: {
    flexDirection: 'row',
    width: wp(90),
    borderBottomWidth: 0.8,
    marginBottom: hp(1),
  },
});

export default styles;
