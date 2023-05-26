import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
interface Props {
  vehicleName: string;
  vehicleColor: string;
}

const CustomVehicleComponent: React.FC<Props> = ({
  vehicleColor,
  vehicleName,
}) => {
  return (
    <TouchableOpacity>
      <Text>{vehicleName}</Text>
      <Text>{vehicleColor}</Text>
      <View>
        <Text>{COMMON_CONSTS.ARROW}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomVehicleComponent;
