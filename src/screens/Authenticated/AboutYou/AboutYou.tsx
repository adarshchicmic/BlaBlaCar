import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SvgProfile} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import SvgTextButton from '../../../components/SvgTextButton/SvgTextButton';

const AboutYou = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileDetailContainer}>
        <View style={styles.nameSvgStyle}>
          <View style={styles.nameView}>
            <Text style={styles.nameStyle}>{'Adarsh'}</Text>
            <Text style={styles.nameBesideTextStyle}> {'fkdsj'}</Text>
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
        />
      </View>
      <View style={styles.verifyYourProfileViewMain}>
        <View style={styles.verifyYourProfileView}>
          <Text style={styles.titleStyle}>
            {COMMON_CONSTS.VERIFY_YOUR_PROFILE}
          </Text>
          <SvgTextButton text={COMMON_CONSTS.VERIFY_MY_ID} />
          <SvgTextButton text={COMMON_CONSTS.CONFIRM_EMAIL} />
          <SvgTextButton text={COMMON_CONSTS.CONFIRM_PHONE_NUMBER} />
        </View>
      </View>
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
