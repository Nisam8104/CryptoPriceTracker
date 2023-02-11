import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';

import CryptoCard from './CryptoCard';

const CryptoList = () => {
  <View>
    <FlatList
      data={{}}
      renderItem={() => {
        return <CryptoCard />;
      }}></FlatList>
  </View>;
};

export default CryptoList;
