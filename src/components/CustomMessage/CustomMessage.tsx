import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  name: string;
  side: number;
}

const CustomMessage: React.FC<Props> = ({name, side}) => {
  return (
    <View>
      {side === 0 ? (
        <View style={styles.container(side)}>
          <Text style={styles.textStyle(side)}>{name}</Text>
        </View>
      ) : (
        <View style={styles.container(side)}>
          <Text style={styles.textStyle(side)}>{name}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomMessage;
