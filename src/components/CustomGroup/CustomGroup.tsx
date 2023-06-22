import {View, Text, Pressable, ActivityIndicator, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {SvgBlackRightArrow, SvgUser} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import {useLazyGetUserByIdQuery} from '../../services/modules/getUserById';
import {useLazyRideWithPassengerQuery} from '../../services/modules/rideWithPassenger';
import {useLazyProfileQuery} from '../../services/modules/profile';

const CustomGroup = ({navigation, name, leavingFrom, goingTo, time, data}) => {
  const [userData, setUserData] = useState<any>('');
  const [rideData, setRideData] = useState<any>({});
  const [user, setUser] = useState(null);
  const [getUser, {isError}] = useLazyGetUserByIdQuery();

  const [
    rideWithPassenger,
    {isLoading: isLoadingRideWithPassenger, isError: isErrorRideWithPassenger},
  ] = useLazyRideWithPassengerQuery();

  const [profile, {isLoading: isLoadingProfile, isError: isErrorProfile}] =
    useLazyProfileQuery();

  useEffect(() => {
    const fun = async () => {
      const result = await getUser({id: data?.receiver_id});
      const response = await rideWithPassenger({publishId: data?.publish_id});
      console.log(result?.data, response?.data?.data, 'this is result');
      setUserData(result?.data);
      setRideData(response?.data?.data);
      const profileData = await profile();
      setUser(profileData?.data?.status?.data?.id);
      console.log(profileData?.data?.status?.data?.id, 'this is profile data');
    };
    fun();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOnPress = () => {
    navigation.navigate('ChatScreen', {
      navigation: navigation,
      data: data,
      userData: userData,
      rideData: rideData,
    });
  };
  console.log(data, 'this is data data data data ');
  return (
    <Pressable style={styles.container} onPress={() => handleOnPress()}>
      {/* {(isLoading || isLoadingRideWithPassenger) && <ActivityIndicator />} */}
      <Text style={styles.nameTextStyle}>
        {userData?.user?.id === user
          ? data?.sender?.first_name
          : userData?.user?.first_name}
      </Text>
      <View style={styles.textSvgStyle}>
        <View>
          <View style={styles.goingFromLeavingToStyle}>
            <Text style={styles.locationTextStyle}>
              {rideData?.source?.slice(0, 30)}
            </Text>
            <SvgBlackRightArrow
              width={widthPercentageToDP(5)}
              height={heightPercentageToDP(2)}
              style={styles.svgStyle}
            />

            <Text style={styles.locationTextStyle}>
              {rideData?.destination?.slice(0, 30)}
            </Text>
          </View>
          <Text>{time}</Text>
        </View>
        <View style={styles.svgArrowStyle}>
          {userData?.image_url ? (
            <Image
              source={{
                uri:
                  userData?.user?.id === user
                    ? data?.sender_image
                    : data?.receiver_image,
              }}
              style={styles.imageStyle}
            />
          ) : (
            <SvgUser
              width={widthPercentageToDP(7)}
              height={heightPercentageToDP(3)}
              style={styles.svgStyle}
            />
          )}
          {/* <Text style={styles.textArrowStyle}>{COMMON_CONSTS.ARROW}</Text> */}
        </View>
      </View>
    </Pressable>
  );
};

export default CustomGroup;
