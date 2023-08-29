import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { authControl, setFCMToken } from '../store/userSlice';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';
import MainPages from './MainPages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
         <DrawerNavigation /> 
      </NavigationContainer>
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