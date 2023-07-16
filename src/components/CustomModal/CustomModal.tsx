import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';

const CustomModal = ({
  isVisible,
  onPressYes = () => {},
  onPressNo = () => {},
}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.modalViewStyle}>
          <Text style={styles.modalTextStyle}>
            {COMMON_CONSTS.ARE_YOU_SURE}
          </Text>
          <View style={styles.yesNoButtonView}>
            <TouchableOpacity onPress={onPressYes}>
              <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.YES}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNo}>
              <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.NO}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
