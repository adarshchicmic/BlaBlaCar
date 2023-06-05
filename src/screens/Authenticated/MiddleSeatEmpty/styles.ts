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
  },
  map: {
    alignSelf: 'flex-start',
    width: wp(100),
    height: hp(70),
    zIndex: 0,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: wp(4),
    backgroundColor: '#2dbeff',
    padding: 10,
    borderRadius: 24,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#000',
    marginTop: hp(5),
    fontSize: RFValue(30),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  nameArrowView: {
    width: wp(86),
    alignSelf: 'center',
  },
  textView: {
    width: wp(90),
    marginTop: hp(3),
    alignSelf: 'center',
  },
  svgValView: {
    flexDirection: 'row',
    width: wp(90),
    borderBottomWidth: 0.8,
    marginBottom: hp(1),
  },
});

export default styles;
