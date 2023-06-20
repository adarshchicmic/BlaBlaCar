import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  FlatList,
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
import {hasProxies} from 'immer/dist/internal';

const ChatScreen = ({navigation, route}) => {
  //   const navigation = route?.params?.navigation;
  const [messages, setMessages] = useState<Array<any>>([]);
  const chat = route?.params?.data;
  // const name = 'Adarsh';
  const [currMessage, setCurrMessage] = useState<any>('');
  const [sendMessage, {isLoading, isError}] = useSendMessageMutation();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [
    getMessages,
    {isLoading: isLoadingGetMessages, isError: isErrorGetMessages},
  ] = useLazyGetMessagesQuery();
  const refTextInput: any = useRef();
  console.log(refTextInput, 'this is ref');
  console.log(refTextInput?.current?.isFocused(), 'this ref');

  useEffect(() => {
    const fun = async () => {
      console.log(chat?.id, 'this is chat id ');
      const result = await getMessages({chatId: chat?.id});
      setMessages(result?.data?.messages);
      console.log(result?.data?.messages, 'this is result for messages');
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setIsFocused(refTextInput?.current?.isFocused());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refTextInput?.current]);

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
      console.log(chat?.receiver_id, 'this is receiver id ');
      console.log(result, chat, 'this is result for chatId');
      refTextInput.current.clear();
    }
  };
  return (
    <KeyboardAvoidingView>
      <CustomBackArrowButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.flatListView}>
          <FlatList
            inverted={true}
            data={messages}
            renderItem={({item}) => (
              <CustomMessage name={item?.content} side={1} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.textInputView}>
          <TouchableOpacity
            style={styles.svgSendStyle}
            onPress={() => handleSendMessage()}>
            <SvgSend
              width={widthPercentageToDP(8)}
              height={heightPercentageToDP(6)}
            />
          </TouchableOpacity>
          <TextInput
            ref={refTextInput}
            onChangeText={text => handleChangeText(text)}
            placeholder={COMMON_CONSTS.YOUR_MESSAGE}
            style={styles.textInputStyle}
            multiline={true}
          />
        </View>
        {(isLoadingGetMessages || isLoading) && <ActivityIndicator />}
        {isErrorGetMessages && <Text>{COMMON_CONSTS.ERROR}</Text>}
      </View>
    </KeyboardAvoidingView>
  );
};

export default memo(ChatScreen);

// <KeyboardAvoidingView style={styles.container}>
//       <ScrollView style={{flexGrow: 1}}>
//         <View style={styles.backArrowView(isFocused)}>
//           <CustomBackArrowButton navigation={navigation} />
//         </View>
//         {/* <ScrollView>
//         {chat?.map((val, index) => (
//           <CustomMessage key={index} name={val?.message} side={0} />
//         ))}
//         {messages?.map((val, index) => (
//           <CustomMessage key={index} name={val} side={1} />
//         ))}
//       </ScrollView> */}
//         <View style={styles.textInputView}>
//           <TouchableOpacity
//             style={styles.svgSendStyle}
//             onPress={() => handleSendMessage()}>
//             <SvgSend
//               width={widthPercentageToDP(8)}
//               height={heightPercentageToDP(6)}
//             />
//           </TouchableOpacity>
//           <TextInput
//             ref={ref}
//             onChangeText={text => handleChangeText(text)}
//             placeholder={COMMON_CONSTS.YOUR_MESSAGE}
//             style={styles.textInputStyle}
//             multiline={true}
//           />
//         </View>
//         {(isLoading || isLoadingGetMessages) && <ActivityIndicator />}
//         {(isError || isErrorGetMessages) && <Text>{COMMON_CONSTS.ERROR}</Text>}
//       </ScrollView>
//     </KeyboardAvoidingView>
