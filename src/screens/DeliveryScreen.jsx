import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {featured} from '../constants';
import {themeColors} from '../theme';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {selectResturant} from '../slices/ResturantSlice';
import {emptyCart} from '../slices/CartSlice';
// import MapView, {Marker} from 'react-native-maps';

export default function DeliveryScreen() {
  const resturant = useSelector(selectResturant);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate('Home');
    dispatch(emptyCart());
  };
  return (
    <View className="flex-1">
      {/* <MapView
        className="flex-1"
        mapType="standard"
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{latitude: resturant.lat, longitude: resturant.lng}}
        />
      </MapView> */}
      <Image source={require('../Images/map.jpg')} className="w-full h-full" />
      <View className="bg-white rounded-t-3xl absolute bottom-0 w-full px-3">
        <View className="flex-row justify-between items-center">
          <View className="m-3">
            <Text className="text-black font-bold">Estimated Arrival</Text>
            <Text className="text-black text-2xl font-[900]">20-30 mints</Text>
            <Text className="text-black">Your Order is on the Way!</Text>
          </View>
          <Image
            source={require('../Images/delivery.png')}
            className="h-16 w-16 rounded-full"
          />
        </View>
        <View
          className="flex-row rounded-full justify-between px-3 py-2 items-center my-2"
          style={{backgroundColor: themeColors.bgColor(0.8)}}>
          <Image
            source={require('../Images/new.jpg')}
            className="h-16 w-16 rounded-full"
          />
          <View>
            <Text className="text-white font-bold text-xl">Hamad</Text>
            <Text className="text-white ">Your Rider</Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${'03124047953'}`)}
              className="bg-white rounded-full h-10 w-10 items-center justify-center">
              <Icon name="phone" size={25} style={{color: themeColors.text}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white rounded-full h-10 w-10 items-center justify-center">
              <Icon name="x" size={25} style={{color: 'red'}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
