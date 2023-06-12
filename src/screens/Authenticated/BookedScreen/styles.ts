import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30ba5c',
  },
  textView: {
    marginHorizontal: wp(5),
  },
  textStyle: {
    marginTop: hp(8),
    color: '#fff',
    fontSize: RFValue(25),
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(14),
    fontWeight: '500',
    paddingHorizontal: wp(6),
    paddingVertical: wp(3),
  },
  buttonStyle: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: hp(70),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    borderRadius: wp(56),
  },
});

export default styles;
