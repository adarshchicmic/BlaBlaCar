import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
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
  const val = route?.params?.data;
  console.log(val, 'this is data');

  return (
    <View>
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
        />
      </View>
      <View style={styles.priceViewMain}>
        <View style={styles.priceViewStyle}>
          <Text style={styles.priceText}>
            {COMMON_CONSTS.TOTAL_PRICE_FOR_ONE_PASSENGER}
          </Text>
          <Text style={styles.priceText}>
            {COMMON_CONSTS.RS} {val?.publish?.set_price}
          </Text>
        </View>
      </View>
      <View style={styles.userViewStyle}>
        <View>
          <Text>{val?.name}</Text>
          <Text>{'rating'}</Text>
        </View>
        <TouchableOpacity style={styles.imageArrowView}>
          <Image source={{uri: val?.image_url}} style={styles.imageStyle} />
          <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
        </TouchableOpacity>
        <View>{/* <Text>{val}</Text> */}</View>
      </View>
    </View>
  );
};

export default RideDetail;
