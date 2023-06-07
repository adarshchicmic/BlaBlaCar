import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgLeftArrowWithout} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CustomButton from '../CustomButton/CustomButton';
import styles from './styles';

import CustomLeavingFromGoingTo from '../CustomLeavingFromGoingTo/CustomLeavingFromGoingTo';

interface Props {
  goingFrom: any;
  goingTo: any;
  passengerCount: any;
  navigation: any;
}

const CustomArrowButtonFilter = ({
  goingFrom,
  goingTo,
  passengerCount,
  navigation,
}: Props) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrowStyle}
        onPress={() => handleGoBack()}>
        <SvgLeftArrowWithout
          width={widthPercentageToDP(5)}
          height={heightPercentageToDP(5)}
        />
      </TouchableOpacity>
      <View>
        <CustomLeavingFromGoingTo
          leavingFrom={goingFrom}
          goingTo={goingTo}
          passengerCount={passengerCount}
          navigation={navigation}
          moreStyle={{
            width: widthPercentageToDP(50),
            marginVertical: heightPercentageToDP(0),
            marginLeft: widthPercentageToDP(5),
          }}
        />
      </View>

      <CustomButton
        btnText="Filter"
        styleTxt={styles.filterStyle}
        styleBtn={styles.filterButtonStyle}
      />
    </View>
  );
};

export default CustomArrowButtonFilter;
