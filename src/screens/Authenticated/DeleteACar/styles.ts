import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#367588',
  },
  svgView: {
    marginTop: hp(6),
    marginLeft: hp(2.5),
  },
  textStyle: {
    fontSize: RFValue(20),
    color: '#fff',
  },
  crossText: {
    color: '#2dbeff',
    alignSelf: 'center',
    fontSize: RFValue(20),
  },
  buttonStyle: {
    justifyContent: 'center',
    width: wp(12),
    height: wp(12),
    backgroundColor: '#fff',
    borderRadius: wp(6),
  },
  deleteVehicleButton: {
    width: wp(40),
    backgroundColor: '#f00',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
  },
  deleteVehicleButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  crossDeleteView: {
    position: 'absolute',
    bottom: hp(5),
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

export default styles;
