import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {useLazyVehicleQuery} from '../../../services/modules/getVehicle';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useBookMutation} from '../../../services/modules/BookRide';
import {SvgElectricity, SvgTwo} from '../../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useLazyRideWithPassengerQuery} from '../../../services/modules/rideWithPassenger';
import {useCreateChatMutation} from '../../../services/modules/createChat';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const RideDetail = ({navigation, route}) => {
  const [vehicleDetail, setVehicleDetail] = useState<any>({});
  const [passenger, setPassenger] = useState<any>([]);
  const val = route?.params?.data;
  console.log(val, 'this is value guys ');
  const [bookResult, setBookResult] = useState<any>({});
  const [vehicle, {isLoading}] = useLazyVehicleQuery();
  const [book, {isLoading: isLoadingBook, isError: isErrorBook}] =
    useBookMutation();
  const [
    createChat,
    {isLoading: isLoadingCreateChat, isError: isErrorCreateChat},
  ] = useCreateChatMutation();
  const [rideWithPassenger, {isLoading: isLoadingRide, isError: isErrorRide}] =
    useLazyRideWithPassengerQuery();
  useEffect(() => {
    const fun = async () => {
      const res = await vehicle({id: val?.publish?.vehicle_id});
      const result: any = await rideWithPassenger({
        publishId: val?.publish?.id,
      });
      setPassenger(result?.data?.passengers);
      setVehicleDetail(res);
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOnContinuePress = async () => {
    // navigation.navigate('CheckDetailAndBook');
    const result: any = await book({
      publishId: val?.publish?.id,
      seat: val?.publish?.passengers_count,
    });
    setBookResult(result);
    result?.data?.code === 200 ? navigation.navigate('BookedScreen') : null;
  };
  const handleImagePress = () => {
    navigation.navigate('YourProfile', {
      name: val?.name,
      imageUri: val?.image_url,
    });
  };
  const handleContactNamePress = async () => {
    const result: any = await createChat({
      receiverId: val?.publish?.user_id,
      publishId: val?.publish?.id,
    });
    console.log(result, 'this is result from create chat');
    result?.data?.code === 201
      ? navigation.navigate('ChatScreen', {
          chat: result?.data?.chat,
          screen: COMMON_CONSTS.YOUR_RIDES,
        })
      : null;
  };
  return (
    <ScrollView>
      <CustomBackArrowButton navigation={navigation} />
      <View style={styles.dateAndSearchView}>
        <CustomTitleText
          text={
            days[new Date(val?.publish?.time).getDay()] +
            ' ' +
            new Date(val?.publish?.time).getDate().toString().padStart(2, '0') +
            ' ' +
            monthNames[new Date(val?.publish?.time).getMonth()]
          }
        />
        <CustomSearchResult
          navigation={navigation}
          timeStart={new Date(val?.publish?.time)}
          timeEnd={new Date(val?.reach_time)}
          time={new Date(val?.publish?.estimate_time)}
          leavingFrom={val?.publish?.source}
          goingTo={val?.publish?.destination}
          name={val?.name}
          imageUri={val?.image_url}
          price={val?.publish?.set_price}
          show={false}
          data={val}
          ordinates={
            val?.publish?.select_route?.selectRoute?.route[0]?.overview_polyline
          }
        />
        <View style={styles.errorView}>
          {isLoadingCreateChat || (isLoadingRide && <ActivityIndicator />)}
          {(isErrorCreateChat || isErrorRide) && (
            <Text>{COMMON_CONSTS.ERROR}</Text>
          )}
          {isLoadingBook && <ActivityIndicator />}
          {isErrorBook && (
            <Text style={styles.errorStyle}>
              {bookResult?.error?.data?.error}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.priceViewMain}>
        <View style={styles.priceViewStyle}>
          <Text style={styles.priceText}>
            {COMMON_CONSTS.TOTAL_PRICE_FOR_ONE_PASSENGER}{' '}
            {val?.publish?.passengers_count} {COMMON_CONSTS.PASSENGER}
          </Text>
          <Text style={styles.priceText}>
            {COMMON_CONSTS.RS} {val?.publish?.set_price}
          </Text>
        </View>
      </View>
      <View style={{height: heightPercentageToDP(48)}}>
        <View style={styles.userViewStyle}>
          <View>
            <Text style={styles.nameStyle}>{val?.name}</Text>
            <Text>{'rating'}</Text>
          </View>
          <TouchableOpacity
            style={styles.imageArrowView}
            onPress={() => handleImagePress()}>
            <Image source={{uri: val?.image_url}} style={styles.imageStyle} />
            {/* <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text> */}
          </TouchableOpacity>
        </View>
        <View>
          <CustomButton
            btnText={COMMON_CONSTS.CONTACT + ' ' + val?.name}
            styleTxt={styles.buttonTextStyle}
            styleBtn={styles.buttonStyle}
            onPressFunction={() => handleContactNamePress()}
          />
        </View>
        <View style={styles.instantStyle}>
          <SvgTwo
            width={widthPercentageToDP(5)}
            height={heightPercentageToDP(5)}
          />
          <Text style={styles.textStyle}>
            {COMMON_CONSTS?.MAX_TWO_IN_THE_BACK_SEATS}
          </Text>
        </View>
        <View style={styles.instantStyle}>
          <SvgElectricity
            width={widthPercentageToDP(5)}
            height={heightPercentageToDP(5)}
          />
          <Text style={styles.textStyle}>{COMMON_CONSTS?.INSTANT_BOOKING}</Text>
        </View>
        <View style={styles.passengerView}>
          {passenger?.length > 0 ? (
            <View>
              <Text style={styles.passengerTextStyle}>
                {COMMON_CONSTS.PASSENGERS}
              </Text>
              {passenger.map((val, index) => (
                <View style={styles.userViewStyle} key={index}>
                  <View>
                    <Text style={styles.nameStyle}>{val?.first_name}</Text>
                    {/* <Text>{'rating'}</Text> */}
                  </View>
                  <TouchableOpacity
                    style={styles.imageArrowView}
                    onPress={() => handleImagePress()}>
                    <Image
                      source={{uri: val?.image}}
                      style={styles.imageStyle}
                    />
                    {/* <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text> */}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : null}
        </View>
        <View style={styles.vehicleView}>
          <Text style={styles.vehicleNameStyle}>
            {vehicleDetail?.data?.vehicle_name}
          </Text>
          <Text>{vehicleDetail?.data?.vehicle_color?.toLowerCase()}</Text>
        </View>
        <View />
        {/* <View>
          <Text>{COMMON_CONSTS.PASSENGERS}</Text>
        </View> */}
        {isLoading && <ActivityIndicator />}
        {/* {isError && (
          <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>
        )} */}

        {/* <Text> { }</Text> */}
        <View style={styles.btnView}>
          <CustomButton
            btnText={COMMON_CONSTS.BOOKC}
            styleBtn={styles.btnStyle}
            styleTxt={styles.btnText}
            onPressFunction={() => handleOnContinuePress()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RideDetail;
