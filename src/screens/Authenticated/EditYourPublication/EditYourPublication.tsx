import {ActivityIndicator, View, Text} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {useCancelRideMutation} from '../../../services/modules/CancelRide';
import {useDispatch, useSelector} from 'react-redux';
import {updatePublishDate} from '../../../store/slices/publishRideSlice';
import {updatePublishTime} from '../../../store/slices/publishRideSlice';
import {updateCity} from '../../../store/slices/publishRideSlice';
import {updatePrice} from '../../../store/slices/publishRideSlice';
import {updateVehicleId} from '../../../store/slices/publishRideSlice';
import {updateRoadDistanceDuration} from '../../../store/slices/publishRideSlice';
import {updateRouteDetail} from '../../../store/slices/publishRideSlice';
import {updateMidSeat} from '../../../store/slices/publishRideSlice';
import {updateBookInstantly} from '../../../store/slices/publishRideSlice';
import {updatePickUp} from '../../../store/slices/rideSlice';
import {updateDropOff} from '../../../store/slices/rideSlice';

const EditYourPublication = ({navigation, route}) => {
  const data = route?.params?.data;
  const states = useSelector(state => state);
  console.log(states, 'this is states');
  const dispatch = useDispatch();

  const [cancelRide, {isLoading, isError}] = useCancelRideMutation();
  const handleEditYourPublicationPress = () => {
    navigation.navigate('ItineraryDetails');
  };
  const handleCancelButtonPress = async () => {
    const result: any = await cancelRide({publishId: data?.id});
    console.log(result);
    result?.data?.code === 200 ? navigation.popBack() : null;
  };
  const handleDuplicateYourPublication = () => {
    dispatch(
      updateDropOff({
        dropOff: data?.destination,
        latitude: data?.destination_latitude,
        longitude: data?.destination_longitude,
      }),
    );
    dispatch(
      updatePickUp({
        pickUp: data?.source,
        latitude: data?.source_latitude,
        longitude: data?.source_longitude,
      }),
    );
    dispatch(updatePublishDate({date: data?.date}));
    dispatch(updatePublishTime({time: data?.time}));
    dispatch(
      updateCity({
        city: data?.add_city,
        latitude: data?.add_city_latitude,
        longitude: data?.add_city_longitude,
      }),
    );
    dispatch(updatePrice({price: data?.set_price}));
    dispatch(updateVehicleId({vehicleId: data?.vehicle_id}));
    console.log(data?.select_route?.estimatedTime, 'this is estimated time ');
    dispatch(
      updateRoadDistanceDuration({
        road: data?.select_route?.road_name,
        distance: data?.select_route?.distance,
        duration: data?.select_route?.estimatedTime,
      }),
    );
    dispatch(updateRouteDetail({selectRoute: data?.select_route?.selectRoute}));
    dispatch(updateMidSeat({midSeat: data?.mid_seat}));
    dispatch(updateBookInstantly({instant: data?.book_instantly}));
    navigation.navigate('DatePicker', {screen: COMMON_CONSTS.RETURN});
  };
  const handlePublishYourReturnRide = () => {
    dispatch(
      updateDropOff({
        dropOff: data?.destination,
        latitude: data?.destination_latitude,
        longitude: data?.destination_longitude,
      }),
    );
    dispatch(
      updatePickUp({
        pickUp: data?.source,
        latitude: data?.source_latitude,
        longitude: data?.source_longitude,
      }),
    );
    dispatch(updatePublishDate({date: data?.date}));
    dispatch(updatePublishTime({time: data?.time}));
    dispatch(
      updateCity({
        city: data?.add_city,
        latitude: data?.add_city_latitude,
        longitude: data?.add_city_longitude,
      }),
    );
    dispatch(updatePrice({price: data?.set_price}));
    dispatch(updateVehicleId({vehicleId: data?.vehicle_id}));
    console.log(data?.select_route?.estimatedTime, 'this is estimated time ');
    dispatch(
      updateRoadDistanceDuration({
        road: data?.select_route?.road_name,
        distance: data?.select_route?.distance,
        duration: data?.select_route?.estimatedTime,
      }),
    );
    dispatch(updateRouteDetail({selectRoute: data?.select_route?.selectRoute}));
    dispatch(updateMidSeat({midSeat: data?.mid_seat}));
    dispatch(updateBookInstantly({instant: data?.book_instantly}));
    navigation.navigate('DatePicker', {screen: COMMON_CONSTS.RETURN});
  };
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.EDIT_YOUR_PUBLICATION} />

      <View style={styles.buttonView}>
        <NameArrowButton
          name={COMMON_CONSTS.ITINERARY_DETAILS}
          onPressFunction={() => handleEditYourPublicationPress()}
        />
        <NameArrowButton name={COMMON_CONSTS.PRICE} />
        <NameArrowButton name={COMMON_CONSTS.SEAT_AND_OPTIONS} />
      </View>
      <CustomButton
        btnText={COMMON_CONSTS.CANCEL_YOUR_RIDE}
        styleTxt={styles.btnTextStyle}
        onPressFunction={() => handleCancelButtonPress()}
      />
      <CustomButton
        btnText={COMMON_CONSTS.DUPLICATE_YOUR_PUBLICATION}
        styleTxt={styles.btnTextStyle}
        onPressFunction={() => handleDuplicateYourPublication()}
      />
      <CustomButton
        btnText={COMMON_CONSTS.PUBLISH_YOUR_RETURN_RIDE}
        styleTxt={styles.btnTextStyle}
        onPressFunction={() => handlePublishYourReturnRide()}
      />
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
    </View>
  );
};

export default EditYourPublication;
