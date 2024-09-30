/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Love from '../Screens/Love';
import Store from '../Screens/Store';
import List from '../Screens/List';
import Cart from '../Screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabsNavigator = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <Ionicons
                  color={focused ? '#142D88' : '#142D8899'}
                  name="home"
                  size={24}
                />
              );
            },
            tabBarLabelStyle: {
              color: '#142D8899',
            },
            tabBarStyle: {
              paddingBottom: 10,
              height: 70,
            },
          }}
        />

        <Tabs.Screen
          name="Love"
          component={Love}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <Ionicons
                  color={focused ? '#142D88' : '#142D8899'}
                  name="heart"
                  size={24}
                />
              );
            },
            tabBarLabelStyle: {
              color: '#142D8899',
            },
            tabBarStyle: {
              paddingBottom: 10,
              height: 70,
            },
          }}
        />
        <Tabs.Screen
          name="store"
          component={Store}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <Ionicons
                  color={focused ? '#142D88' : '#142D8899'}
                  name="storefront"
                  size={24}
                />
              );
            },
            tabBarLabelStyle: {
              color: '#142D8899',
            },
            tabBarStyle: {
              paddingBottom: 10,
              height: 70,
            },
          }}
        />
        <Tabs.Screen
          name="list"
          component={List}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <Ionicons
                  color={focused ? '#142D88' : '#142D8899'}
                  name="list"
                  size={24}
                />
              );
            },
            tabBarLabelStyle: {
              color: '#142D8899',
            },
            tabBarStyle: {
              paddingBottom: 10,
              height: 70,
            },
          }}
        />
        <Tabs.Screen
          name="Cart"
          component={Cart}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <Ionicons
                  color={focused ? '#142D88' : '#142D8899'}
                  name="cart"
                  size={24}
                />
              );
            },
            tabBarLabelStyle: {
              color: '#142D8899',
            },
            tabBarStyle: {
              paddingBottom: 10,
              height: 70,
            },
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default TabsNavigator;
