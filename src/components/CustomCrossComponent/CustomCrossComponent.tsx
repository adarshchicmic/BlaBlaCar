import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';

const CustomCrossComponent = ({navigation}) => {
  const handleOnPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.contaier} onPress={() => handleOnPress()}>
      <Text style={styles.crossStyle}>{COMMON_CONSTS.X}</Text>
    </TouchableOpacity>
  );
};

export default CustomCrossComponent;
