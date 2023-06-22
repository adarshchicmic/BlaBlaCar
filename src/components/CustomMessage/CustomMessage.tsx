import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  name: string;
  side: number;
  time: any;
}

const CustomMessage: React.FC<Props> = ({name, side, time}) => {
  return (
    <View>
      {side === 1 ? (
        <View style={styles.mainContainer(side)}>
          <View style={styles.container(side)}>
            <Text style={styles.textStyle(side)}>{name}</Text>
          </View>
          <Text style={styles.timeStyle}>{time}</Text>
        </View>
      ) : (
        <View style={styles.mainContainer(side)}>
          <View style={styles.container(side)}>
            <Text style={styles.textStyle(side)}>{name}</Text>
          </View>
          <Text style={styles.timeStyle}>{time}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomMessage;
