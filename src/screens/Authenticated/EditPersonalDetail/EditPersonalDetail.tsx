import {View, Text} from 'react-native';
import React, {memo} from 'react';
import CustomButtonEdit from '../../../components/CustomButtonEdit/CustomButtonEdit';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import SvgTextButton from '../../../components/SvgTextButton/SvgTextButton';
import {useSelector} from 'react-redux';

const EditPersonalDetail = ({navigation}: any) => {
  const states: any = useSelector(state => state);
  const userData = states?.profileSlice?.profileData;

  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleOnPressFirstName = () => {
    navigation.navigate('WhatIsYourFirstName');
  };
  const handleOnPressLastName = () => {
    navigation.navigate('WhatIsYourLastName');
  };
  const handleOnPressDob = () => {
    navigation.navigate('WhatIsYourDob');
  };
  const handleOnPressEmail = () => {
    navigation.navigate('WhatIsYourEmail');
  };
  const handleOnPressAddMiniBio = () => {
    navigation.navigate('AddUpdateBio');
  };
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        styleBtn={styles.crossButtonStyle}
        onPressFunction={() => handleCrossButtonPress()}
      />
      <View style={styles?.buttonView}>
        <Text style={styles?.textStyle}>{COMMON_CONSTS?.PERSONAL_DETAILS}</Text>
      </View>
      <View style={styles?.buttonView}>
        <CustomButtonEdit
          first={COMMON_CONSTS?.FIRST_NAME}
          second={userData?.first_name}
          onPressFunction={() => handleOnPressFirstName()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS?.LAST_NAME}
          second={userData?.last_name}
          onPressFunction={() => handleOnPressLastName()}
        />

        <CustomButtonEdit
          first={COMMON_CONSTS.GENDER}
          second={
            userData?.title === COMMON_CONSTS.SIR
              ? COMMON_CONSTS?.MALE
              : COMMON_CONSTS?.FEMALE
          }
          disabled={true}
          textColor={'#000000'}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS?.DATE_OF_BIRTH}
          second={userData?.dob}
          onPressFunction={() => handleOnPressDob()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.EMAIL_ADDRESS}
          second={userData?.email}
          onPressFunction={() => handleOnPressEmail()}
        />
      </View>
      <View style={styles?.addPhoneNumberView}>
        <SvgTextButton text={COMMON_CONSTS?.ADD_PHONE_NUMBER} />
      </View>
      <View style={styles?.addMiniBioView}>
        {userData?.bio === null ? (
          <SvgTextButton
            text={COMMON_CONSTS?.ADD_MINI_BIO}
            onPress={() => handleOnPressAddMiniBio()}
          />
        ) : (
          <Text>{userData?.bio}</Text>
        )}
      </View>
    </View>
  );
};

export default memo(EditPersonalDetail);
