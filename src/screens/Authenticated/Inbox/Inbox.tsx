import {View, Text, ScrollView} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomGroup from '../../../components/CustomGroup/CustomGroup';
import {useLazyGetChatQuery} from '../../../services/modules/getChatRoom';
import {useIsFocused} from '@react-navigation/native';
import BlurViews from '../../../components/BlurView/BlurView';
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';

const Inbox = ({navigation}) => {
  // const name = route?.params?.name;
  // const leavingFrom = route?.params?.leavingFrom;
  // const goingTo = route?.params?.goingTo;
  // const time = route?.params?.time;
  const [chats, setChats] = useState<any>([]);
  const [getChat, {isLoading, isError}] = useLazyGetChatQuery();

  const focus = useIsFocused();
  useEffect(() => {
    const fun = async () => {
      const result = await getChat();
      setChats(result?.data?.chats);
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);
  return (
    <ScrollView>
      {chats?.length === 0 ? (
        <View>
          <CustomTitleText text={COMMON_CONSTS.INBOX} />
          <View style={styles.textView}>
            <Text>{COMMON_CONSTS.NO_MESSAGES_RIGHT_NOW}</Text>
          </View>
        </View>
      ) : (
        <CustomTitleText text={COMMON_CONSTS.INBOX} />
      )}
      {isError && (
        <Text style={styles.errorStyle}>
          {COMMON_CONSTS.ERROR_WHILE_LOADING_DATA}
        </Text>
      )}
      {chats?.map((val, index) => (
        <CustomGroup
          key={index}
          data={val}
          navigation={navigation}
          name={val?.name}
          leavingFrom={val?.leavingFrom}
          goingTo={val?.goingTo}
          time={val?.time}
        />
      ))}
      {isLoading && <BlurViews />}
      {isLoading && <LoadingIndicator />}
    </ScrollView>
  );
};

export default memo(Inbox);
