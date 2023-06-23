import {View, SafeAreaView, Alert} from 'react-native';
import React, {memo, useEffect} from 'react';
import StatusBarr from './components/StatusBar/StatusBar';
import ApplicationNavigator from './navigators/ApplicationNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import AppNavigator from './navigators/AppNavigator';
import {useNetInfo} from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Register the device with FCM
    // Save the token
    getToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();

    // Get the token
    const token = await messaging().getToken();
    console.log(token, 'this is token');
  };
  const netInfo = useNetInfo();

  if (netInfo?.isConnected) {
    Toast.showWithGravity('Connected to internet', Toast.SHORT, Toast.BOTTOM);
  } else {
    Toast.showWithGravity('No internet', Toast.SHORT, Toast.BOTTOM);
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
