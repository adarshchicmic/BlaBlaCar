import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  crossButtonStyle: {
    width: wp(20),
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  crossStyle: {
    fontSize: RFValue(20),
    color: '#2dbeff',
  },
  textView: {
    marginVertical: hp(3),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    marginLeft: wp(5),
    color: '#000',
  },
  plushMinusView: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    alignSelf: 'center',
  },
  numberStyle: {
    fontSize: RFValue(40),
    color: '#000',
  },
  buttonStyleArrow: {
    height: wp(12),
    width: wp(12),
    backgroundColor: '#2dbeff',
    padding: hp(1),
    borderRadius: wp(6),
  },

  buttonView: {
    position: 'absolute',
    top: hp(85),
    right: wp(2),
    width: wp(10),
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: hp(4),
  },
});

export default styles;
