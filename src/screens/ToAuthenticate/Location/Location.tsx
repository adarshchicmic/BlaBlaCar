import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef, useState, memo} from 'react';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';

import {
  updateDropOff,
  updateGoingTo,
  updateLeavingFrom,
  updatePickUp,
  updateStatsGoingTo,
  updateStatsLeavingFrom,
} from '../../../store/slices/rideSlice';
import {updateCity} from '../../../store/slices/publishRideSlice';

const Location = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const screen = route.params.screen;
  const dispatch = useDispatch();
  const myRef: any = useRef();
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(info => {
  //     // setLatitude(info?.coords?.latitude);
  //   });
  // }, []);

  const arrowButtonPress = () => {
    navigation.goBack();
  };
  // const preProcessFunction = () => {};

  const handlePlaceSelected = (data, details) => {
    const {location} = details.geometry;
    const latitudee = location.lat;
    const longitudee = location.lng;
    myRef.current.setAddressText('');

    screen === COMMON_CONSTS.LEAVING_FROM
      ? (dispatch(updateLeavingFrom({leavingFrom: data?.description})),
        dispatch(
          updateStatsLeavingFrom({latitude: latitudee, longitude: longitudee}),
        ),
        navigation.goBack())
      : null;
    screen === COMMON_CONSTS.GOING_TO
      ? (dispatch(updateGoingTo({goingTo: data?.description})),
        dispatch(
          updateStatsGoingTo({latitude: latitudee, longitude: longitudee}),
        ),
        navigation.goBack())
      : null;
    screen === COMMON_CONSTS.PICK_UP
      ? (dispatch(
          updatePickUp({
            pickUp: data?.description,
            latitude: latitudee,
            longitude: longitudee,
          }),
        ),
        navigation.navigate('DropOff'))
      : null;
    screen === COMMON_CONSTS.DROP_OFF
      ? (dispatch(
          updateDropOff({
            dropOff: data?.description,
            latitude: latitudee,
            longitude: longitudee,
          }),
        ),
        navigation.navigate('MapScreen'))
      : null;
    screen === COMMON_CONSTS.ADD_CITY
      ? (dispatch(
          updateCity({
            city: data?.description,
            latitude: latitudee,
            longitude: longitudee,
          }),
        ),
        navigation.navigate('DateComponent', {screen: COMMON_CONSTS.STOPOVER}))
      : null;
  };
  const onFail = () => {
    let executed = true;
    executed ? (setShowError(true), (executed = false)) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowInputStyle}>
        <View style={styles.leftArrowViewStyle}>
          <TouchableOpacity onPress={() => arrowButtonPress()}>
            <Text style={styles.leftArrowStyle}>
              {COMMON_CONSTS.LEFT_ARROW}
            </Text>
          </TouchableOpacity>
        </View>
        <GooglePlacesAutocomplete
          ref={myRef}
          styles={styles.styleTextInput}
          placeholder="Search"
          onPress={(data, details) => handlePlaceSelected(data, details)}
          query={{
            key: 'AIzaSyDUzn63K64-sXadyIwRJExCfMaicagwGq4',
            language: 'en',
            components: 'country:ind',
          }}
          fetchDetails={true}
          onFail={() => onFail()}
          nearbyPlacesAPI="GooglePlacesSearch"
          // currentLocation={true}
          currentLocationLabel="current location"
          // preProcess={(index) => preProcessFunction(index)}
          autoFillOnNotFound={true}
          timeout={2000}
        />
      </View>
      {showError && <Text>{COMMON_CONSTS.NETWORK_ERROR}</Text>}
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

export default memo(Location);
