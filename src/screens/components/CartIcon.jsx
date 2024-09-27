import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../slices/CartSlice';
import {themeColors} from '../../theme';

export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems?.length) return;
  return (
    <View className="absolute bottom-5 w-full z-50 ">
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center rounded-full p-4 py-3 shadow-lg mx-3 ">
        <View className="p-2 px-4 rounded-full bg-gray-400">
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="font-[900] text-white text-lg">View Cart</Text>
        <Text className="font-[900] text-white text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
