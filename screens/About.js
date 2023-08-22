import { View, Animated, Text, Touchable, TouchableOpacity, StyleSheet, Easing } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const AboutScreen = () => {
  const mLeft = useRef(new Animated.Value(0)).current;
  const bRadius = useRef(new Animated.Value(0)).current;
  const w = useRef(new Animated.Value(0)).current;
  const color = useRef(new Animated.Value(0)).current;

  const go = () => {
    Animated.sequence([

      Animated.timing(w, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(mLeft, {
        toValue: 294,
        duration: 1000,
        easing: Easing.elastic(2, 1),
        useNativeDriver: false,
      }),
  
      Animated.timing(bRadius, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
  
    ]).start();

  };

  const come = () => {
    Animated.parallel([
      Animated.timing(mLeft, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(bRadius, {
        toValue: 50,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(w, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      })

    ]).start();
  }


  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>


      <TouchableOpacity style={styles.button} onPress={() => come()}>
        <Text>Come</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.box, {
        marginLeft: mLeft,
        borderRadius: bRadius,
        width: w,
        height: w,
        
        }]} />

  
      <TouchableOpacity style={styles.button} onPress={() => go()}>
        <Text>Go</Text>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: 'yellow'
  }
})