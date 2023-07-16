import React, {useState} from 'react';
import {View, StatusBar, NativeModules, Platform} from 'react-native';

interface Props {
  backgroundColor: string;
  barStyle?: any;
}
const StatusBarr: React.FC<Props> = ({
  backgroundColor,
  barStyle = 'dark-content',
}: Props) => {
  const [height, setHeight] = useState<number>(0);
  const {StatusBarManager} = NativeModules;
  Platform.OS === 'ios' &&
    StatusBarManager?.getHeight((statusBarHeight: any) => {
      setHeight(statusBarHeight?.height);
    });
  const STATUSBAR_HEIGHT: number =
    Platform.OS === 'ios' ? height : StatusBarManager.HEIGHT - 30;

  return (
    <View style={{height: STATUSBAR_HEIGHT, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default StatusBarr;
