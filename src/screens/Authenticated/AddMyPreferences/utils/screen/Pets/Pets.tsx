import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../../../../shared/Constants/Constants';
import styles from './styles';
import RadioForm from 'react-native-simple-radio-button';

const Pets = ({navigation}) => {
  const [buttonSelected, setSelectedButton] = useState<string>('');
  const options = [
    {
      label: COMMON_CONSTS.PETS_WELCOME_WOOFA,
      value: COMMON_CONSTS.PETS_WELCOME_WOOFA,
    },
    {
      label: COMMON_CONSTS.I_LL_TRAVEL_WITH_PETS_DEPENDING_ON_THE_ANIMALS,
      value: COMMON_CONSTS.I_LL_TRAVEL_WITH_PETS_DEPENDING_ON_THE_ANIMALS,
    },
    {
      label: COMMON_CONSTS.SORRY_NOT_A_PET_PERSON,
      value: COMMON_CONSTS.SORRY_NOT_A_PET_PERSON,
    },
  ];
  const handleRadioPress = value => {
    console.log(value);
    setSelectedButton(value);
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = () => {
    navigation.goBack();
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.PETS}</Text>
      </View>
      <View style={styles.buttonViewMore}>
        <RadioForm
          radio_props={options}
          initial={buttonSelected}
          onPress={value => handleRadioPress(value)}
          buttonColor={'#2196f3'}
          buttonInnerColor={'#2196f3'}
          buttonSize={20}
        />
      </View>
      {buttonSelected && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSaveButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Pets;
