import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {useLazyGetRideQuery} from '../../../services/modules/PublishedRideGet';
import {useLazyBookedGetQuery} from '../../../services/modules/getRides';
import {useIsFocused} from '@react-navigation/native';
import DateToFrom from '../../../components/dateToFrom/dateToFrom';

const YourRides = ({navigation}) => {
  const [result, setResult] = useState<any>([]);
  const [response, setResponse] = useState<any>([]);
  const [getRide, {isLoading, isError}] = useLazyGetRideQuery();
  const [
    bookedGet,
    {isLoading: isLoadingBookedGet, isError: isErrorBookedGet},
  ] = useLazyBookedGetQuery();

  const focus = useIsFocused();
  useEffect(() => {
    const fun = async () => {
      const result = await getRide();
      setResult(result?.data?.data);

      console.log(result, 'This is result');
    };
    fun();
    const fun2 = async () => {
      const response = await bookedGet();
      setResponse(response?.data?.rides);
      console.log(response, 'this is response');
    };
    fun2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);
  return (
    <ScrollView>
      {result?.length === 0 ? (
        <View>
          <CustomTitleText
            text={COMMON_CONSTS.YOUR_FUTURE_TRAVEL_PLANS_WILL_APPEAR_HERE}
          />
          <View style={styles.textView}>
            <Text>{COMMON_CONSTS.FIND_THE_PERFECT_RIDE_FROM}</Text>
          </View>
        </View>
      ) : null}
      {result?.length ? (
        <CustomTitleText text={COMMON_CONSTS.YOUR_RIDES} />
      ) : null}
      {isLoading ? <ActivityIndicator /> : null}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
      {result?.map((val, index) => (
        <DateToFrom
          key={index}
          data={val}
          navigation={navigation}
          leavingFrom={val?.source}
          goingTo={val?.destination}
          date={new Date(val?.date)}
          time={new Date(val?.time)}
        />
      ))}
      {result?.length ? (
        <CustomTitleText text={COMMON_CONSTS.BOOKED_RIDES} />
      ) : null}
      {response?.map((val, index) => (
        <DateToFrom
          booked={true}
          key={index}
          data={val?.ride}
          navigation={navigation}
          leavingFrom={val?.ride?.source}
          goingTo={val?.ride?.destination}
          date={new Date(val?.ride?.date)}
          time={new Date(val?.ride?.time)}
        />
      ))}
    </ScrollView>
  );
};

export default memo(YourRides);
