import {View, SafeAreaView, Alert} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import StatusBarr from './components/StatusBar/StatusBar';
import ApplicationNavigator from './navigators/ApplicationNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import AppNavigator from './navigators/AppNavigator';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
// import messaging from '@react-native-firebase/messaging';

const App = () => {
  const [isConnected, setIsConnected] = useState<any>(null);
  useEffect(() => {
    // Register the device with FCM
    // Save the token
    // getToken();
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
    // return unsubscribe;
  }, []);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  }, []);
  // const getToken = async () => {
  //   await messaging().registerDeviceForRemoteMessages();
  //   // Get the token
  //   const token = await messaging().getToken();
  //   console.log(token, 'this is token');
  // };

  // NetInfo.addEventListener(state => {
  //   setIsConnected(state.isConnected);
  // });

  if (isConnected) {
    Toast.show({type: 'success', text1: 'Connected to internet'});
  } else {
    Toast.show({type: 'fail', text1: 'No internet'});
  }
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBarr backgroundColor="#fff" />
        <SafeAreaView
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100),
          }}>
          <ApplicationNavigator />
        </SafeAreaView>
      </View>
    </Provider>
  );
};

export default memo(App);
