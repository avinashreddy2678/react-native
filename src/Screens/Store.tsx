import {View} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../Components/TopBar';
import {ScrollView} from 'react-native-gesture-handler';

const Store = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 6, 7, 8]);
  return (
    <ScrollView>
      <View>
        <TopBar />
      </View>
      {data.map((item, index) => (
        <View
          key={index}
          className="w-[88vw] h-[15vh] bg-[#D9D9D9] mx-auto my-2 rounded-lg"></View>
      ))}
    </ScrollView>
  );
};

export default Store;
