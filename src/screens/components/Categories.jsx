import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../../constants';

export default function Categories() {
  const [activeCat, setActiveCat] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories?.map((cat, index) => {
          let isActive = cat.id == activeCat;
          let btnClass = isActive ? ' bg-orange-400' : ' bg-gray-200';
          let textClass = isActive
            ? ' font-semibold text-gray-800'
            : ' text-gray-400';
          return (
            <View key={index} className=" justify-center items-center mr-6">
              <TouchableOpacity
                className={'p-1 rounded-full shadow bg-gray-200' + btnClass}
                onPress={() => setActiveCat(cat.id)}>
                <Image
                  className="w-10 h-10 justify-center"
                  source={cat.image}
                />
              </TouchableOpacity>
              <Text className={'text-black text-sm' + textClass}>
                {cat.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
