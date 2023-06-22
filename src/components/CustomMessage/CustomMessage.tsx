import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  name: string;
  side: number;
  time: any;
  date: any;
  index: number;
}
const mS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const CustomMessage: React.FC<Props> = ({name, side, time, date, index}) => {
  return (
    <View>
      {!date ||
        (index === 0 && (
          <Text style={styles.dateStyle}>
            {time?.getDate().toString()?.padStart(2, '0') +
              ' ' +
              mS[time?.getMonth()] +
              ' ' +
              time?.getFullYear()}
          </Text>
        ))}
      {side === 1 ? (
        <View style={styles.mainContainer(side)}>
          <View style={styles.container(side)}>
            <Text style={styles.textStyle(side)}>{name}</Text>
          </View>
          <Text style={styles.timeStyle}>
            {time?.getHours()?.toString()?.padStart(2, '0') +
              ':' +
              time?.getMinutes()?.toString()?.padStart(2, '0')}
          </Text>
        </View>
      ) : (
        <View style={styles.mainContainer(side)}>
          <View style={styles.container(side)}>
            <Text style={styles.textStyle(side)}>{name}</Text>
          </View>
          <Text style={styles.timeStyle}>
            {time.getHours()?.toString()?.padStart(2, '0') +
              ':' +
              time.getMinutes()?.toString()?.padStart(2, '0')}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomMessage;
