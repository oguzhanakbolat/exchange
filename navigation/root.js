import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import PariteScreen from '../screens/Parite';
import CalcScreen from '../screens/Calc';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';
import ContactScreen from '../screens/Contact';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { authControl, setFCMToken } from '../store/userSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
});


const RooNavigation = () => {
   const user = useSelector(state => state.user);
   const dispatch = useDispatch();

    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
      dispatch(authControl())
    }, [])

    useEffect(() => {
      registerForPushNotificationsAsync().then(token => {
        dispatch(setFCMToken(token));
      });
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log(1, notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(2, response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    }, []);

    if(user.isAuth === null) return <View><Text>asdfasdfasdf</Text></View>;

    return (
        <>
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false}}  tabBar={props => <TabNav {...props} />}>
                <Tab.Screen name="Main" component={MainScreen} />
                <Tab.Screen name="Detail" component={DetailScreen} />
                <Tab.Screen name="Parite" component={PariteScreen} />
                <Tab.Screen name="Calc" component={CalcScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Contact" component={ContactScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default RooNavigation;


async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      console.log('Fiziksel bir cihazda deneyiniz.');
    }
  
    return token;
  }