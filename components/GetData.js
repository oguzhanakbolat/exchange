import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Emitter from '../utils/emitter';
import { getMe } from '../service';

const GetData = () => {
    const [sayi, setSayi] = useState('');

    const getUserName = async () => {
        const res = await getMe();
        setSayi(res.data.username)
    }

    useEffect(() => {
        Emitter.on('count', (x) => {
            getUserName();
        });
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{sayi}</Text>
    </View>
  )
}

export default GetData;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    }
})