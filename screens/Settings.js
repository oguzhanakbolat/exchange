import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingsScreen = () => {
  const navigation = useNavigation();


  console.log({ navigation})


  return (
    <View  style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>SettingsScreen</Text>

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Aç</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsScreen