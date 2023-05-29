import {View, Text} from 'react-native';
import React, {memo} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButtonEdit from '../../../components/CustomButtonEdit/CustomButtonEdit';
import {useSelector} from 'react-redux';

const AddMyPreferences = ({navigation}) => {
  const states: any = useSelector(state => state);
  const preferences: any = states?.preferencesSlice;
  console.log(states, 'this is states');
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleChattinessPress = () => {
    navigation.navigate('Chattiness');
  };
  const handleMusicPress = () => {
    navigation.navigate('Music');
  };
  const handleSmokingPress = () => {
    navigation.navigate('Smoking');
  };
  const handlePetsPress = () => {
    navigation.navigate('Pets');
  };
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        styleBtn={styles.crossButtonStyle}
        onPressFunction={() => handleCrossButtonPress()}
      />
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.TRAVEL_PREFERENCES}</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButtonEdit
          first={COMMON_CONSTS.CHATTINESS}
          second={preferences?.chattiness}
          onPressFunction={() => handleChattinessPress()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.MUSIC}
          second={preferences?.music}
          onPressFunction={() => handleMusicPress()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.SMOKING}
          second={preferences?.smoking}
          onPressFunction={() => handleSmokingPress()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.PETS}
          second={preferences?.pets}
          onPressFunction={() => handlePetsPress()}
        />
      </View>
    </View>
  );
};

export default memo(AddMyPreferences);
