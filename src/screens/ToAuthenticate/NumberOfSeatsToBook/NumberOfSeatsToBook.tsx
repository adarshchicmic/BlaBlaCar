import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgMinus, SvgPlush, SvgRightArrow} from '../../../assets/svg';
import {useSelector, useDispatch} from 'react-redux';
import {addSeats, subtractSeats} from '../../../store/slices/rideSlice';
const NumberOfSeatsToBook = ({navigation}: any) => {
  const numberOfSeat: any = useSelector(state => state);
  console.log(
    numberOfSeat?.rideSlice?.numberOfSeats,
    'this is number of seats',
  );
  const dispatch = useDispatch();
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleMinusButton = () => {
    dispatch(subtractSeats());
  };
  const handlePlusButton = () => {
    dispatch(addSeats());
  };
  const handleForwardArrowButtonPress = () => {
    navigation.goBack();
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.NUMBER_OF_SEATS}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.BOOK}</Text>
      </View>
      <View style={styles.plushMinusView}>
        <TouchableOpacity
          onPress={() => handleMinusButton()}
          disabled={numberOfSeat?.rideSlice?.numberOfSeats === 1}>
          <SvgMinus width={50} height={50} />
        </TouchableOpacity>
        <Text style={styles.numberStyle}>
          {numberOfSeat?.rideSlice?.numberOfSeats}
        </Text>
        <TouchableOpacity
          onPress={() => handlePlusButton()}
          disabled={numberOfSeat?.rideSlice?.numberOfSeats === 8}>
          <SvgPlush width={50} height={50} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonStyleArrow}
          onPress={() => handleForwardArrowButtonPress()}>
          <SvgRightArrow color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberOfSeatsToBook;
