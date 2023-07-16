import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {SvgMinus, SvgPlush, SvgRightArrow} from '../../../assets/svg';
import {useSelector, useDispatch} from 'react-redux';
import {addSeats, subtractSeats} from '../../../store/slices/rideSlice';
const NumberOfSeatsToBook = ({navigation, route}: any) => {
  const screen = route.params.screen;
  const numberOfSeat: any = useSelector(state => state);

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
    screen === COMMON_CONSTS.BOOK
      ? navigation.navigate('BookInstantly')
      : navigation.goBack();
  };
  return (
    <SafeAreaView>
      <CustomButton
        onPressFunction={() => handleCrossButtonPress()}
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        viewStyleButton={styles.crossButtonStyle}
      />
      <View style={styles.textView}>
        {screen === COMMON_CONSTS.BOOK ? (
          <Text style={styles.textStyle}>
            {COMMON_CONSTS.SO_HOW_MANY_PASSENGERS_YOU_CAN_TAKE}
          </Text>
        ) : (
          <View>
            <Text style={styles.textStyle}>
              {COMMON_CONSTS.NUMBER_OF_SEATS}
            </Text>
            <Text style={styles.textStyle}>{COMMON_CONSTS.BOOK}</Text>
          </View>
        )}
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
    </SafeAreaView>
  );
};

export default memo(NumberOfSeatsToBook);
