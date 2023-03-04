import React, {useState, useEffect} from 'react';
import {View, Button, FlatList} from 'react-native';
import CryptoCard from './CryptoCard';
import {CryptoApi} from '../api';
let called = 0;
const CryptoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    CryptoDataFetch();
  }, []);
  const CryptoDataFetch = () => {
    CryptoApi().then(wholeData => {
      setData(wholeData);
    });
  };

  return (
    <View>
      <Button title="Refresh" onPress={CryptoDataFetch}></Button>
      <FlatList
        data={data}
        renderItem={({item}) => <CryptoCard item={item} key={item.key} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CryptoList;
