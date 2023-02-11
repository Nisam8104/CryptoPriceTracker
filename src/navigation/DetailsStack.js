import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import DetailsPage from "../Pages/Detailspage";
import HomePage from "../Pages/HomePage";


const Stack = createStackNavigator();
const DetailsStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="DetailsPage" component={DetailsPage} />
    </Stack.Navigator>
  );
  export default DetailsStack;