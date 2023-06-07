import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, memo, useEffect} from 'react';
import styles from './styles';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import DatePicker from 'react-native-modern-datepicker';
import {useDispatch} from 'react-redux';
import {
  updatePublishTime,
  updatePublishTimeReturn,
} from '../../../store/slices/publishRideSlice';
import {useLazyVehiclesQuery} from '../../../services/modules/GetAllVehicles';

const TimePublish = ({navigation, route}) => {
  const screen = route?.params?.screen;
  const [time, setTime] = useState('12:00');
  const [showClock, setShowClock] = useState(false);
  const [vehicleSize, setVehicleSize] = useState<number>(0);
  const [vehicleData, setVehicleData] = useState<any>({});

  const dispatch = useDispatch();
  const [vehicles, {isLoading, isError}] = useLazyVehiclesQuery();

  useEffect(() => {
    const fun = async () => {
      const data = await vehicles();
      setVehicleData(data?.data?.data);
      setVehicleSize(data?.data?.data?.length);
    };
    fun();
  }, [vehicles]);
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleRightArrowButtonPress = () => {
    if (screen === COMMON_CONSTS.RETURN) {
      dispatch(updatePublishTimeReturn({returnTime: time}));
      navigation.navigate('PricePerSeat', {screen: COMMON_CONSTS.RETURN});
    } else {
      dispatch(updatePublishTime({time: time}));
      vehicleSize > 0 || vehicleSize === undefined
        ? navigation.navigate('WhichCarYouDriving', {vehicleData: vehicleData})
        : navigation.navigate('MiddleSeatEmpty');
      isError ? navigation.navigate('MiddleSeatEmpty') : null;
    }
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
      {isLoading && <ActivityIndicator />}
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
