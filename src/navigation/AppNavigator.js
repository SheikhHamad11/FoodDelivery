import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ResturantScreen from '../screens/ResturantScreen';
import CartScreen from '../screens/CartScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import Orderpreparing from '../screens/OrderPreparing';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        name="Orderpreparing"
        options={{presentation: 'fullScreenModal'}}
        component={Orderpreparing}
      />
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      <Stack.Screen name="ResturantScreen" component={ResturantScreen} />
    </Stack.Navigator>
  );
}
