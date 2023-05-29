import {View, Text} from 'react-native';
import React, {useState, memo} from 'react';
import styles from './styles';
import CustomCrossComponent from '../../../components/CustomCrossComponent/CustomCrossComponent';
import CustomVehicleComponent from '../../../components/CustomVehicleComponent/CustomVehicleComponent';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import DeleteACar from '../DeleteACar/DeleteACar';
// import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
// simport CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';

const VehiclePage = ({navigation, route}) => {
  const vehicleId = route?.params?.vehicleId;
  const vehicleName = route?.params?.vehicleName;
  const vehicleColor = route?.params?.vehicleColor;

  const handleOnPressDeleteVehicle = () => {
    navigation.navigate('DeleteACar', {vehicleId: vehicleId});
  };
  const handleEditInfoPress = () => {
    navigation.navigate('LicensePlateNumber', {
      screen: COMMON_CONSTS.EDIT_INFO,
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <CustomCrossComponent navigation={navigation} />
        <View style={styles.vehicleView}>
          <CustomVehicleComponent
            vehicleName={vehicleName}
            vehicleColor={vehicleColor}
            navigation={navigation}
            show={false}
          />
        </View>
        <CustomButton
          btnText={COMMON_CONSTS.EDIT_INFO}
          styleTxt={styles.btnTextStyle}
          styleBtn={styles.btnStyle}
          onPressFunction={() => handleEditInfoPress()}
        />
        <CustomButton
          btnText={COMMON_CONSTS.DELETE_VEHICLE}
          styleTxt={styles.btnTextStyle}
          styleBtn={styles.btnTwoStyle}
          onPressFunction={() => handleOnPressDeleteVehicle()}
        />
      </View>
    </View>
  );
};

export default memo(VehiclePage);
