import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomMessage = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

export default CustomMessage;
