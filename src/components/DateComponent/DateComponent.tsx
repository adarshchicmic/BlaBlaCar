import {View, Text} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-modern-datepicker';
import CustomButton from '../CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {updateDate} from '../../store/slices/rideSlice';
import {updatePublishDate} from '../../store/slices/publishRideSlice';

const DateComponent = ({navigation, route}: any) => {
  const screen = route?.params?.screen;
  console.log(screen, 'thsi sis screen ');
  const dispatch: any = useDispatch();

  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleDateChange = date => {
    screen === COMMON_CONSTS.STOPOVER
      ? (dispatch(updatePublishDate({date: date})),
        navigation.navigate('TimePublish'))
      : (dispatch(updateDate({date: date})), navigation.goBack());
  };

  return (
    <View>
      <CustomButton
        onPressFunction={() => handleCrossButtonPress()}
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        viewStyleButton={styles.crossButtonStyle}
      />
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHEN_ARE_YOU_GOING}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.GOING}</Text>
      </View>
      <DatePicker
        onSelectedChange={(date: any) => handleDateChange(date)}
        mode="date"
      />
    </View>
  );
};

export default DateComponent;
