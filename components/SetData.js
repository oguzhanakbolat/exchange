import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Emitter from '../utils/emitter';

const SetData = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        Emitter.emit('count', count);
    }, [count]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(x => x + 1)}>
                <Text style={styles.text}>{count}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SetData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#faa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    }
})