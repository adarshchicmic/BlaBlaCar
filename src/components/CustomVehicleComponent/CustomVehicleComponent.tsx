import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
interface Props {
  vehicleName: string;
  vehicleColor: string;
  onPress: () => {};
}

const CustomVehicleComponent: React.FC<Props> = ({
  vehicleColor,
  vehicleName,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textView}>
        <Text style={styles.vehicleNameStyle}>{vehicleName}</Text>
        <Text style={styles.vehicleColorStyle}>{vehicleColor}</Text>
      </View>
      <View style={styles.arrowView}>
        <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomVehicleComponent;
