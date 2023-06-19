import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {SvgLeftArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {useDispatch} from 'react-redux';
import {updateBookInstantly} from '../../../store/slices/publishRideSlice';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const BookInstantly = ({navigation}) => {
  const dispatch = useDispatch();
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleYesSurePress = () => {
    dispatch(updateBookInstantly({instant: true}));
    navigation.navigate('PricePerSeat', {
      screen: COMMON_CONSTS.CAN_PASSENGER_BOOK_INSTANTLY,
    });
  };
  const handleNoPress = () => {
    dispatch(updateBookInstantly({instant: false}));
    navigation.navigate('PricePerSeat', {
      screen: COMMON_CONSTS.CAN_PASSENGER_BOOK_INSTANTLY,
    });
  };
  return (
    <View>
      <View style={styles.arrowStyle}>
        <TouchableOpacity
          onPress={() => handleBackArrowPress()}
          style={styles.arrowStyle}>
          <SvgLeftArrow
            width={widthPercentageToDP(8)}
            height={heightPercentageToDP(6)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.CAN_PASSENGER_BOOK_INSTANTLY}
        </Text>
      </View>
      <View style={styles.nameArrowView}>
        <NameArrowButton
          name={COMMON_CONSTS.YES_SURE}
          onPressFunction={() => handleYesSurePress()}
        />
        <NameArrowButton
          name={COMMON_CONSTS.NO_ILL_REPLY_TO_EACH_REQUEST_MYSELF}
          onPressFunction={() => handleNoPress()}
        />
      </View>
    </View>
  );
};

export default memo(BookInstantly);
