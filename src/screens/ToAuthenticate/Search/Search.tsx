import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {SvgCalender, SvgCircle, SvgSwap, SvgUser} from '../../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {swapLocation} from '../../../store/slices/rideSlice';

const Search = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const numberOfSeat: any = useSelector(state => state);
  const handleleavingFromPress = () => {
    navigation.navigate('Location', {screen: COMMON_CONSTS.LEAVING_FROM});
  };
  const handleGoingToPress = () => {
    navigation.navigate('Location', {screen: COMMON_CONSTS.GOING_TO});
  };
  return (
    <ScrollView>
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../../../assets/images/search.jpg')}>
        <View style={styles.textUpperViewStyle}>
          <Text style={styles.textUpperStyle}>
            {COMMON_CONSTS.YOUR_PICK_OF_RIDES_AT}
          </Text>
          <Text style={styles.textUpperStyle}>{COMMON_CONSTS.LOW_PRICES}</Text>
        </View>
      </ImageBackground>
      {isFocused && (
        <View style={styles.searchViewStyle}>
          {numberOfSeat?.rideSlice?.leavingFrom !==
            COMMON_CONSTS.LEAVING_FROM &&
            numberOfSeat?.rideSlice?.goingTo !== COMMON_CONSTS.GOING_TO && (
              <TouchableOpacity
                style={styles.swapView}
                onPress={() => dispatch(swapLocation())}>
                <SvgSwap width={25} height={25} />
              </TouchableOpacity>
            )}
          <Pressable
            style={styles.continueWithEmailView(0)}
            onPress={() => handleleavingFromPress()}>
            <SvgCircle width={15} height={15} style={styles.svgStyle} />
            <Text style={styles.continueWithEmail}>
              {(numberOfSeat?.rideSlice?.leavingFrom).slice(0, 20)}
            </Text>
          </Pressable>
          <Pressable
            style={styles.continueWithEmailView(0)}
            onPress={() => handleGoingToPress()}>
            <SvgCircle width={15} height={15} style={styles.svgStyle} />
            <Text style={styles.continueWithEmail}>
              {(numberOfSeat?.rideSlice?.goingTo).slice(0, 25)}
            </Text>
          </Pressable>
          <View style={styles.dateAndUserView}>
            <Pressable
              style={styles.continueWithEmailView(1)}
              onPress={() => navigation.navigate('DatePicker')}>
              <SvgCalender width={15} height={15} style={styles.svgStyle} />
              <Text style={styles.numberStyle}>
                {numberOfSeat?.rideSlice?.date}
              </Text>
            </Pressable>
            <View style={styles.userViewStyle}>
              <Pressable onPress={() => navigation.navigate('NumberOfSeats')}>
                <View style={styles.profileNumberStyle}>
                  <SvgUser width={15} height={15} style={styles.svgStyle} />
                  <Text style={styles.numberStyle}>
                    {numberOfSeat?.rideSlice?.numberOfSeats}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          {/* <DatePicker onPress={date => console.log('date', date)} /> */}
          <CustomButton
            btnText={COMMON_CONSTS.SEARCH}
            styleBtn={styles.buttonStyle}
            styleTxt={styles.buttonTextStyle}
          />
        </View>
      )}
      <View style={styles.addressView}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
      </View>
    </ScrollView>
  );
};

export default Search;
