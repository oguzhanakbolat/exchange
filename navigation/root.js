import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contextAPI/useAuth';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import PariteScreen from '../screens/Parite';
import CalcScreen from '../screens/Calc';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';
import ContactScreen from '../screens/Contact';

const Stack = createNativeStackNavigator();

const RooNavigation = () => {
    const { isAuth, authControl } = useContext(useAuth);

    useEffect(() => {
        authControl();
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                !isAuth && (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
                )
            }

                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Parite" component={PariteScreen} />
                <Stack.Screen name="Calc" component={CalcScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RooNavigation