import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState, memo} from 'react';
import styles from './styles';
import {SvgLeftArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {usePublishRideMutation} from '../../../services/modules/PublishRide';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyVehicleQuery} from '../../../services/modules/getVehicle';
// import {updateVehicleId} from '../../../store/slices/publishRideSlice';

const AddAboutRide = ({navigation}) => {
  const [text, setText] = useState('');
  // const [vehiclePresent, setVehiclePresent] = useState(null);
  const [showError, setShowError] = useState(false);
  const [publish, {isLoading, isError}] = usePublishRideMutation();
  const [vehicle, {isLoading: isLoadingVehicle, isError: isErrorVehicle}]: any =
    useLazyVehicleQuery();
  const states: any = useSelector(state => state);
  console.log(
    states.publishRideSlice.select_route.estimatedTime,
    'this is estimated time',
  );
  console.log(states.publishRideSlice.set_price, 'This is price');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   vehicle().then(payload => {
  //     dispatch(updateVehicleId({id: payload?.data?.data[0].id}));
  //     setVehiclePresent(payload?.data?.data?.length);
  //   });
  // }, [vehicle, dispatch]);
  // useEffect(() => {
  //   const fun: any = async () => {
  //     const payload: any = await vehicle();
  //     console.log('fulfilled', payload?.data[0]?.id);
  //     // dispatch(updateVehicleId({id: payload.data[0].id}));
  //     // setVehiclePresent(payload?.data?.length);
  //     // console.log(payload?.data?.length);
  //   };
  //   fun();
  // }, [vehicle, dispatch]);

  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  const handleInputTextChange = value => {
    setText(value);
  };
  const handlePublishRide = async () => {
    // if (vehiclePresent) {
    const datata: any = await publish({
      source: states.rideSlice.pickUp,
      destination: states.rideSlice.dropOff,
      sourceLongitude: states.rideSlice.statsPickUp.longitude,
      sourceLatitude: states.rideSlice.statsPickUp.latitude,
      destinationLatitude: states.rideSlice.statsDropOff.latitude,
      destinationLongitude: states.rideSlice.statsDropOff.longitude,
      passsengerCount: states.rideSlice.numberOfSeats,
      addCity: states.publishRideSlice.add_city,
      addCityLongitude: states.publishRideSlice.add_city_latitude,
      addCityLatitude: states.publishRideSlice.add_city_longitude,
      date: states.publishRideSlice.date,
      time: states.publishRideSlice.time,
      setPrice: states.publishRideSlice.set_price,
      aboutRide: text,
      vehicleId: states.publishRideSlice.vehicle_id,
      bookInstantly: states.publishRideSlice.bookInstantly,
      midSeat: states.publishRideSlice.midSeat,
      estimatedTime: states.publishRideSlice.select_route.estimatedTime,
      selectRoute: states.publishRideSlice.select_route,
    });

    console.log(datata, 'this is result guys ');
    datata.data.code === 201 ? navigation.popToTop() : null;
    // } else {
    //   setShowError(true);
    // }
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
          {COMMON_CONSTS.ANYTHING_TO_ADD_ABOUT_YOUR_RIDE}
        </Text>
      </View>
      <View style={styles.buttonView}>
        <CustomTextInput
          onChangeTextFunction={text => handleInputTextChange(text)}
          styleInputText={styles.textInputStyle}
        />
      </View>
      {showError && (
        <Text style={styles.errorStyle}>{COMMON_CONSTS.VEHICLE_ERROR}</Text>
      )}
      {(isError || isErrorVehicle) && (
        <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>
      )}
      {(isLoading || isLoadingVehicle) && <ActivityIndicator />}
      {text && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePublishRide()}>
          <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.PUBLISH}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(AddAboutRide);
