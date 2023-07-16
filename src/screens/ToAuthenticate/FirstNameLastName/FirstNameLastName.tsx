import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {useDispatch} from 'react-redux';
import {updateName} from '../../../store/slices/UserSlice';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const FirstNameLastName = ({navigation}: any) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [validFirstName, setValidFirstName] = useState<boolean>(false);
  const [validLastName, setValidLastName] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(true);
  const dispatch = useDispatch();
  const handleFirstNameChange = value => {
    setFirstName(value.trim());
    setValidFirstName(COMMON_CONSTS.NAME_REGEX.test(value.trim()));
    if (!showError) {
      setShowError(true);
    }
  };
  const handleLastNameChange = value => {
    setLastName(value.trim());
    setValidLastName(COMMON_CONSTS.NAME_REGEX.test(value.trim()));
    if (!showError) {
      setShowError(true);
    }
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = () => {
    setShowError(validFirstName && validLastName);
    firstName && lastName && validFirstName && validLastName
      ? (dispatch(updateName({firstName: firstName, lastName: lastName})),
        navigation.navigate('DateOfBirth'))
      : null;
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(6)}
          style={styles.arrowStyle}
        />
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_NAMEQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.FIRST_NAME}
          onChangeTextFunction={text => handleFirstNameChange(text)}
        />
        <View>
          <CustomTextInput
            styleInputText={styles.textInputStyle}
            inputTextPlaceholder={COMMON_CONSTS.LAST_NAME}
            placeholderTextColor={'#969693'}
            onChangeTextFunction={text => handleLastNameChange(text)}
          />
        </View>
      </View>
      {!showError && (
        <Text style={styles.errorStyle}>{COMMON_CONSTS.NAME_WARN}</Text>
      )}
      {firstName && lastName && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyleArrow}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow color="red" />
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(FirstNameLastName);
