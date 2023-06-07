import {View, TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';

interface Props {
  first: string;
  second: string;
  disabled?: boolean;
  onPressFunction?: any;
  textColor?: string;
  firstStyle?: TextStyle;
  secondStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const CustomButtonEdit: React.FC<Props> = ({
  first,
  second,
  disabled,
  onPressFunction = () => {},
  textColor,
  firstStyle,
  secondStyle,
  containerStyle,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPressFunction}
        style={[styles.container, containerStyle]}
        disabled={disabled}>
        <View style={styles.buttonStyle}>
          <Text style={[styles.firstNameStyle, firstStyle]}>{first}</Text>
          <Text style={[styles.secondNameStyle(textColor), secondStyle]}>
            {second}
          </Text>
        </View>
        <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonEdit;
