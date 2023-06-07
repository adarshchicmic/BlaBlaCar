import {View} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
// import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import styles from './styles';

const RidePlan = ({navigation}) => {
  const handleEditYourPublicationPress = () => {
    navigation.navigate('EditYourPublication');
  };
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.RIDE_PLANS} />
      {/* <CustomSearchResult /> */}
      <View style={styles.buttonView}>
        <NameArrowButton
          name={COMMON_CONSTS.EDIT_YOUR_PUBLICATION}
          onPressFunction={() => handleEditYourPublicationPress()}
        />
      </View>
    </View>
  );
};

export default RidePlan;
