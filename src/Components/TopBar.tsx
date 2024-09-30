import {View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const TopBar = () => {
  const navigation = useNavigation(); // Access the navigation prop

  return (
    <View className="h-[20vh] pt-8 px-3 flex-row pointer-events-none justify-between bg-[#142D8866] rounded-bl-[15vw] rounded-br-[15vw]">
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
        <AntDesign name="menuunfold" size={24} />
      </TouchableOpacity>
      <View className="relative">
        <TextInput className="outline-none bg-white rounded-3xl h-[5vh] w-[70vw]" />
      </View>

      <TouchableOpacity className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
        <FontAwesome5 name="user-alt" size={24} color={'#161488'} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
