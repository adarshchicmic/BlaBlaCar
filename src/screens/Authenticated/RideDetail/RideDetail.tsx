import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
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
  const val = route?.params?.data;
  console.log(val, 'this is data');
  const [bookResult, setBookResult] = useState<any>({});
  const [vehicle, {isLoading, isError}] = useLazyVehicleQuery();
  const [book, {isLoading: isLoadingBook, isError: isErrorBook}] =
    useBookMutation();
  console.log(bookResult, 'this is bookResult');
  useEffect(() => {
    const fun = async () => {
      const res = await vehicle({id: val?.publish?.vehicle_id});
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
    console.log(result, 'this is result ');
    setBookResult(result);
    result?.data?.code === 201 ? navigation.navigate('HomeScreen') : null;
  };
  return (
    <View style={styles.container}>
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
          ordinates={
            val?.publish?.select_route?.selectRoute?.route[0]?.overview_polyline
          }
        />
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
      <View>
        <View style={styles.userViewStyle}>
          <View>
            <Text style={styles.nameStyle}>{val?.name}</Text>
            <Text>{'rating'}</Text>
          </View>
          <TouchableOpacity style={styles.imageArrowView}>
            <Image source={{uri: val?.image_url}} style={styles.imageStyle} />
            <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vehicleView}>
          <Text style={styles.vehicleNameStyle}>
            {vehicleDetail?.data?.vehicle_name}
          </Text>
          <Text>{vehicleDetail?.data?.vehicle_color?.toLowerCase()}</Text>
        </View>
        {isLoading && <ActivityIndicator />}
        {isError && (
          <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>
        )}
        {isLoadingBook && <ActivityIndicator />}
        {isErrorBook && (
          <Text style={styles.errorStyle}>
            {bookResult?.error?.data?.error}
          </Text>
        )}
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
    </View>
  );
};

export default RideDetail;
