import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
// import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import styles from './styles';
import CustomLeavingFromGoingToButton from '../../../components/CustomLeavingFromGoingToButton/CustomLeavingFromGoingToButton';
import {useCancelRideMutation} from '../../../services/modules/CancelRide';
import {useLazyRideWithPassengerQuery} from '../../../services/modules/rideWithPassenger';

const RidePlan = ({navigation, route}) => {
  const bookingId = route?.params?.bookingId;
  console.log(bookingId, 'this is booking id ');
  const data = route.params.data;
  const booked = route.params.booked;
  const [passenger, setPassenger] = useState<any>([]);
  console.log(data, 'this is data from ride plan ');
  const [cancelRide, {isLoading, isError}] = useCancelRideMutation();
  const [
    rideWithPassenger,
    {isLoading: isLoadingCancelRide, isError: isErrorCancelRide},
  ] = useLazyRideWithPassengerQuery();

  useEffect(() => {
    const fun = async () => {
      const result = await rideWithPassenger({publishId: 286});
      setPassenger(result?.data?.passengers);
      console.log(result?.data?.passengers, 'this is data ok');
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditYourPublicationPress = () => {
    navigation.navigate('EditYourPublication', {data: data});
  };
  const handleCancelBookingPress = async () => {
    console.log(data?.user_id);
    const result: any = await cancelRide({publishId: bookingId});
    console.log(result, 'this is result');
    result?.data?.code === 200 ? navigation.popBack() : null;
  };
  const handleImagePress = () => {
    navigation.navigate('YourProfile', {
      name: data?.name,
      imageUri: data?.image_url,
    });
  };
  console.log(passenger, 'this is passenger');
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.RIDE_PLANS} />
      {/* <CustomSearchResult /> */}
      <View style={styles.ridePlanView}>
        <CustomLeavingFromGoingToButton
          navigation={navigation}
          data={data}
          leavingFrom={data?.source}
          goingTo={data?.destination}
          timeFrom={new Date(data?.time)}
          timeTo={new Date(data?.created_at)}
          date={new Date(data?.date)}
        />
      </View>
      <View style={styles.passengerView}>
        {passenger?.length > 0 ? (
          <View>
            <Text style={styles.passengerTextStyle}>
              {COMMON_CONSTS.PASSENGERS}
            </Text>
            {passenger.map(val => (
              <View style={styles.userViewStyle}>
                <View>
                  <Text style={styles.nameStyle}>{val?.first_name}</Text>
                  {/* <Text>{'rating'}</Text> */}
                </View>
                <TouchableOpacity
                  style={styles.imageArrowView}
                  onPress={() => handleImagePress()}>
                  <Image source={{uri: val?.image}} style={styles.imageStyle} />
                  {/* <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text> */}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : (
          <Text>{COMMON_CONSTS.NO_PASSENGERS_FOR_THIS_RIDE}</Text>
        )}
      </View>
      {!booked ? (
        <View style={styles.buttonView}>
          <NameArrowButton
            name={COMMON_CONSTS.EDIT_YOUR_PUBLICATION}
            onPressFunction={() => handleEditYourPublicationPress()}
          />
        </View>
      ) : (
        <View style={styles.buttonView}>
          <NameArrowButton
            name={COMMON_CONSTS.CANCEL_YOUR_BOOKING}
            onPressFunction={() => handleCancelBookingPress()}
          />
        </View>
      )}
      {isLoadingCancelRide && <ActivityIndicator />}
      {isLoading && <ActivityIndicator />}
      {(isError || isErrorCancelRide) && (
        <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>
      )}
    </View>
  );
};

export default RidePlan;
