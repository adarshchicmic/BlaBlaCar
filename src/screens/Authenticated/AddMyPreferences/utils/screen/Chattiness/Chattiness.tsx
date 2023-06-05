import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../../../../shared/Constants/Constants';
import styles from './styles';
import RadioForm from 'react-native-simple-radio-button';
import {useDispatch} from 'react-redux';
import {updateChattiness} from '../../../../../../store/slices/travelPreferences';

const Chattiness = ({navigation}) => {
  const [buttonSelected, setSelectedButton] = useState<string>('');
  const dispatch = useDispatch();
  const options = [
    {label: COMMON_CONSTS.I_LOVE_TO_CHAT, value: COMMON_CONSTS.I_LOVE_TO_CHAT},
    {
      label: COMMON_CONSTS.IAM_CHATTY_WHEN_I_FEEL_COMFORTABLE,
      value: COMMON_CONSTS.IAM_CHATTY_WHEN_I_FEEL_COMFORTABLE,
    },
    {
      label: COMMON_CONSTS.IM_THE_QUITE_TYPE,
      value: COMMON_CONSTS.IM_THE_QUITE_TYPE,
    },
  ];
  const handleRadioPress = value => {
    setSelectedButton(value);
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = () => {
    navigation.goBack();
    dispatch(updateChattiness({chattiness: buttonSelected}));
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.CHATTINESS}</Text>
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

export default memo(Chattiness);
