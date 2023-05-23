import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
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

const Location = ({navigation, route}) => {
  const screen = route.params.screen;
  const dispatch = useDispatch();
  const myRef: any = useRef();
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      // setLatitude(info?.coords?.latitude);
    });
  }, []);

  const arrowButtonPress = () => {
    navigation.goBack();
  };

  const handlePlaceSelected = (data, details) => {
    console.log(screen, 'this is screen guys ');
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
          }}
          fetchDetails={true}
        />
      </View>
    </View>
  );
};

export default Location;
