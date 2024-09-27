import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Orderpreparing() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 1000);
  });
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../Images/delivery-boy.gif')}
        className="h-80 w-full"
      />
    </View>
  );
}
