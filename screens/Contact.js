import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SetData from '../components/SetData'
import { SafeAreaView } from 'react-native-safe-area-context'
import GetData from '../components/GetData'

const ContactScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <View style={{ flex: 1}}>
      <SetData />
      <GetData />
    </View>
    </SafeAreaView>
  )
}

export default ContactScreen