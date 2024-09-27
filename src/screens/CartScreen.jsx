import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {featured} from '../constants';
import {themeColors} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {selectResturant} from '../slices/ResturantSlice';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../slices/CartSlice';
export default function CartScreen() {
  const resturant = useSelector(selectResturant);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee = 2;
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  return (
    <View className=" flex-1 bg-white">
      <View className="flex-row py-2">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" items-center justify-center mx-3 bg-orange-400  w-10 h-10 rounded-full">
          <Icon name="arrow-left" color="white" size={20} />
        </TouchableOpacity>
        <View className="text-center justify-center ml-24">
          <Text className="text-center text-black font-[900] text-lg">
            Your cart
          </Text>
          <Text className="text-center text-gray-500 ">{resturant.name}</Text>
        </View>
      </View>
      {/* delivery time  */}

      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
        <Image
          className="w-20 h-20 rounded-full "
          source={require('../Images/delivery.png')}
        />
        <Text className="pl-4 text-center text-black font-bold  ">
          Delivery in 20-30 mints
        </Text>
        <Text className="pl-4   font-bold text-orange-500 ml-3 ">Change</Text>
      </View>

      {/* dishes  */}
      {Object.entries(groupedItems).map(([key, items]) => {
        let item = items[0];
        return (
          <View
            key={key}
            className="flex-row justify-between items-center space-x-3 bg-white px-3 py-2 my-2 rounded-3xl mb-3 mx-2  shadow-2xl shadow-gray-500 ">
            <View className="flex-row items-center space-x-2">
              <Text className="font-bold text-orange-500">
                {items.length} x
              </Text>
              <Image className="rounded-full h-16 w-16 " source={item.image} />

              <Text className="text-black font-bold">{item.name}</Text>
            </View>
            <View className=" flex-row space-x-2">
              <Text className="text-black text-base font-[800]">
                ${item.price}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({id: item.id}))}
                className="rounded-full p-1"
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Icon name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      {/* totals  */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="p-6 px-8 rounded-t-3xl space-y-4 bottom-0 absolute w-full">
        <View className="flex-row justify-between">
          <Text className="pl-4 text-center text-black font-bold  ">
            Subtotal
          </Text>
          <Text className="pl-4 text-center text-black font-bold  ">
            ${cartTotal}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="pl-4 text-center text-black font-bold  ">
            Delivey Fee
          </Text>
          <Text className="pl-4 text-center text-black font-bold  ">
            ${deliveryFee}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="pl-4 text-center text-black font-bold  ">
            Order Total
          </Text>
          <Text className="pl-4 text-center text-black font-bold  ">
            ${cartTotal + deliveryFee}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Orderpreparing')}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="rounded-full p-3">
          <Text className="text-white text-center font-bold text-lg">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
