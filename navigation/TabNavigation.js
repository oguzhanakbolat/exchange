import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import PariteScreen from '../screens/Parite';
import CalcScreen from '../screens/Calc';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';
import ContactScreen from '../screens/Contact';
import TabNav from './TabNav';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}  tabBar={props => <TabNav {...props} />}>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Parite" component={PariteScreen} />
        <Tab.Screen name="Calc" component={CalcScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation;
