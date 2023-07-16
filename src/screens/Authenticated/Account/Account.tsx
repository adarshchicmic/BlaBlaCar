import {View, ScrollView, SafeAreaView} from 'react-native';
import React, {memo, useState} from 'react';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useSignOutMutation} from '../../../services/modules/signOut';
import {useDispatch} from 'react-redux';
import {updateToken} from '../../../store/slices/UserSlice';
import {destroy} from '../../../store/slices/searchSlice';

import CustomModal from '../../../components/CustomModal/CustomModal';
import BlurViews from '../../../components/BlurView/BlurView';
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';

const Account = ({navigation}) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [signOut, {isLoading: isLoadingSignOut}]: any = useSignOutMutation();

  const handleLogoutPress = () => {
    setModalIsVisible(true);
  };
  const handleModalClickYes = async () => {
    const dataa = await signOut();
    dataa?.data?.status === 200 ? dispatch(updateToken({token: ''})) : null;
    dispatch(updateToken({token: ''}));
    dispatch(destroy());
    setModalIsVisible(false);
  };
  const handleModalClickNo = () => {
    setModalIsVisible(false);
  };
  const handleChangePasswordPress = () => {
    navigation.navigate('ChangePassword');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
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

        <CustomButton
          btnText={COMMON_CONSTS.LOG_OUT}
          styleTxt={styles.logoutTextStyle}
          onPressFunction={() => handleLogoutPress()}
        />
      </ScrollView>
      <CustomModal
        isVisible={modalIsVisible}
        onPressYes={() => handleModalClickYes()}
        onPressNo={() => handleModalClickNo()}
      />
      {/* <Modal isVisible={modalIsVisible}>
        <View style={styles.modalViewStyle}>
          <Text style={styles.modalTextStyle}> klfdsjlk;j;l</Text>
          <TouchableOpacity>
            <Text>{COMMON_CONSTS.CONTINUE}</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
      {isLoadingSignOut && <BlurViews />}
      {isLoadingSignOut && <LoadingIndicator />}
    </SafeAreaView>
  );
};

export default memo(Account);
