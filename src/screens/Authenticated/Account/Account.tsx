import {View, ScrollView, ActivityIndicator, SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useSignOutMutation} from '../../../services/modules/signOut';
import {useDispatch} from 'react-redux';
import {updateToken} from '../../../store/slices/UserSlice';

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const [signOut, {isLoading: isLoadingSignOut}]: any = useSignOutMutation();

  const handleLogoutPress = async () => {
    const dataa = await signOut();
    dataa?.data?.status === 200 ? dispatch(updateToken({token: ''})) : null;
    dispatch(updateToken({token: ''}));
  };
  const handleChangePasswordPress = () => {
    navigation.navigate('ChangePassword');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <NameArrowButton name={COMMON_CONSTS.RATING} />
        </View>
        <View style={styles.buttonContainer}>
          <NameArrowButton name={COMMON_CONSTS.NOTIFICATION_EMAIL_AND_SMS} />
          <NameArrowButton
            name={COMMON_CONSTS.CHANGE_PASSWORD}
            onPressFunction={() => handleChangePasswordPress()}
          />
          <NameArrowButton name={COMMON_CONSTS.POSTAL_ADDRESS} />
        </View>
        <View style={styles.buttonContainer}>
          <NameArrowButton name={COMMON_CONSTS.AVAILABLE_FUNDS} />
          <NameArrowButton name={COMMON_CONSTS.BANK_DETAILS} />
          <NameArrowButton name={COMMON_CONSTS.PAYMENT_AND_REFUNDS} />
        </View>
        <View style={styles.buttonContainer}>
          <NameArrowButton name={COMMON_CONSTS.HELP} />
          <NameArrowButton name={COMMON_CONSTS.TERMS_AND_CONDITIONS} />
          <NameArrowButton name={COMMON_CONSTS.DATA_PROTECTION} />
          <NameArrowButton name={COMMON_CONSTS.LICENSES} />
        </View>
        {isLoadingSignOut && <ActivityIndicator />}
        <CustomButton
          btnText={COMMON_CONSTS.LOG_OUT}
          styleTxt={styles.logoutTextStyle}
          onPressFunction={() => handleLogoutPress()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Account);
