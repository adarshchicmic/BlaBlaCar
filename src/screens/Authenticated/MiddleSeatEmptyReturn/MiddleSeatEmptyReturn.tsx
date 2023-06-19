import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {SvgLeftArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {useDispatch} from 'react-redux';
import {updateMidSeat} from '../../../store/slices/publishRideSlice';

const MiddleSeatEmptyReturn = ({navigation}) => {
  const dispatch = useDispatch();
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleYesSurePress = () => {
    dispatch(updateMidSeat({midSeat: true}));
    navigation.navigate('NumberOfSeatsToBook', {screen: COMMON_CONSTS.BOOK});
  };
  const handleNoPress = () => {
    dispatch(updateMidSeat({midSeat: false}));
    navigation.navigate('NumberOfSeatsToBook', {screen: COMMON_CONSTS.BOOK});
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
          {COMMON_CONSTS.THINK_COMFORT_KEEP_THE_MIDDLE_SEAT_EMPTY}
        </Text>
      </View>
      <View style={styles.nameArrowView}>
        <NameArrowButton
          name={COMMON_CONSTS.YES_SURE}
          onPressFunction={() => handleYesSurePress()}
        />
        <NameArrowButton
          name={COMMON_CONSTS.NO_ILL_SQEEZE_IN_THREE}
          onPressFunction={() => handleNoPress()}
        />
      </View>
    </View>
  );
};

export default memo(MiddleSeatEmptyReturn);
