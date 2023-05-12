import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  styleBtn?: any;
  styleTxt?: any;
  btnText?: string;
  viewStyleButton?: any;
  onPressFunction?: any;
}

const CustomButton: React.FC<Props> = ({
  styleBtn,
  styleTxt,
  btnText,
  viewStyleButton,
  onPressFunction = () => {},
}: Props) => {
  return (
    <View style={viewStyleButton}>
      <TouchableOpacity style={styleBtn} onPress={onPressFunction}>
        <Text style={styleTxt}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
