import {Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
interface Props {
  onPress?: any;
  name: string;
}
const NameArrowButton: React.FC<Props> = ({onPress, name}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textArrowStyle}>{COMMON_CONSTS.ARROW}</Text>
    </TouchableOpacity>
  );
};

export default NameArrowButton;
