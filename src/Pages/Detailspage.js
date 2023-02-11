import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Headingtext from '../Components/Heading';



const DetailsPage = () => {
 
  return (
    <View>
        <Headingtext title='Full Details'/>
    <View style={styles.Container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.textstyle}>Base Asset: Btc</Text>
          <Text style={styles.textstyle}>Last Price: 2500000</Text>
          <Text style={styles.textstyle}>openPrice: 1901801</Text>
          <Text style={styles.textstyle}>lowPrice: 1860000.0</Text>
          <Text style={styles.textstyle}>highPrice: 1920482.0</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.textstyle}>Last Price: 2500000</Text>
          <Text style={styles.textstyle}>volume: 15.82745</Text>
          <Text style={styles.textstyle}>bidPrice: 1870001.0</Text>
          <Text style={styles.textstyle}>askPrice: 1897899.0</Text>
          <Text style={styles.textstyle}>at: 1676061067000</Text>
        </View>
      </View>
    </View>
    </View>
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
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  textstyle: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
    paddingBottom:10,
    fontWeight:'bold',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom:5,
  },
});
export default DetailsPage;
