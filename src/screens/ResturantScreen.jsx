import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {themeColors} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../slices/CartSlice';

import CartIcon from './components/CartIcon';
import {setResturant} from '../slices/ResturantSlice';
export default function ResturantScreen() {
  const navigation = useNavigation();
  const {params} = useRoute();
  let item = params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setResturant({...item}));
    }
  });
  return (
    <View>
      <ScrollView className="mb-20">
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-1 mx-3 bg-gray-50 p-2 rounded-full">
            <Icon name="arrow-left" size={20} color={'orange'} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-black text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icon name="star" color="orange" size={20} />
                <Text className="text-xs text-gray-700">
                  <Text>{item.stars}</Text>
                  <Text>({item.reviews}reviews).</Text>
                  <Text className="font-[900]">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon name="map-pin" color="gray" size={20} />
                <Text className="text-xs text-gray-700">
                  Near By.{item.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 text-xs">{item.description}</Text>
            <View>
              <Text className="px-4 py-4 text-2xl font-extrabold text-black">
                Menu
              </Text>
              {item.dishes.map((dish, index) => (
                <DishRow item={{...dish}} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <CartIcon />
    </View>
  );
}

const DishRow = ({item}) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToCart({...item}));
    console.log('increased');
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}));
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl mb-3  shadow-2xl shadow-gray-500 ">
      <Image className="rounded-3xl h-24 w-24 " source={item.image} />
      <View className="ml-2">
        <Text className="text-black font-bold">{item.name}</Text>
        <Text className="text-gray-700">{item.description}</Text>
        <View className="flex-row justify-between mt-2">
          <View className="flex-row">
            <Text className="text-black font-[900]">${item.price}</Text>
          </View>
          <View className="flex-row space-x-2 items-center ml-24">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="rounded-full p-1"
              style={{backgroundColor: themeColors.bgColor(1)}}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
            <Text className="text-black font-bold">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="rounded-full p-1"
              style={{backgroundColor: themeColors.bgColor(1)}}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
