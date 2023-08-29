import { View, Text } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import PariteScreen from '../screens/Parite';
import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const MainPages = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main" >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Parite" component={PariteScreen} />
    </Stack.Navigator>
  )
}

export default MainPages;
