import {View} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';

const EditYourPublication = ({navigation}) => {
  const handleEditYourPublicationPress = () => {
    navigation.navigate('ItineraryDetails');
  };
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.EDIT_YOUR_PUBLICATION} />

      <View style={styles.buttonView}>
        <NameArrowButton
          name={COMMON_CONSTS.ITINERARY_DETAILS}
          onPressFunction={() => handleEditYourPublicationPress()}
        />
        <NameArrowButton name={COMMON_CONSTS.PRICE} />
        <NameArrowButton name={COMMON_CONSTS.SEAT_AND_OPTIONS} />
      </View>
      <CustomButton
        btnText={COMMON_CONSTS.CANCEL_YOUR_RIDE}
        styleTxt={styles.btnTextStyle}
      />
      <CustomButton
        btnText={COMMON_CONSTS.DUPLICATE_YOUR_PUBLICATION}
        styleTxt={styles.btnTextStyle}
      />
      <CustomButton
        btnText={COMMON_CONSTS.PUBLISH_YOUR_RETURN_RIDE}
        styleTxt={styles.btnTextStyle}
      />
    </View>
  );
};

export default EditYourPublication;
