import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CryptoCard from './CryptoCard';

const CryptoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr');
        const result = await response.text();
        const wholeData = JSON.parse(result);
        setData(wholeData);
      } catch (error) {
        console.error('error', error);
      }
    };
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <CryptoCard item={item.key} />}
        keyExtractor={item => item.id}

      />
    </View>
  );
};

export default CryptoList;
