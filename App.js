import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DetailsStack from './src/navigation/DetailsStack';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <DetailsStack />
      </NavigationContainer>
    </View>
  );
};
export default App;
