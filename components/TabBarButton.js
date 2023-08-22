import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AboutIcon, CalcIcon, ContactIcon, HomeIcon, SettingIcon } from '../constans/icons';
const { width } = Dimensions.get('window');

const TabBarButton = ({ navigate, text, isActive, icon }) => {
    const w = useRef(new Animated.Value(0)).current;
    const l = useRef(new Animated.Value( width / 10)).current;
    const ballonW = useRef(new Animated.Value(0)).current;
    const ballonO = useRef(new Animated.Value(1)).current;
    const ballonT = useRef(new Animated.Value(1)).current;
    const ballonL = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(w, {
                    toValue: isActive ? width / 5 : 0,
                    duration: 3000,
                    useNativeDriver: false,
                }),

                Animated.timing(l, {
                    toValue: isActive ? 0 : width / 10,
                    duration: 3000,
                    useNativeDriver: false,
                })
            ]),
            
            Animated.parallel([
                Animated.timing(ballonW, {
                    toValue: isActive ? 30 : 2,
                    duration: 3000,
                    useNativeDriver: false,
                }),
                Animated.timing(ballonL, {
                    toValue: isActive ?  width / 10 - 8 :  width / 15 - 1,
                    duration: 3000,
                    useNativeDriver: false,
                }),
                Animated.timing(ballonO, {
                    toValue: isActive ? 0 : 1,
                    duration: 3000,
                    useNativeDriver: false,
                    easing: Easing.elastic(2, 1),
                }),
                Animated.timing(ballonT, {
                    toValue: isActive ? -50 : 0,
                    duration: 3000,
                    useNativeDriver: false,
                })
            ])
        ]).start();

    }, [isActive])



    return (
        <TouchableOpacity onPress={navigate}>
            <View style={styles.button}>
                <Animated.View style={[styles.mask, { width: w, left: l }]} />
                {
                    icon === 'Home' ? <HomeIcon size={32} color={isActive ? '#00387c' : '#fff' }/>
                    : icon === 'About' ? <AboutIcon size={36} color={isActive ? '#00387c' : '#fff' }/>
                    : icon === 'Settings' ? <SettingIcon size={36} color={isActive ? '#00387c' : '#fff' }/>
                    : icon === 'Contact' ? <ContactIcon size={36} color={isActive ? '#00387c' : '#fff' }/>
                    : icon === 'Calc' ? <CalcIcon size={32} color={isActive ? '#00387c' : '#fff' }/>
                    : null
                }
                {
                    <Animated.View style={[styles.nameContianer, { width: w, left: l }]} >
                        <View style={styles.context}>
                            <Text style={styles.name}>{ text }</Text>
                        </View>
                    </Animated.View>
                }
                <Animated.View style={[styles.ballon, {
                    width: ballonW,
                    height: ballonW,
                    opacity: ballonO,
                    top: ballonT,
                    
                    
                    }]} />
            </View>
        </TouchableOpacity>

    )
}

export default TabBarButton;

const styles = StyleSheet.create({
      button: {
        height: 48,
        paddingBottom: 10,
        width: width / 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      name: {
        fontSize: 10,
        color: '#00387c'
      },

    mask: {
        position: 'absolute',
        top: -10,
        height: 4,
       backgroundColor: '#6592C9',
         borderRadius: 2,
    },
    context: {
        width: width / 5,
        alignItems: 'center',
    },
    nameContianer: {
        position: 'absolute',
        width: width / 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:2,
        borderRadius: 20,
        marginTop: 2,
        overflow: 'hidden',
        bottom: -10
    },
    ballon: {
        position: 'absolute',
        backgroundColor: '#6592C9',
        borderRadius: '50%',
    },

})