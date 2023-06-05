import {
  View,
  Text,
  ActivityIndicator,
  Image,
  SafeAreaView,
  ToastAndroid,
  Platform,
} from 'react-native';
import React, {useEffect, useState, memo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SvgProfile} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import SvgTextButton from '../../../components/SvgTextButton/SvgTextButton';
import {useLazyProfileQuery} from '../../../services/modules/profile';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateImage,
  updateProfileData,
} from '../../../store/slices/profileSlice';
import {useLazyVehiclesQuery} from '../../../services/modules/GetAllVehicles';
import CustomVehicleComponent from '../../../components/CustomVehicleComponent/CustomVehicleComponent';

const AboutYou = ({navigation}: any) => {
  const [userDetail, setUserDetail] = useState<any>({});
  const [vehicleData, setVehicleData] = useState<any>({});
  const [profile, {isLoading, isError}]: any = useLazyProfileQuery();
  const [vehicle, {isLoading: isLadingVehicle}]: any = useLazyVehiclesQuery();

  const focus = useIsFocused();
  const dispatch = useDispatch();
  const states: any = useSelector(state => state);
  const imageUri = states?.profileSlice?.image;
  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await profile();

      userData?.data?.status?.data
        ? (setUserDetail(userData?.data?.status?.data),
          dispatch(
            updateProfileData({profileData: userData?.data?.status?.data}),
          ),
          dispatch(updateImage({image: userData?.data?.status?.image_url})))
        : null;
      const vehiclesData = await vehicle();
      setVehicleData(vehiclesData);
    };
    fetchUserData();
    isError &&
      Platform.OS === 'android' &&
      ToastAndroid.show('Error while fetching data', ToastAndroid.SHORT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);

  const handleEditProfileDetail = () => {
    navigation.navigate('EditPersonalDetail');
  };
  const handleOnPressAddVehicle = () => {
    navigation.navigate('LicensePlateNumber', {
      screen: COMMON_CONSTS.ABOUT_YOU,
    });
  };
  const handleConfirmEmail = () => {
    navigation.navigate('WhatIsYourEmail', {screen: 'confirmEmail'});
  };
  const handleAddMiniBio = () => {
    navigation.navigate('AddUpdateBio');
  };
  const handleAddMyPreferences = () => {
    navigation.navigate('AddMyPreferences');
  };
  const handleEditProfilePicturePress = () => {
    navigation.navigate('EditProfilePicture');
  };
  // const showToast = () => {
  //   let val = false;
  //   val === false
  //     ? ((val = true), ToastAndroid.show('Error while fetching data', 1))
  //     : null;
  //   console.log('render');
  // };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.profileDetailContainer}>
          <View style={styles.nameSvgStyle}>
            <View style={styles.nameView}>
              <Text style={styles.nameStyle}>{userDetail?.first_name}</Text>
              <Text style={styles.nameBesideTextStyle}>
                {COMMON_CONSTS.NEWCOMER}
              </Text>
            </View>
            <View style={styles.svgArrowStyle}>
              {imageUri ? (
                <View>
                  <Image style={styles.imageStyle} source={{uri: imageUri}} />
                </View>
              ) : (
                <SvgProfile width={'100'} height={'100'} />
              )}
              <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
            </View>
          </View>
          <CustomButton
            btnText={COMMON_CONSTS.EDIT_PROFILE_PICTURE}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handleEditProfilePicturePress()}
          />
          <CustomButton
            btnText={COMMON_CONSTS.EDIT_PERSONAL_DETAILS}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handleEditProfileDetail()}
          />
        </View>
        <View style={styles.verifyYourProfileViewMain}>
          <View style={styles.verifyYourProfileView}>
            <Text style={styles.titleStyle}>
              {COMMON_CONSTS.VERIFY_YOUR_PROFILE}
            </Text>
            <SvgTextButton text={COMMON_CONSTS.VERIFY_MY_ID} />
            <SvgTextButton
              text={COMMON_CONSTS.CONFIRM_EMAIL}
              extra={userDetail?.email}
              onPress={() => handleConfirmEmail()}
            />
            <SvgTextButton
              text={COMMON_CONSTS.CONFIRM_PHONE_NUMBER}
              extra={userDetail?.phone_number}
            />
          </View>
        </View>
        {(isLoading || isLadingVehicle) && <ActivityIndicator />}
        {/* {isError && showToast()} */}
        <View style={styles.profileDetailContainer}>
          <Text style={styles.titleStyle}>{COMMON_CONSTS.ABOUT_YOU}</Text>
          <SvgTextButton
            text={COMMON_CONSTS.ADD_MINI_BIO}
            onPress={() => handleAddMiniBio()}
          />
          <SvgTextButton
            text={COMMON_CONSTS.ADD_MY_PREFERENCES}
            onPress={() => handleAddMyPreferences()}
          />
        </View>
        <View style={styles.profileDetailContainer}>
          <Text style={styles.titleStyle}> {COMMON_CONSTS.VEHICLES}</Text>
          <View style={styles.vehicleView}>
            {vehicleData.isSuccess
              ? vehicleData?.data?.data.map((vehicle, i) => (
                  <CustomVehicleComponent
                    navigation={navigation}
                    key={i}
                    vehicleName={vehicle?.vehicle_name}
                    vehicleColor={vehicle?.vehicle_color}
                    show={true}
                    vehicleId={vehicle?.id}
                  />
                ))
              : null}
          </View>
          <SvgTextButton
            text={COMMON_CONSTS.ADD_VEHICLE}
            onPress={() => handleOnPressAddVehicle()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(AboutYou);
