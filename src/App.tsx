import {View, SafeAreaView} from 'react-native';
import React, {memo} from 'react';
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

const App = () => {
  const netInfo = useNetInfo();

  if (netInfo?.isConnected) {
    Toast.showWithGravity('Connected to internet', Toast.LONG, Toast.BOTTOM);
  } else {
    Toast.showWithGravity('No internet', Toast.LONG, Toast.BOTTOM);
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
