import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PariteScreen = () => {
 const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PariteScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go to Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PariteScreen