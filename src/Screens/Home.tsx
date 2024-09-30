import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import TopBar from '../Components/TopBar';
interface props {
  image: ImageSourcePropType;
  title?: string;
  subtitle?: string;
}

const Home = () => {
  const width = Dimensions.get('window').width;
  const [data, setData] = useState<props[]>([
    {
      image: require('../assests/Gifts.png'),
      title: 'OFFER ZONE 40%',
      subtitle: 'Get 40% to 60% off',
    },
    {
      image: require('../assests/shopping.png'),
    },
    {
      image: require('../assests/top-view.png'),
    },
    {
      title: 'Vegetables',

      image: require('../assests/isometric.png'),
    },
  ]);
  const [data2, setData2] = useState<props[]>([
    {
      image: require('../assests/isometric.png'),
    },
    {
      image: require('../assests/phone.png'),
    },
  ]);

  return (
    <ScrollView>
      {/* TopBar */}
      <Image
        source={require('../assests/Bot.png')}
        className="absolute bottom-2 right-4 p-2 bg-[#142D88] rounded-full"
      />
      <View className="relative">
        <TopBar />

        {/* Carousel */}
        <View className="flex-1 absolute top-[14vh] px-5 z-0">
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(3).keys()]}
            scrollAnimationDuration={1000}
            renderItem={({index}) => (
              <View className="flex-1 bg-[#D9D9D9] w-[90vw] outline-none rounded-lg justify-center items-center">
                <Text className="text-center text-[30px]">{index}</Text>
              </View>
            )}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'relative',
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      <View className="mt-[23vh] mb-20 mx-auto">
        <View className="flex-wrap flex-row relative px-4">
          {data.map((item, key) => (
            <View
              key={key}
              className="bg-[#142D8866] p-2 w-[160px] h-[160px] rounded-lg mx-2 my-3">
              {item.title && (
                <Text className="text-start text-lg font-bold text-[#161488]">
                  {item.title}
                </Text>
              )}
              {item.subtitle && (
                <Text className="text-start text-[#161488]">
                  {item.subtitle}
                </Text>
              )}
              <View className="w-full h-full flex absolute justify-end items-end">
                <Image source={item.image} className="h-[60%] w-[60%]" />
              </View>
            </View>
          ))}
        </View>
        <View className=" z-50">
          {data2.map((item, index) => (
            <View
              key={index}
              className="w-[86vw] bg-[#142D8866] rounded-lg flex justify-end items-end h-[20vh] mx-auto my-3">
              <Image source={item.image} className="h-[90%] w-[50%]" />
            </View>
          ))}
        </View>
        <View className="w-[86vw] flex-row mt-4 justify-between mx-auto">
          <View>
            <Text className="w-[50%] text-3xl">Plan </Text>

            <Text className="text-lg">
              {' '}
              Your Needs {'\n'} With Master’s Known AI
            </Text>
          </View>
          <Image source={require('../assests/burger.png')} />
        </View>
        <View className="w-[86vw] flex-row items-center justify-between mx-auto">
          <Image source={require('../assests/Young-woman.png')} />
          <Text className="w-[50%]">Hi I'm Mk. Help? </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
