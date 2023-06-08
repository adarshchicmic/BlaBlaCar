import {View, Text} from 'react-native';
import React, {memo} from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomGroup from '../../../components/CustomGroup/CustomGroup';
const chat = [
  {
    name: 'Adarsh',
    imageUri: 'djsalfl',
    leavingFrom: 'India',
    goingTo: 'Pakistan',
    time: '01:01',
    data: [
      {
        messageId: 1,
        userName: 'Adarsh',
        message: 'Hiii',
        sendAt: '01:01',
      },
      {
        messageId: 2,
        userName: 'Adarsh',
        message: 'hello',
        sendAt: '01:02',
      },
    ],
  },
  {
    name: 'Pandey',
    imageUri: 'djsalfl',
    leavingFrom: 'Chicmic',
    goingTo: 'Varanasi',
    time: '01:01',
    data: [
      {
        messageId: 1,
        userName: 'Pandey',
        message: 'Hiii',
        sendAt: '01:01',
      },
      {
        messageId: 2,
        userName: 'Pandey',
        message: 'hello',
        sendAt: '01:02',
      },
    ],
  },
];

const Inbox = ({navigation}) => {
  // const name = route?.params?.name;
  // const leavingFrom = route?.params?.leavingFrom;
  // const goingTo = route?.params?.goingTo;
  // const time = route?.params?.time;
  return (
    <View>
      {chat?.length === 0 ? (
        <View>
          <CustomTitleText text={COMMON_CONSTS.INBOX} />
          <View style={styles.textView}>
            <Text>{COMMON_CONSTS.NO_MESSAGES_RIGHT_NOW}</Text>
          </View>
        </View>
      ) : (
        <CustomTitleText text={COMMON_CONSTS.INBOX} />
      )}
      {chat?.map((val, index) => (
        <CustomGroup
          key={index}
          data={val?.data}
          navigation={navigation}
          name={val?.name}
          leavingFrom={val?.leavingFrom}
          goingTo={val?.goingTo}
          time={val?.time}
        />
      ))}
    </View>
  );
};

export default memo(Inbox);
