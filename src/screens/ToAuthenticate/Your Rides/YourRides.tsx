import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {useLazyGetRideQuery} from '../../../services/modules/PublishedRideGet';

import {useIsFocused} from '@react-navigation/native';
import DateToFrom from '../../../components/dateToFrom/dateToFrom';

const YourRides = () => {
  const [result, setResult] = useState<any>();
  const [getRide, {isLoading, isError}] = useLazyGetRideQuery();
  const focus = useIsFocused();
  useEffect(() => {
    const fun = async () => {
      const result = await getRide();
      setResult(result?.data?.data);
      console.log(result, 'This is result');
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);
  return (
    <ScrollView>
      {result?.lenght && (
        <View>
          <CustomTitleText
            text={COMMON_CONSTS.YOUR_FUTURE_TRAVEL_PLANS_WILL_APPEAR_HERE}
          />
          <View style={styles.textView}>
            <Text>{COMMON_CONSTS.FIND_THE_PERFECT_RIDE_FROM}</Text>
          </View>
        </View>
      )}
      {result?.length && <CustomTitleText text={COMMON_CONSTS.YOUR_RIDES} />}
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
      {result?.map(val => (
        <DateToFrom
          leavingFrom={val?.source}
          goingTo={val?.destination}
          date={new Date(val?.date)}
          time={new Date(val?.time)}
        />
      ))}
    </ScrollView>
  );
};

export default memo(YourRides);
