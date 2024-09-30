import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import New from '../Screens/New';
import TabsNavigator from './TabsNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="tabs"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="tabs" component={TabsNavigator} />
      <Drawer.Screen name="New" component={New} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
