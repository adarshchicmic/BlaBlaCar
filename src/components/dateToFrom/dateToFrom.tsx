import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  leavingFrom: string;
  goingTo: string;
  date: any;
  time: any;
}
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const DateToFrom: React.FC<Props> = ({leavingFrom, goingTo, date, time}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.dateTextStyle}>
          {days[date.getDay()] +
            ' ' +
            date.getDate() +
            ' ' +
            monthNames[date.getMonth()] +
            ',  ' +
            time.getUTCHours().toString().padStart(2, '0') +
            ':' +
            time.getUTCMinutes().toString().padStart(2, '0')}
        </Text>
      </View>
      <View style={styles.pipeTextView}>
        <View style={styles.pipeView}>
          <View style={styles.oStyle} />
          <View style={styles.pipeStyle} />
          <View style={styles.oStyle} />
        </View>
        <View style={styles.leavingFromGoingToView}>
          <Text style={styles.leavingFromGoingToText}>
            {leavingFrom.slice(0, 35)}
          </Text>
          <Text style={styles.leavingFromGoingToText}>{goingTo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DateToFrom;
