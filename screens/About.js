import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { api } from '../constans/conf/axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '../contextAPI/useAuth'

const AboutScreen = () => {
  const { navigate } = useNavigation();
  const { logout, user } = useContext(useAuth);

  console.log(user)

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>{ user.username}</Text>
        </View>
        <View style={styles.item}>
          <Text>{ user.email}</Text>
        </View>



        <TouchableOpacity style={styles.button} onPress={() => logout(navigate)}>
          <Text>Çıkış</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  button: {
    backgroundColor: '#6592C9',
    height: 60,
    borderRadius: 8,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})