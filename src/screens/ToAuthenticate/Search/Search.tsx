import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {SvgCalender, SvgCircle, SvgSwap, SvgUser} from '../../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {swapLocation} from '../../../store/slices/rideSlice';
import CustomLeavingFromGoingTo from '../../../components/CustomLeavingFromGoingTo/CustomLeavingFromGoingTo';
import {updateSearch} from '../../../store/slices/searchSlice';
import {useSearchMutation} from '../../../services/modules/Search';

const Search = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [search, {isLoading}] = useSearchMutation();
  const numberOfSeat: any = useSelector(state => state);
  console.log('number of seat is this', numberOfSeat);

  const handleleavingFromPress = () => {
    navigation.navigate('Location', {screen: COMMON_CONSTS.LEAVING_FROM});
  };
  const handleGoingToPress = () => {
    navigation.navigate('Location', {screen: COMMON_CONSTS.GOING_TO});
  };
  const handleSearchButtonPress = async () => {
    dispatch(
      updateSearch({
        search: {
          leavingFrom: numberOfSeat?.rideSlice?.leavingFrom,
          goingTo: numberOfSeat?.rideSlice?.goingTo,
          passengerCount: numberOfSeat?.rideSlice?.numberOfSeats,
        },
      }),
    );
    const cal = await search({
      sourceLatitude: numberOfSeat?.rideSlice?.statsLeavingFrom?.latitude,
      destinationLatitude: numberOfSeat?.rideSlice?.statsGointTo?.latitude,
      sourceLongitude: numberOfSeat?.rideSlice?.statsLeavingFrom?.longitude,
      destinationLongitude: numberOfSeat?.rideSlice?.statsGointTo?.longitude,
      passCount: numberOfSeat?.rideSlice?.numberOfSeats,
      date: numberOfSeat?.rideSlice?.date,
    });
    console.log(cal, 'this is cal');
    navigation.navigate('SearchResult');
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../../../assets/images/search.jpg')}>
        <View style={styles.textUpperViewStyle}>
          <Text style={styles.textUpperStyle}>
            {COMMON_CONSTS.YOUR_PICK_OF_RIDES_AT}
          </Text>
          {/* <Text style={styles.textUpperStyle}>{COMMON_CONSTS.LOW_PRICES}</Text> */}
        </View>
      </ImageBackground>
      {isFocused && (
        <View style={styles.searchViewStyle}>
          {numberOfSeat?.rideSlice?.leavingFrom !==
            COMMON_CONSTS.LEAVING_FROM &&
            numberOfSeat?.rideSlice?.goingTo !== COMMON_CONSTS.GOING_TO && (
              <TouchableOpacity
                style={styles.swapView}
                onPress={() => dispatch(swapLocation())}>
                <SvgSwap width={25} height={25} />
              </TouchableOpacity>
            )}
          <Pressable
            style={styles.continueWithEmailView(0)}
            onPress={handleleavingFromPress}>
            <SvgCircle width={15} height={15} style={styles.svgStyle} />
            <Text style={styles.continueWithEmail}>
              {(numberOfSeat?.rideSlice?.leavingFrom).slice(0, 20)}
            </Text>
          </Pressable>
          <Pressable
            style={styles.continueWithEmailView(0)}
            onPress={() => handleGoingToPress()}>
            <SvgCircle width={15} height={15} style={styles.svgStyle} />
            <Text style={styles.continueWithEmail}>
              {(numberOfSeat?.rideSlice?.goingTo).slice(0, 25)}
            </Text>
          </Pressable>
          <View style={styles.dateAndUserView}>
            <Pressable
              style={styles.continueWithEmailView(1)}
              onPress={() => navigation.navigate('DatePicker')}>
              <SvgCalender width={15} height={15} style={styles.svgStyle} />
              <Text style={styles.numberStyle}>
                {numberOfSeat?.rideSlice?.date}
              </Text>
            </Pressable>
            <View style={styles.userViewStyle}>
              <Pressable
                onPress={() =>
                  navigation.navigate('NumberOfSeats', {
                    screen: COMMON_CONSTS.SEARCH,
                  })
                }>
                <View style={styles.profileNumberStyle}>
                  <SvgUser width={15} height={15} style={styles.svgStyle} />
                  <Text style={styles.numberStyle}>
                    {numberOfSeat?.rideSlice?.numberOfSeats}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          {/* <DatePicker onPress={date => console.log('date', date)} /> */}
          <CustomButton
            btnText={COMMON_CONSTS.SEARCH}
            styleBtn={styles.buttonStyle}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handleSearchButtonPress()}
          />
        </View>
      )}
      {isLoading && <ActivityIndicator />}
      <View style={styles.addressView}>
        {numberOfSeat?.searchSlice?.search?.map((val, id) => (
          <CustomLeavingFromGoingTo
            key={id}
            leavingFrom={val.leavingFrom}
            goingTo={val.goingTo}
            passengerCount={val?.passengerCount}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default memo(Search);
