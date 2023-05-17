import {View, Text} from 'react-native';
import React from 'react';
import CustomButtonEdit from '../../../components/CustomButtonEdit/CustomButtonEdit';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import SvgTextButton from '../../../components/SvgTextButton/SvgTextButton';
import {useSelector} from 'react-redux';

const EditPersonalDetail = ({navigation}: any) => {
  const states: any = useSelector(state => state);
  const userData = states?.profileSlice?.profileData;
  console.log(states?.profileSlice?.profileData, 'this is states');
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleOnPressFirstName = () => {
    navigation.navigate('WhatIsYourFirstName');
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
        />

        <CustomButtonEdit
          first={COMMON_CONSTS.GENDER}
          second={
            userData.title === COMMON_CONSTS.SIR
              ? COMMON_CONSTS?.MALE
              : COMMON_CONSTS?.FEMALE
          }
          disabled={true}
          textColor={'#000000'}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS?.DATE_OF_BIRTH}
          second={userData.dob}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.EMAIL_ADDRESS}
          second={userData?.email}
        />
      </View>
      <View style={styles.addPhoneNumberView}>
        <SvgTextButton text={COMMON_CONSTS.ADD_PHONE_NUMBER} />
      </View>
      <View style={styles.addMiniBioView}>
        <SvgTextButton text={COMMON_CONSTS.ADD_MINI_BIO} />
      </View>
    </View>
  );
};

export default EditPersonalDetail;
