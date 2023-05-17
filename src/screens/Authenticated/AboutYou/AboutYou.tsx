import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SvgProfile} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import SvgTextButton from '../../../components/SvgTextButton/SvgTextButton';
import {useLazyProfileQuery} from '../../../services/modules/profile';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateProfileData} from '../../../store/slices/profileSlice';

const AboutYou = ({navigation}: any) => {
  const [userDetail, setUserDetail] = useState<any>({});
  const [profile, {isLoading, isError}]: any = useLazyProfileQuery();
  const focus = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await profile();
      setUserDetail(userData?.data?.status?.data);
      dispatch(updateProfileData({profileData: userData?.data?.status?.data}));
    };
    fetchUserData();
  }, [profile, focus, dispatch]);

  const handleEditProfileDetail = () => {
    navigation.navigate('EditPersonalDetail');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileDetailContainer}>
        <View style={styles.nameSvgStyle}>
          <View style={styles.nameView}>
            <Text style={styles.nameStyle}>{userDetail?.first_name}</Text>
            <Text style={styles.nameBesideTextStyle}>
              {' '}
              {COMMON_CONSTS.NEWCOMER}
            </Text>
          </View>
          <View style={styles.svgArrowStyle}>
            <SvgProfile width={'100'} height={'100'} />
            <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
          </View>
        </View>
        <CustomButton
          btnText={COMMON_CONSTS.EDIT_PROFILE_PICTURE}
          styleTxt={styles.buttonTextStyle}
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
          />
          <SvgTextButton
            text={COMMON_CONSTS.CONFIRM_PHONE_NUMBER}
            extra={userDetail?.phone_number}
          />
        </View>
      </View>
      {isLoading && <ActivityIndicator />}
      {isError && alert('error while loading your personal data')}
      <View style={styles.profileDetailContainer}>
        <Text style={styles.titleStyle}>{COMMON_CONSTS.ABOUT_YOU}</Text>
        <SvgTextButton text={COMMON_CONSTS.ADD_MINI_BIO} />
        <SvgTextButton text={COMMON_CONSTS.ADD_MY_PREFERENCES} />
      </View>
      <View style={styles.profileDetailContainer}>
        <Text style={styles.titleStyle}> {COMMON_CONSTS.VEHICLES}</Text>
        <SvgTextButton text={COMMON_CONSTS.ADD_VEHICLE} />
      </View>
    </ScrollView>
  );
};

export default AboutYou;
