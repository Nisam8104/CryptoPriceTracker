import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Button } from 'react-native/Libraries/Components/Button';

import CryptoList from '../Components/CryptoList';
import Headingtext from '../Components/Heading';


const HomePage = () => {
    
  return (
    <View style={styles.headerContainer}>
        <Headingtext title="Crypto INR Pricing" />
        <CryptoList/>
    </View>
    
  );
};
const styles = StyleSheet.create({
    headerContainer: {
      padding: 20,
      backgroundColor: 'white',
      flex: 1,
    },
  });

export default HomePage;