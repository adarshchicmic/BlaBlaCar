import {View, Text} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomButtonEdit from '../../../components/CustomButtonEdit/CustomButtonEdit';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import styles from './styles';
import CustomLeavingFromGoingToButton from '../../../components/CustomLeavingFromGoingToButton/CustomLeavingFromGoingToButton';

const ItineraryDetails = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomBackArrowButton navigation={navigation} />
      </View>
      <CustomTitleText text={COMMON_CONSTS.ITINERARY_DETAILS} />
      <View style={styles.buttonView}>
        <CustomButtonEdit
          first={COMMON_CONSTS.DATE}
          second={COMMON_CONSTS.TIMES}
          textColor={'#000000'}
          firstStyle={{color: '#000'}}
          secondStyle={{color: '#91908d'}}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.DATE}
          second={COMMON_CONSTS.TIMES}
          textColor={'#000000'}
          firstStyle={{color: '#000'}}
          secondStyle={{color: '#91908d'}}
        />
        <CustomLeavingFromGoingToButton />
      </View>
    </View>
  );
};

export default ItineraryDetails;
