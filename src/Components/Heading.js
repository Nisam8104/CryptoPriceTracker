import React from 'react';
import { Text, View } from 'react-native';

const Headingtext = (props) => {
  
  return (
    <Text style={styles.headingtext}>{props.title}</Text>
  )
};

  const styles = {
    headingtext: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 50,
      },
    };

    export default Headingtext