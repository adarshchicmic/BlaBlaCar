import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
  },
  userNamePictureView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  titleTextStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
    color: '#000',
  },
  aboutStyle: {
    fontSize: RFValue(20),
    fontWeight: '600',
    width: wp(90),
    alignSelf: 'center',
    color: '#000',
    marginVertical: hp(2),
  },
  textView: {
    width: wp(65),
  },
  aboutView: {
    width: wp(90),
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: RFValue(12),
  },
});

export default styles;
