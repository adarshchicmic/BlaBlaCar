import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useState, memo, useRef, useEffect} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {SvgSend} from '../../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './styles';
// import {chat} from '../../../store/chat';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomMessage from '../../../components/CustomMessage/CustomMessage';
import {useSendMessageMutation} from '../../../services/modules/sendMessage';
import {useLazyGetMessagesQuery} from '../../../services/modules/getMessages';

const ChatScreen = ({navigation, route}) => {
  //   const navigation = route?.params?.navigation;
  const [messages, setMessages] = useState<Array<string>>([]);
  const chat = route?.params?.chat;
  // const name = 'Adarsh';
  const [currMessage, setCurrMessage] = useState<string>('');
  const [sendMessage, {isLoading, isError}] = useSendMessageMutation();
  const [
    getMessages,
    {isLoading: isLoadingGetMessages, isError: isErrorGetMessages},
  ] = useLazyGetMessagesQuery();
  const ref: any = useRef();

  useEffect(() => {
    const fun = async () => {
      console.log(chat?.id, 'this is chat id ');
      const result = await getMessages({chatId: chat?.id});
      console.log(result, 'this is result for messages');
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeText = text => {
    setCurrMessage(text);
  };
  const handleSendMessage = async () => {
    if (currMessage) {
      setMessages([...messages, currMessage]);

      const result = await sendMessage({
        chatId: chat?.id,
        content: currMessage,
        receiverId: chat?.receiver_id,
      });
      console.log(result, 'this is result for chatId');
      ref.current.clear();
    }
  };
  return (
    <View style={styles.container}>
      <CustomBackArrowButton navigation={navigation} />

      <ScrollView>
        {chat?.map((val, index) => (
          <CustomMessage key={index} name={val?.message} side={0} />
        ))}
        {messages?.map((val, index) => (
          <CustomMessage key={index} name={val} side={1} />
        ))}
      </ScrollView>
      <View style={styles.textInputView}>
        <TouchableOpacity
          style={styles.svgSendStyle}
          onPress={() => handleSendMessage()}>
          <SvgSend
            width={widthPercentageToDP(8)}
            height={heightPercentageToDP(4)}
          />
        </TouchableOpacity>
        <TextInput
          ref={ref}
          onChangeText={text => handleChangeText(text)}
          placeholder={COMMON_CONSTS.YOUR_MESSAGE}
          style={styles.textInputStyle}
          multiline={true}
        />
      </View>
      {(isLoading || isLoadingGetMessages) && <ActivityIndicator />}
      {(isError || isErrorGetMessages) && <Text>{COMMON_CONSTS.ERROR}</Text>}
    </View>
  );
};

export default memo(ChatScreen);
