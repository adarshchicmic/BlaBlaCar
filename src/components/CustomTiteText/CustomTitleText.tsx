import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const CustomTitleText = ({text, moreStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, moreStyle]}>{text}</Text>
    </View>
  );
};

export default CustomTitleText;
