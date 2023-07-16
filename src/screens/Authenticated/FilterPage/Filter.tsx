import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState, useRef} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import RadioForm from 'react-native-simple-radio-button';
import {useLazySearchQuery} from '../../../services/modules/Search';
import {useSelector} from 'react-redux';

const Filter = ({navigation, route}) => {
  const data = route.params.data;

  const [selectedValue, setSelectedValue] = useState('');
  //   const [initialValue, setInitialValue] = useState();
  const state: any = useSelector(state => state);

  const ref: any = useRef();
  const [search, {isLoading, isError}] = useLazySearchQuery();

  const options = [
    {
      label: COMMON_CONSTS.EARLIEST_DEPARTURE,
      value: COMMON_CONSTS.EARLIEST_DEPARTURE,
    },
    {
      label: COMMON_CONSTS.LOWEST_PRICE,
      value: COMMON_CONSTS.LOWEST_PRICE,
    },
  ];
  const handleRadioPress = value => {
    setSelectedValue(value);
  };
  //   const clearAllClick = () => {
  //     setSelectedValue(COMMON_CONSTS.EARLIEST_DEPARTURE);
  //   };
  //   const handlePublishClick = async () => {
  //       const result = await search({
  //         sourceLatitude: ,
  //         destinationLatitude,
  //         sourceLongitude,
  //         destinationLongitude,
  //         passCount,
  //         date,
  //     })
  //   };
  const filterButtonClick = async () => {
    const result = await search({
      sourceLatitude: state?.rideSlice?.statsLeavingFrom?.longitude,
      destinationLatitude: state?.rideSlice?.statsGoingTo?.latitude,
      sourceLongitude: state?.rideSlice?.statsLeavingFrom?.latitude,
      destinationLongitude: state?.rideSlice?.statsGoingTo?.longitude,
      passCount: state?.rideSlice?.numberOfSeats,
      date: state?.rideSlice?.date,
      orderBy: selectedValue === COMMON_CONSTS.EARLIEST_DEPARTURE ? 1 : 2,
    });

    if (result?.data?.code === 200) {
      navigation.navigate('SearchResult', {object: result?.data});
    }
  };
  const handleCrossButtonClick = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.headerViewStyle}>
        <CustomButton
          btnText={COMMON_CONSTS.X}
          styleTxt={styles.buttonTextStyle}
          styleBtn={styles.buttonContainer}
          onPressFunction={() => handleCrossButtonClick()}
        />
        {/* <CustomButton
          btnText={COMMON_CONSTS.CLEAR_ALL}
          styleTxt={styles.buttonTextStyle}
          styleBtn={styles.buttonContainer}
          onPressFunction={() => clearAllClick()}
        /> */}
      </View>
      <View style={styles.filterTextView}>
        <CustomTitleText text={COMMON_CONSTS.FILTER} />
      </View>
      <View>
        <Text style={styles.sortByText}>{COMMON_CONSTS.SORT_BY}</Text>
        <View style={styles.radioView}>
          <RadioForm
            ref={ref}
            radio_props={options}
            initial={selectedValue}
            onPress={value => handleRadioPress(value)}
            buttonColor={'#2196f3'}
            buttonInnerColor={'#2196f3'}
            buttonSize={20}
          />
        </View>
      </View>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
      <View>
        {selectedValue && (
          <CustomButton
            btnText={COMMON_CONSTS.FILTER}
            styleBtn={styles.btnStyle}
            styleTxt={styles.btnTextStyle}
            onPressFunction={() => filterButtonClick()}
          />
        )}
      </View>
    </View>
  );
};

export default Filter;
