import {View, ScrollView, Text} from 'react-native';
import React, {memo} from 'react';
import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import CustomArrowButtonFilter from '../../../components/CustomArrowButtonFilter/CustomArrowButtonFilter';
import {useSelector} from 'react-redux';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';

const SearchResult = ({navigation, route}) => {
  const obj = route?.params?.object?.data;
  console.log(obj, 'this is data data');
  const state: any = useSelector(state => state);

  console.log(obj, 'this is obj');
  return (
    <View style={styles.container}>
      <CustomArrowButtonFilter
        goingFrom={state?.rideSlice?.leavingFrom?.slice(0, 3)}
        goingTo={(state?.rideSlice?.goingTo).slice(0, 15)}
        passengerCount={state?.rideSlice?.numberOfSeats}
        navigation={navigation}
        data={obj}
      />
      {obj?.length === 0 ? (
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.NO_RIDE_FOR_THIS_DAY}
        </Text>
      ) : (
        <ScrollView>
          {obj?.map((val, index) => (
            <CustomSearchResult
              navigation={navigation}
              data={val}
              key={index}
              timeStart={new Date(val?.publish?.time)}
              timeEnd={new Date(val?.reach_time)}
              time={new Date(val?.publish?.estimate_time)}
              leavingFrom={val?.publish?.source}
              goingTo={val?.publish?.destination}
              name={val?.name}
              imageUri={val?.image_url}
              price={val?.publish?.set_price}
              show={true}
              bookInstantly={val?.publish?.book_instantly}
              midSeat={val?.publish?.mid_seat}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default memo(SearchResult);
