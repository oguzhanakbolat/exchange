import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Exchange = ({ data }) => {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { symbol: data.symbol })}>
        <View style={styles.container}>
            <View style={styles.iconContianer}>
                <Image style={styles.icon} source={{uri: data.icon}} />
            </View>
            <View style={styles.title}>
                <Text style={styles.symbol}>{data.symbol}</Text>
                <Text style={styles.name}>{data.name}</Text>
            </View>
            <View style={styles.exchagne}>
                <Text style={styles.text}>Alış</Text>
                <Text style={styles.price}>{data.buying}</Text>
            </View>
            <View style={styles.exchagne}>
                <Text style={styles.text}>Satış</Text>
                <Text style={styles.price}>{data.sales}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Exchange;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        paddingVertical: 8,

    },
    iconContianer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },

    icon: {
        width: 48,
        height: 48,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
    },
    symbol: {
        fontSize: 21,
        fontWeight: '700',
        marginBottom: 4,
    },
    name: {
        fontSize: 12,
    },
    exchagne: {
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 72
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        fontWeight: '300',
    }
});
