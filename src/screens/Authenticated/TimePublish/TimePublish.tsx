import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import styles from './styles';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import DatePicker from 'react-native-modern-datepicker';
import {useDispatch} from 'react-redux';
import {updatePublishTime} from '../../../store/slices/publishRideSlice';

const TimePublish = ({navigation}) => {
  const [time, setTime] = useState('12:00');
  const [showClock, setShowClock] = useState(false);
  const dispatch = useDispatch();
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleRightArrowButtonPress = () => {
    dispatch(updatePublishTime({time: time}));
  };
  const handleButtonClick = () => {
    setShowClock(true);
  };
  const handleTimeChange = value => {
    setTime(value);
  };
  return (
    <View>
      <View style={styles.arrowStyle}>
        <TouchableOpacity
          onPress={() => handleBackArrowPress()}
          style={styles.arrowStyle}>
          <SvgLeftArrow width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.AT_WHAT_TIME_WILL_YOU_PICK_PASSENGERS_UP}
        </Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          btnText={time}
          styleBtn={styles.buttonStyle}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={() => handleButtonClick()}
        />
      </View>
      {showClock && (
        <DatePicker
          mode="time"
          minuteInterval={3}
          onTimeChange={selectedTime => handleTimeChange(selectedTime)}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRightArrowButtonPress()}>
        <SvgRightArrow width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(TimePublish);
