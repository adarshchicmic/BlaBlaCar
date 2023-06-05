import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
interface Props {
  vehicleName: string;
  vehicleColor: string;
  navigation: any;
  show: boolean;
  vehicleId?: number;
}

const CustomVehicleComponent: React.FC<Props> = ({
  vehicleColor,
  vehicleName,
  navigation,
  show,
  vehicleId,
}) => {
  const handleOnPress = () => {
    navigation.navigate('VehiclePage', {
      vehicleId: vehicleId,
      vehicleName: vehicleName,
      vehicleColor: vehicleColor,
    });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!show}
      onPress={() => handleOnPress()}>
      <View style={styles.textView}>
        <Text style={styles.vehicleNameStyle}>{vehicleName}</Text>
        <Text style={styles.vehicleColorStyle}>{vehicleColor}</Text>
      </View>
      {show && (
        <View style={styles.arrowView}>
          <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomVehicleComponent;
