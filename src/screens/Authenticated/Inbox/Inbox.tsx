import {View, Text} from 'react-native';
import React, {memo} from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';

const Inbox = () => {
  return (
    <View>
      <CustomTitleText text={COMMON_CONSTS.INBOX} />
      <View style={styles.textView}>
        <Text>{COMMON_CONSTS.NO_MESSAGES_RIGHT_NOW}</Text>
      </View>
    </View>
  );
};

export default memo(Inbox);
