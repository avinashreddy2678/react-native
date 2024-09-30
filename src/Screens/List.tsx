import * as React from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TopBar from '../Components/TopBar';
const FirstRoute = ({notes}) => (
  <View className="w-full">
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed && 'transparent',
        },
      ]}
      className="flex-row justify-end mt-2"
      onPress={() => {}}>
      <Text className="p-3 bg-[#142D8833] w-[28vw] rounded-3xl">
        + Add Notes
      </Text>
    </Pressable>
    {notes.map((note: any, index: number) => (
      <View className="w-full flex justify-evenly pl-3 h-[15vh] rounded-xl bg-[#D9D9D9] my-2">
        <Text>Note :</Text>
        <Text key={index} className="text-[#142D88] text-3xl">
          {note.Note}
        </Text>
      </View>
    ))}
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return (
        <FirstRoute notes={[{Note: 'Monthly List'}, {Note: 'May List 2'}]} />
      );
    case 'second':
      return <SecondRoute />;
    default:
      return null;
  }
};

// Custom TabBar to style selected tab
const CustomTabBar = props => {
  const layout = useWindowDimensions(); // Get window dimensions
  const tabWidth = layout.width / props.navigationState.routes.length; // 50% of the width per tab
  const tabHeight = 50;
  return (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#D9D9D9'}}
      renderLabel={({route, focused}) => (
        <View
        
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: !focused ? 'white' : '#D9D9D9',
            width: tabWidth,
            height: tabHeight,
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text>{route.title}</Text>
        </View>
      )}
      style={{
        backgroundColor: 'transparent',
      }}
    />
  );
};

export default function List() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'List'},
    {key: 'second', title: 'AllList'},
  ]);

  return (
    <>
      <TopBar />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width * 0.8}}
        renderTabBar={CustomTabBar}
        className="w-[80vw] mx-auto mt-4 rounded-lg bg-transparent"
      />
    </>
  );
}
