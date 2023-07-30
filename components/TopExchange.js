import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MoneyIcons from './MoneyIcons';

function TopExchange({ usd, eur}) {
  return (
    <View style={styles.exchangeContainer}>
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.iconContianer}>
                    <MoneyIcons size="72" color="#222" name={usd?.symbol} stroke="#fff" />
                </View>
                <Text style={styles.symbol}>{usd?.symbol}</Text>
            </View>
            <Text style={styles.name}>{usd?.name}</Text>

            <View style={styles.exchagne}>
                <Text style={styles.text}>Alış</Text>
                <Text style={styles.price}>{usd?.buying}</Text>
            </View>
            <View style={styles.border} />
            <View style={styles.exchagne}>
                <Text style={styles.text}>Satış</Text>
                <Text style={styles.price}>{usd?.sales}</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.iconContianer}>
                    <MoneyIcons size="72" color="#222" name={eur?.symbol} stroke="#fff" />
                </View>
                <Text style={styles.symbol}>{eur?.symbol}</Text>
            </View>
            <Text style={styles.name}>{eur?.name}</Text>

            <View style={styles.exchagne}>
                <Text style={styles.text}>Alış</Text>
                <Text style={styles.price}>{eur?.buying}</Text>
            </View>
            <View style={styles.border} />
            <View style={styles.exchagne}>
                <Text style={styles.text}>Satış</Text>
                <Text style={styles.price}>{eur?.sales}</Text>
            </View>
        </View>
    </View>
  )
}

export default TopExchange;

const styles = StyleSheet.create({
    exchangeContainer: {
        flexDirection: 'row',
        paddingTop: 16,
        height: 180,
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        marginBottom: 16,
        marginHorizontal: 8,
        padding: 8,
        backgroundColor: '#222',
        borderRadius: 8,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        height: 48,
        paddingLeft: 72
    },
    iconContianer: {
        position: 'absolute',
        width: 72,
        height: 72,
        top: -40,
        left: -10,
    },
    symbol: {
        fontSize: 21,
        fontWeight: '700',
        color: '#fff',
    },
    name: {
        fontSize: 14,
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },
    exchagne: {
        alignItems: 'center',
        width: '100%',
        marginTop: 8,
        flexDirection: 'row'
    },
    border: {
        width: '100%',
        height: 1,
        backgroundColor: '#aaa',
        marginVertical: 8
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: '#fff',
        width: 50
    },
    price: {
        fontSize: 18,
        fontWeight: '300',
        color: '#fff',
    }
});
