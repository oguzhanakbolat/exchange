import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native';

const Exchange = ({ data }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { symbol: data.symbol })}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.iconContianer}>
                        <Image style={styles.icon} source={{uri: 'https://www.tcmb.gov.tr/kurlar/kurlar_tr_dosyalar/images/' + data.symbol+ '.gif'}} />
                        <Text style={styles.symbol}>{data.symbol}</Text>
                    </View>
                    
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

export default memo(Exchange, (prevProps, nextProps) => {
    if(prevProps.data.buying !== nextProps.data.buying) {
        return false;
    }
    if(prevProps.data.sales !== nextProps.data.sales) {
        return false;
    }

    return true;
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        paddingVertical: 8,
    },
    iconContianer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    icon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
    },
    symbol: {
        fontSize: 21,
        marginBottom: 4,
        fontFamily: 'Rubik_600SemiBold'
    },
    name: {
        fontSize: 12,
        fontFamily: 'ShadowsIntoLight_400Regular',
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
