import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {themeColors} from '../theme';
import Categories from './components/Categories';
import Featured from './components/Featured';
import {featured} from '../constants';
export default function Home() {
  return (
    <ScrollView className="bg-white flex-1">
      {/* search bar  */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-1 rounded-full border mt-3 px-2 border-gray-300">
          <Icon name="search" color="black" size={20} />
          <TextInput
            placeholder="Resturants"
            placeholderTextColor={'gray'}
            className="ml-2 flex-1 text-black"
          />
          <View className="flex-row items-center border-0 border-l-2 pl-2 border-gray-300">
            <Icon name="map-pin" color="gray" size={20} />
            <Text className="text-gray-600">New York,NYC</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3  rounded-full">
          <Icon name="sliders" size={20} />
        </View>
      </View>

      {/* main  */}
      <Categories />

      {/* featured  */}
      <View className="mt-5">
        {[featured, featured, featured].map((item, index) => {
          return (
            <Featured
              key={index}
              title={item.title}
              resturants={item.resturants}
              description={item.description}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
