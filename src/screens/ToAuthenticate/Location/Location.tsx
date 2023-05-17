import {View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import React from 'react';
import styles from './styles';

const Location = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput styleInputText={styles.textInputStyle} />
    </View>
  );
};

export default Location;
