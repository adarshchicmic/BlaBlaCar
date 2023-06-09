import {View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, memo, useRef} from 'react';
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

const ChatScreen = ({navigation, route}) => {
  //   const navigation = route?.params?.navigation;
  const [messages, setMessages] = useState<Array<string>>([]);
  const data = route?.params?.data;
  let chat = data;
  console.log(chat);
  // const name = 'Adarsh';
  const [currMessage, setCurrMessage] = useState<string>('');
  const ref: any = useRef();

  const handleChangeText = text => {
    setCurrMessage(text);
  };
  const handleSendMessage = () => {
    if (currMessage) {
      setMessages([...messages, currMessage]);
      ref.current.clear();
    }
  };
  console.log(messages, 'this is messages');
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
    </View>
  );
};

export default memo(ChatScreen);
