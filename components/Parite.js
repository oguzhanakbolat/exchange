import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import { Eur, Usd } from '../constans/icons';

const { width } = Dimensions.get('window');

const Parite = ({ eur, usd}) => {
  return (
    <View style={styles.container}>
        <View style={styles.iconContainers}>
            <View>
                <Usd color="#fffa" size="42"/>
            </View>
            <View style={styles.iconContainer}>
                <Eur color="#fff" size="52"/>
            </View>
        </View>
        <View>
            <Text style={styles.title}>Dolar/ Euro Paritesi</Text>
            <Text style={styles.text}>{(usd?.sales / eur?.sales).toFixed(4)} TL</Text>
        </View>
    </View>
  )
}

export default Parite;


const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: '#222',
        padding: 8,
        marginHorizontal: 16,
        marginBottom: 16,
        width: width -32,
        flexDirection: 'row'
    },
    iconContainers: {
        width: 72,
        height: 48,
        marginRight: 16,
        flexDirection: 'row'
    },
    iconContainer: {
        width: 48,
        height: 48,
        position: 'absolute',
        left: 15
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 4,
        color: '#fff',
    },
    text: {
        fontSize: 21,
        fontWeight: '300',
        color: '#fff',
    }


})
