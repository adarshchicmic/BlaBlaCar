import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  text: string;
  moreStyle?: TextStyle;
}
const CustomTitleText: React.FC<Props> = ({text, moreStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, moreStyle]}>{text}</Text>
    </View>
  );
};

export default CustomTitleText;
