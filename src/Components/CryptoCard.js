import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const CryptoCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsPage')}>
      <View style={styles.Container}>
        <Text style={styles.textstyle}>Coin: BitCoin</Text>
        <Text style={styles.textstyle}>INR: 1000</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 150,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    flex: 0,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textstyle: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
  },
});
export default CryptoCard;
