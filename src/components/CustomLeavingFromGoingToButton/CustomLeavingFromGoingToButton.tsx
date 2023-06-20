import {View, Text} from 'react-native';
import React from 'react';
import CustomButtonEdit from '../CustomButtonEdit/CustomButtonEdit';
import styles from './styles';
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
const CustomLeavingFromGoingToButton = ({
  data,
  date,
  leavingFrom,
  goingTo,
  timeFrom,
  timeTo,
  navigation,
}) => {
  const onClickLeavingFrom = () => {
    console.log(data);
    navigation.navigate('LocationMap', {
      latitude: data?.source_latitude,
      longitude: data?.source_longitude,
    });
  };
  const onClickGoingTo = () => {
    console.log(data);
    navigation.navigate('LocationMap', {
      latitude: data?.destination_longitude,
      longitude: data?.destination_latitude,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateStyle}>
        <Text style={styles.textStyle}>
          {days[date.getDay()] +
            ' ' +
            date.getDate() +
            ' ' +
            monthNames[date?.getMonth()]}
        </Text>
      </View>
      <View style={styles.timePipeButtonView}>
        <View style={styles.timeViewStyle}>
          <Text style={styles.textStyle}>
            {timeFrom?.getUTCHours()?.toString()?.padStart(2, '0') +
              ':' +
              timeFrom?.getUTCMinutes()?.toString()?.padStart(2, '0')}
          </Text>
          <Text style={styles.textStyle}>
            {timeTo?.getUTCHours()?.toString()?.padStart(2, '0') +
              ':' +
              timeFrom?.getUTCMinutes()?.toString()?.padStart(2, '0')}
          </Text>
        </View>
        <View style={styles.pipeMainView}>
          <View style={styles.oStyle} />
          <View style={styles.pipeViewStyle} />
          <View style={styles.oStyle} />
        </View>
        <View style={styles.butoonViewStyle}>
          <CustomButtonEdit
            first={leavingFrom?.slice(0, 20)}
            second={leavingFrom?.slice(0, 50)}
            firstStyle={styles.firstStyle}
            secondStyle={styles.secondStyle}
            containerStyle={styles.containerStyle}
            onPressFunction={() => onClickLeavingFrom()}
          />
          <CustomButtonEdit
            first={goingTo?.slice(0, 20)}
            second={goingTo?.slice(0, 50)}
            firstStyle={styles.firstStyle}
            secondStyle={styles.secondStyle}
            containerStyle={styles.containerStyle}
            onPressFunction={() => onClickGoingTo()}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomLeavingFromGoingToButton;
