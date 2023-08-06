import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SecureIcon from '../constans/icons/Secure';
import NoSecureIcon from '../constans/icons/noSecure';

const LoginInput = ({
    setValue,
    value,
    leftIcon,
    rightIcon,
    secure = false,
    placeholder,
    lowerCase = false,
    error }) => {
        
    const [isShow, setIsShow] = useState(true);

    return (
        <View style={styles.inputContianer}>
            <View style={[styles.contianer, error && { borderBottomColor: '#ff0000'}]}>
                { leftIcon && leftIcon }
                <TextInput
                    secureTextEntry={isShow ? secure : false}
                    placeholderTextColor={'#D9EBFD'}
                    value={value}
                    onChangeText={text => setValue(lowerCase ? text.toLocaleLowerCase(): text)}
                    style={[
                        styles.input,
                        error && { color: '#ff0000'},
                        secure && { paddingRight: 25 },
                        rightIcon && { paddingLeft: 0, paddingRight: 32 }
                    ]}
                    placeholder={placeholder} />

                { rightIcon && rightIcon }
                {
                    secure && 
                    <TouchableOpacity
                        style={[styles.secure, rightIcon && { right: 30 }]}
                        onPress={() => setIsShow(x => !x)}>
                        {
                            isShow ?
                                <SecureIcon size={18} color={"#6592C9"}/>
                                : <NoSecureIcon size={18} color={"#6592C9"}/>
                        }
                        
                    </TouchableOpacity>
                }
            </View>
            {
                error && error.length > 0 && <Text style={styles.error}>* {error}</Text>
            }
      </View>
    )
} 

export default LoginInput;

const styles = StyleSheet.create({
    inputContianer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 34,
        alignItems: 'center'
    },
    contianer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom:6,
        borderBottomColor: '#6592C9',
        borderBottomWidth: 1,
        paddingBottom: 8,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 24,
        fontSize: 16,
        fontWeight: '500',
        color: '#6592C9',
        paddingLeft: 8
    },
    error: {
        color: '#FF0000',
        width: '100%',
        fontSize: 12,
    },
    secure: {
        position: 'absolute',
        right: 0,
        top: 3
    }
});