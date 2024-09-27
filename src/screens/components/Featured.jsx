import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {themeColors} from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
export default function Featured({title, description, resturants}) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 ">
        <View>
          <Text className="font-[900] text-lg text-black">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity className="">
          <Text style={{color: themeColors.text}} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="overflow-visible py-5"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 15}}>
        {resturants.map((item, index) => {
          return <ResturantCard item={item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

const ResturantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('ResturantScreen', {...item})}>
      <View
        style={{shadowColor: themeColors.bgColor(0.5), shadowRadius: 7}}
        className="mr-6 bg-white rounded-3xl shadow-lg shadow-gray-700">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-1">
          <Text className="text-black text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon name="star" color="orange" size={20} />
            <Text className="text-xs text-gray-700">
              <Text>{item.stars}</Text>
              <Text>({item.reviews}reviews).</Text>
              <Text className="font-[900]">{item.category}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon1 name="map-pin" color="gray" size={20} />
            <Text className="text-xs text-gray-700">
              Near By.{item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
