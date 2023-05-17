import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  first: string;
  second: string;
  disabled?: boolean;
  onPressFunction?: any;
  textColor?: string;
}

const CustomButtonEdit: React.FC<Props> = ({
  first,
  second,
  disabled,
  onPressFunction = () => {},
  textColor,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPressFunction}
        style={styles.buttonStyle}
        disabled={disabled}>
        <Text style={styles.firstNameStyle}>{first}</Text>
        <Text style={styles.secondNameStyle(textColor)}>{second} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonEdit;
