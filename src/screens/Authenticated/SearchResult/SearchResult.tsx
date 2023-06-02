import {View} from 'react-native';
import React, {memo} from 'react';
import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import CustomArrowButtonFilter from '../../../components/CustomArrowButtonFilter/CustomArrowButtonFilter';
import {useSelector} from 'react-redux';

const SearchResult = ({navigation, route}) => {
  const obj = route?.params?.object?.data;
  const state: any = useSelector(state => state);
  console.log(state, 'tjhis is state ');
  console.log(navigation, 'this is navigation');
  console.log(obj[0]?.publish?.reach_time);
  return (
    <View>
      <CustomArrowButtonFilter
        goingFrom={state?.rideSlice?.leavingFrom?.slice(0, 3)}
        goingTo={(state?.rideSlice?.goingTo).slice(0, 15)}
        passengerCount={state?.rideSlice?.numberOfSeats}
        navigation={navigation}
      />

      {obj.map(val => (
        <CustomSearchResult
          timeStart={new Date(val?.publish?.time)}
          timeEnd={new Date(val?.reach_time)}
          time={new Date(val?.publish?.estimate_time)}
          leavingFrom={val?.publish?.source}
          goingTo={val?.publish?.destination}
          name={val?.name}
          imageUri={val?.image_url}
          price={val?.publish?.set_price}
        />
      ))}
    </View>
  );
};

export default memo(SearchResult);
