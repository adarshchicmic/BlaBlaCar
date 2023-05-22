import {View, TextInput, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
interface Props {
  onChangeTextFunction: any;
  inputTextPlaceholder: string;
  styleInputText: TextStyle;
  valueTextInput: string | number;
  keyboardTypeTextInput: string;
  autoCapitalizeTextInput: boolean;
  customInputTextOuterStyle: ViewStyle;
  onFocusInput: any;
  onBlurInput: any;
  placeholderTextColor: string;
  onEndEditing: any;
  maxLength: number;
  secureTextEntry: boolean;
}
const CustomTextInput: React.FC<Props | any> = ({
  onChangeTextFunction = () => {},
  inputTextPlaceholder,
  styleInputText,
  valueTextInput,
  keyboardTypeTextInput,
  autoCapitalizeTextInput,
  customInputTextOuterStyle,
  onFocusInput,
  onBlurInput,
  placeholderTextColor,
  onEndEditing,
  maxLength,
  secureTextEntry,
  inputMode,
  defaultValue,
  multiline,
}: Props | any) => {
  return (
    <View style={customInputTextOuterStyle}>
      <TextInput
        defaultValue={defaultValue}
        style={styleInputText}
        placeholder={inputTextPlaceholder}
        onChangeText={onChangeTextFunction}
        value={valueTextInput}
        inputMode={inputMode}
        keyboardType={keyboardTypeTextInput}
        autoCapitalize={autoCapitalizeTextInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        placeholderTextColor={placeholderTextColor}
        onEndEditing={onEndEditing}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        // {valueField}
      />
    </View>
  );
};

export default CustomTextInput;
