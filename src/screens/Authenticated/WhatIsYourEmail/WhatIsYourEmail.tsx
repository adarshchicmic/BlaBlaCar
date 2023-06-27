import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow} from '../../../assets/svg';
import {useSelector, useDispatch} from 'react-redux';
import {useUpdateProfileMutation} from '../../../services/modules/updateProfile';
import {updateProfileData} from '../../../store/slices/profileSlice';
import {useConfirmEmailMutation} from '../../../services/modules/confirmEmail';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import BlurViews from '../../../components/BlurView/BlurView';
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';

const WhatIsYourEmail = ({navigation, route}: any) => {
  const screen = route?.params?.screen;
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [showValidationError, setShowValidationError] =
    useState<boolean>(false);
  const [
    confirmEmail,
    {isLoading: confirmEmailIsLoading, isError: confirmEmailIsError},
  ] = useConfirmEmailMutation();
  const [
    updateProfile,
    {isLoading: updateProfileIsLoading, isError: updateProfileIsError},
  ] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const states: any = useSelector(state => state);
  const emailValue = states?.profileSlice?.profileData?.email;
  const userDetail = states?.profileSlice?.profileData;

  const handleTextChange = value => {
    setEmail(value);
    setValidEmail(COMMON_CONSTS.EMAIL_REGEX.test(value));
  };

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = async () => {
    if (validEmail) {
      if (screen === 'confirmEmail') {
        const dataa: any = await confirmEmail({
          email: email,
        });
        console.log(dataa, 'this is data');
        // if (dataa?.data?.status?.code === 200) {
        //   dispatch(updateProfileData({profileData: dataa?.data?.status?.data}));
        //   navigation.goBack();
        // }
      } else {
        const dataa: any = await updateProfile({
          email: email,
          firstName: userDetail?.first_name,
          lastName: userDetail?.last_name,
          dob: userDetail?.dob,
          title: userDetail?.title,
          phoneNumber: userDetail?.phone_number,
          bio: userDetail?.bio,
          travelPreferences: userDetail?.travel_preferences,
          postalAddress: userDetail?.postal_address,
        });

        if (dataa?.data?.status?.code === 200) {
          dispatch(updateProfileData({profileData: dataa?.data?.status?.data}));
          navigation.goBack();
        }
      }
    } else {
      setShowValidationError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={handleBackArrowPress}>
        <SvgLeftArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(6)}
          style={styles.arrowStyle}
        />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_EMAILQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.EMAIL}
          onChangeTextFunction={text => handleTextChange(text)}
          defaultValue={emailValue}
        />
        {showValidationError && (
          <Text style={styles.errorTextStyle}>
            {COMMON_CONSTS.ENTER_VALID_EMAIL}
          </Text>
        )}

        {(confirmEmailIsError || updateProfileIsError) && (
          <Text>{COMMON_CONSTS.ERROR_WHILE_UPDATING}</Text>
        )}
      </View>

      {email && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSaveButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
      {(confirmEmailIsLoading || updateProfileIsLoading) && <BlurViews />}
      {(confirmEmailIsLoading || updateProfileIsLoading) && (
        <LoadingIndicator />
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(WhatIsYourEmail);
