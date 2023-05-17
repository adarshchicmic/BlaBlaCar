import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {SvgPlush} from '../../assets/svg';
import styles from './styles';
interface Props {
  text: string;
  onPress?: any;
  extra?: any;
}
const SvgTextButton: React.FC<Props> = ({text, onPress, extra}: Props) => {
  return (
    <TouchableOpacity style={styles.plushSvgTextStyle} onPress={onPress}>
      <SvgPlush width={20} height={20} style={styles.svgStyle} />
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{text}</Text>
        <Text style={styles.textStyle}>{extra}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SvgTextButton;
