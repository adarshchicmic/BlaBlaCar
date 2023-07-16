import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {SvgMinus, SvgPlush, SvgRightArrow} from '../../../assets/svg';
import {useSelector, useDispatch} from 'react-redux';
import {
  addPrice,
  addPriceR,
  subtractPrice,
  subtractPriceR,
} from '../../../store/slices/publishRideSlice';
const ReturnPrice = ({navigation, route}: any) => {
  const screen = route.params.screen;
  const numberOfSeat: any = useSelector(state => state);

  const dispatch = useDispatch();
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleMinusButton = () => {
    screen === COMMON_CONSTS.RETURN
      ? dispatch(subtractPriceR())
      : dispatch(subtractPrice());
  };
  const handlePlusButton = () => {
    screen === COMMON_CONSTS.RETURN
      ? dispatch(addPriceR())
      : dispatch(addPrice());
  };
  const handleForwardArrowButtonPress = () => {
    screen === COMMON_CONSTS.BOOK ? navigation.navigate('BookInstantly') : null;
    screen === COMMON_CONSTS.SEARCH ? navigation.goBack() : null;
    screen === COMMON_CONSTS.CAN_PASSENGER_BOOK_INSTANTLY
      ? navigation.navigate('ComingBackAsWell')
      : null;
    screen === COMMON_CONSTS.RETURN
      ? navigation.navigate('AddAboutRide', {screen: COMMON_CONSTS.RETURN})
      : null;
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
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.SET_THE_PRICE_PER_SEAT}
        </Text>
      </View>
      <View style={styles.plushMinusView}>
        <TouchableOpacity
          onPress={() => handleMinusButton()}
          disabled={
            screen === COMMON_CONSTS.RETURN
              ? numberOfSeat?.publishRideSlice?.set_priceR ===
                numberOfSeat?.publishRideSlice?.minPriceR
              : numberOfSeat?.publishRideSlice?.set_price ===
                numberOfSeat?.publishRideSlice?.minPrice
          }>
          <SvgMinus width={50} height={50} />
        </TouchableOpacity>
        <Text style={styles.numberStyle}>
          {COMMON_CONSTS.RS}
          {screen === COMMON_CONSTS.RETURN
            ? numberOfSeat?.publishRideSlice?.set_priceR
            : numberOfSeat?.publishRideSlice?.set_price}
        </Text>

        <TouchableOpacity
          onPress={() => handlePlusButton()}
          disabled={
            screen === COMMON_CONSTS.RETURN
              ? numberOfSeat?.publishRideSlice?.set_priceR ===
                numberOfSeat?.publishRideSlice?.maxPriceR
              : numberOfSeat?.publishRideSlice?.set_price ===
                numberOfSeat?.publishRideSlice?.maxPrice
          }>
          <SvgPlush width={50} height={50} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textMinMax}>
        {COMMON_CONSTS.MIN_PRICE} {numberOfSeat?.publishRideSlice?.minPrice},
        {COMMON_CONSTS.MAX_PRICE} {numberOfSeat?.publishRideSlice?.maxPrice}
      </Text>
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

export default memo(ReturnPrice);
