import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import styles from './styles';
import {useLazyGetMessagesQuery} from '../../../services/modules/getMessages';

const Chat = ({navigation, route}) => {
  const data = route?.params?.data;
  console.log(data, 'this is data');
  const [messages, setMessages] = useState<any>([]);
  const [message, {isLoading, isError}] = useLazyGetMessagesQuery();

  useEffect(() => {
    const fun = async () => {
      const result = await message({chatId: data?.id});
      console.log(result, 'this is result ');
      setMessages(result);
    };
    fun();

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <CustomBackArrowButton navigation={navigation} />
      {/*
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <ScrollView style={styles.keyboardAvoidingStyle}> */}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {/* </ScrollView>
      </KeyboardAvoidingView> */}
    </View>
  );
};

export default Chat;
