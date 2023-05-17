import {Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
interface Props {
  onPressFunction?: any;
  name: string;
}
const NameArrowButton: React.FC<Props> = ({
  onPressFunction = () => {},
  name,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressFunction}>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textArrowStyle}>{COMMON_CONSTS.ARROW}</Text>
    </TouchableOpacity>
  );
};

export default NameArrowButton;
