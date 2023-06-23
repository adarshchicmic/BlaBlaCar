import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useState, memo, useRef, useEffect} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {SvgDanger, SvgSend} from '../../../assets/svg';
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
import CustomLeavingFromGoingToArrow from '../../../components/CustomLeavingFromGoingToArrow/CustomLeavingFromGoingToArrow';
import {useLazyProfileQuery} from '../../../services/modules/profile';
import {checkMessage, fun} from './utils/checkPrevious';

const ChatScreen = ({navigation, route}) => {
  //   const navigation = route?.params?.navigation;
  const [messages, setMessages] = useState<Array<any>>([]);
  const chats = route?.params?.chat;
  const chat = route?.params?.data;
  const userData = route?.params?.userData;
  const rideData = route?.params?.rideData;

  // const name = 'Adarsh';
  const [currMessage, setCurrMessage] = useState<any>('');
  const [user, setUser] = useState();
  const [sendMessage, {isLoading, isError}] = useSendMessageMutation();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [
    getMessages,
    {isLoading: isLoadingGetMessages, isError: isErrorGetMessages, isSuccess},
  ] = useLazyGetMessagesQuery();
  const [profile, {isLoading: isLoadingUser, isError: isErrorLoading}] =
    useLazyProfileQuery();
  const refTextInput: any = useRef();

  const flatRef: any = useRef();

  useEffect(() => {
    const fun = async () => {
      const result = await getMessages({chatId: chat?.id ?? chats?.id});

      setMessages(result?.data?.messages);
    };
    fun();
    const fun2 = async () => {
      const response = await profile();

      setUser(response?.data?.status?.data?.id);
    };
    fun2();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeText = text => {
    setCurrMessage(text);
  };
  const handleSendMessage = async () => {
    if (currMessage) {
      setMessages([
        ...messages,
        {
          content: currMessage.trim(),
          id: Math.random(),
          created_at: new Date(),
          receiver_id:
            user === userData?.user?.id || user === chat?.receiver?.id
              ? chat?.sender?.id
              : userData?.user?.id ?? chat?.receiver?.id,
        },
      ]);

      const result = await sendMessage({
        chatId: chat?.id,
        content: currMessage.trim(),
        receiverId:
          user === userData?.user?.id || user === chat?.receiver?.id
            ? chat?.sender?.id
            : userData?.user?.id ?? chat?.receiver?.id,
      });

      refTextInput.current.clear();
      flatRef?.current?.scrollToEnd();
    }
  };
  const handleContentSizeChange = () => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatRef.current.scrollToIndex({
          animated: false,
          index: messages.length - 1,
        });
      }, 0);
    }
  };
  return (
    <View>
      <View style={styles.headerView}>
        <CustomBackArrowButton navigation={navigation} />
        <CustomLeavingFromGoingToArrow
          leavingFrom={rideData?.source}
          goingTo={rideData?.destination}
        />
      </View>

      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <View style={styles.container}>
          <View style={styles.flatListView}>
            <FlatList
              onScrollToIndexFailed={() => {}}
              onContentSizeChange={() => handleContentSizeChange()}
              ref={flatRef}
              data={messages}
              renderItem={({item, index}) => (
                <CustomMessage
                  index={index}
                  name={item?.content}
                  side={
                    item?.receiver_id === userData?.user?.id ||
                    item?.receiver_id === chat?.receiver?.id
                      ? 1
                      : 0
                  }
                  date={fun(
                    new Date(item?.created_at).getMonth() +
                      ':' +
                      new Date(item?.created_at).getDate(),
                  )}
                  time={new Date(item?.created_at)}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.dangerView}>
              <SvgDanger
                width={widthPercentageToDP(5)}
                height={heightPercentageToDP(3)}
              />
              <Text style={styles.dangerText}>
                {COMMON_CONSTS.IF_DRIVER_ASK_FOR_DIRECT_MONEY_TRANSFER}
              </Text>
            </View>
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
    </View>
  );
};

export default memo(ChatScreen);
