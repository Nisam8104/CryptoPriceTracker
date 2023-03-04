import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Headingtext from '../Components/Heading';

const DetailsPage = props => {
  console.log(props);
  const {key, item} = props.route.params;

  return (
    <View>
      <Headingtext title="Full Details" />
      <View style={styles.Container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.textstyle}>Base Asset: {item.baseAsset}</Text>
            <Text style={styles.textstyle}>Last Price: {item.lastPrice}</Text>
            <Text style={styles.textstyle}>openPrice: {item.openPrice}</Text>
            <Text style={styles.textstyle}>lowPrice: {item.lowPrice}</Text>
            <Text style={styles.textstyle}>highPrice: {item.highPrice}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.textstyle}>Last Price: {item.lastPrice}</Text>
            <Text style={styles.textstyle}>volume: {item.volume}</Text>
            <Text style={styles.textstyle}>bidPrice: {item.bidPrice}</Text>
            <Text style={styles.textstyle}>askPrice: {item.askPrice}</Text>
            <Text style={styles.textstyle}>at: {item.at}</Text>
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
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
});
export default DetailsPage;
