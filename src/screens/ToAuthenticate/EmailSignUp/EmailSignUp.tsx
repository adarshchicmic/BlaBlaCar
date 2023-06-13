import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {useSelector, useDispatch} from 'react-redux';
import {updateEmail} from '../../../store/slices/UserSlice';
import {useEmailExistMutation} from '../../../services/modules/checkEmailExist';

const EmailSignUp = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [emailExist, {isLoading, isError}] = useEmailExistMutation();
  const [showValidationError, setShowValidationError] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  const handleTextChange = value => {
    setEmail(value);
    setValidEmail(COMMON_CONSTS.EMAIL_REGEX.test(value));
  };
  const states = useSelector(state => state);

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = async () => {
    // const res = await emailExist({email: email});
    // console.log(res, 'this is res ');
    if (validEmail) {
      navigation.navigate('FirstNameLastName');
      dispatch(updateEmail({email: email}));
    } else {
      setShowValidationError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={handleBackArrowPress}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_EMAILQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.EMAIL}
          onChangeTextFunction={text => handleTextChange(text)}
        />
        {showValidationError && (
          <Text style={styles.errorTextStyle}>
            {COMMON_CONSTS.ENTER_VALID_EMAIL}
          </Text>
        )}
      </View>

      {email && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow color="red" />
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(EmailSignUp);
