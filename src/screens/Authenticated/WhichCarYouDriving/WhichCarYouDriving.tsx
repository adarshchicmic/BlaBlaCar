import {View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {updateVehicleId} from '../../../store/slices/publishRideSlice';

const WhichCarYouDriving = ({navigation, route}) => {
  const vehicleData = route?.params?.vehicleData;
  const dispatch = useDispatch();
  const handleButtonPress = val => {
    console.log(val?.id, 'this is val.id guys ');
    dispatch(updateVehicleId({vehicleId: val?.id}));
    navigation.navigate('MiddleSeatEmpty');
  };
  return (
    <SafeAreaView>
      <CustomBackArrowButton navigation={navigation} />
      <View>
        <CustomTitleText text={COMMON_CONSTS.WHICH_CAR_ARE_YOU_DRIVING} />
      </View>
      <View style={styles.mapView}>
        {vehicleData.map((data, index) => (
          <NameArrowButton
            key={index}
            name={data?.vehicle_name}
            onPressFunction={() => handleButtonPress(data)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default WhichCarYouDriving;
