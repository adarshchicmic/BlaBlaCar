import {ActivityIndicator, View, Text} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
// import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import styles from './styles';
import CustomLeavingFromGoingToButton from '../../../components/CustomLeavingFromGoingToButton/CustomLeavingFromGoingToButton';
import {useCancelRideMutation} from '../../../services/modules/CancelRide';

const RidePlan = ({navigation, route}) => {
  const bookingId = route?.params?.bookingId;
  console.log(bookingId, 'this is booking id ');
  const data = route.params.data;
  const booked = route.params.booked;
  console.log(data, 'this is data from ride plan ');
  const [cancelRide, {isLoading, isError}] = useCancelRideMutation();

  const handleEditYourPublicationPress = () => {
    navigation.navigate('EditYourPublication', {data: data});
  };
  const handleCancelBookingPress = async () => {
    console.log(data?.user_id);
    const result: any = await cancelRide({publishId: bookingId});
    console.log(result, 'this is result');
    result?.data?.code === 200 ? navigation.popBack() : null;
  };
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.RIDE_PLANS} />
      {/* <CustomSearchResult /> */}
      <View style={styles.ridePlanView}>
        <CustomLeavingFromGoingToButton
          leavingFrom={data?.source}
          goingTo={data?.destination}
          timeFrom={new Date(data?.time)}
          timeTo={new Date(data?.created_at)}
          date={new Date(data?.date)}
        />
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
      {isLoading && <ActivityIndicator />}
      {isError && <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>}
    </View>
  );
};

export default RidePlan;
