import {View, Text} from 'react-native';
import React, {memo} from 'react';
import CustomSearchResult from '../../../components/CustomSearchResult/CustomSearchResult';
import CustomArrowButtonFilter from '../../../components/CustomArrowButtonFilter/CustomArrowButtonFilter';

const SearchResult = () => {
  return (
    <View>
      <CustomSearchResult />
      <Text> nmnbmnfdjhn </Text>
      <CustomArrowButtonFilter />
    </View>
  );
};

export default memo(SearchResult);
