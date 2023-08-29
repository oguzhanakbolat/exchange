import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import PariteScreen from '../screens/Parite';
import CalcScreen from '../screens/Calc';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';
import ContactScreen from '../screens/Contact';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false,  drawerPosition: 'left' }}
      drawerContent={props => <DrawerContent {...props} />}
      >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="Parite" component={PariteScreen} />
      <Drawer.Screen name="Calc" component={CalcScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;