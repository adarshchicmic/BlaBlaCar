import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, memo} from 'react';
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
  const data = route?.params?.data;
  let chat = data;
  const name = 'Adarsh';
  const [currMessage, setCurrMessage] = useState<string>('');
  const handleChangeText = text => {
    setCurrMessage(text);
  };
  const handleSendMessage = () => {
    if (currMessage) {
      const index = chat?.indexOf(name);
      index
        ? chat[index]?.push({
            name: name,
            message: currMessage,
            sendAt: new Date(),
          })
        : null;
    }
  };
  return (
    <View style={styles.container}>
      <CustomBackArrowButton navigation={navigation} />
      <ScrollView>
        {chat?.map((val, index) => (
          <CustomMessage key={index} name={val?.message} />
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
